import { defineConfig, type HeadConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { withMermaid } from 'vitepress-plugin-mermaid'
// @ts-ignore
import timeline from "vitepress-markdown-timeline";
import { writeFile } from 'fs/promises'
import { join as joinPath } from 'path'

const SITE_TITLE = "Vibe Coding 全栈实战教程"
const SITE_DESCRIPTION = "从 Next.js 到 AI 辅助开发，用 Vibe Coding 的方式重塑你的编程工作流。涵盖零基础入门、全栈开发、数据库、部署运维等核心主题。"

function normalizeSiteUrl(url: string): string {
  return url.trim().replace(/\/+$/, '');
}

function resolveSiteUrl(): string {
  const raw =
    process.env.SITE_URL ||
    process.env.EDGEONE_PAGES_URL ||
    process.env.DEPLOY_URL ||
    process.env.URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');

  if (!raw) return '';
  const normalized = normalizeSiteUrl(raw);
  if (/^https?:\/\//i.test(normalized)) return normalized;
  return `https://${normalized}`;
}

const SITE_URL = resolveSiteUrl();

function urlPathForPage(relativePath: string): string {
  const p = relativePath.replace(/\\/g, '/');
  if (p === 'index.md') return '/';
  if (p.endsWith('/index.md')) return `/${p.slice(0, -'/index.md'.length)}/`;
  return `/${p.replace(/\.md$/, '.html')}`;
}


export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  
  // 排除 docs/docs 目录不构建
  srcExclude: ['**/docs/**'],
  
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'codeva-DyDGMBlEJg' }],
    ['meta', { name: 'keywords', content: 'Vibe Coding, 全栈开发, Next.js, TypeScript, React, Prisma, AI编程, Cursor, Claude' }],
    ['meta', { name: 'author', content: 'Eyre' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/png' }],
  ],

  ...(SITE_URL ? { sitemap: { hostname: SITE_URL } } : {}),

  transformHead: ({ pageData }): HeadConfig[] | void => {
    if (!SITE_URL) return;

    const url = `${SITE_URL}${urlPathForPage(pageData.relativePath)}`;
    const frontmatter = pageData.frontmatter as Record<string, unknown> | undefined;
    const frontmatterTitle = typeof frontmatter?.title === 'string' ? frontmatter.title : undefined;
    const frontmatterDescription =
      typeof frontmatter?.description === 'string' ? frontmatter.description : undefined;

    const title = frontmatterTitle || pageData.title || SITE_TITLE;
    const description = frontmatterDescription || pageData.description || SITE_DESCRIPTION;
    const image = `${SITE_URL}/logo.png`;

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:site_name', content: 'Vibe Vibe' }],
      ['meta', { property: 'og:locale', content: 'zh_CN' }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
    ];
  },

  buildEnd: async (siteConfig) => {
    const sitemapLine = SITE_URL ? `\nSitemap: ${SITE_URL}/sitemap.xml\n` : '\n';
    const content = `User-agent: *\nAllow: /${sitemapLine}`;
    await writeFile(joinPath(siteConfig.outDir, 'robots.txt'), content, 'utf-8');
  },

  // 1. Markdown 增强配置
  markdown: {
    // 开启数学公式 ($$ E=mc^2 $$)
    math: true,
    // 语言别名，消除 gitignore/env 警告
    languageAlias: {
      'gitignore': 'ini',
      'env': 'properties'
    },
    // 注册时间线插件
    config: (md) => {
      md.use(timeline);
    },
  },

  // 2. Mermaid 配置
  mermaid: {
    // refer to mermaid config options
  },


  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-mermaid', 'mermaid']
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: false,
      allowedHosts: true
    }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Vibe Vibe',
    
    nav: [
      { text: '首页', link: '/' },

      {
        text: '基础篇',
        items: [
          { text: '导览', link: '/Basic/' },
          { text: '0. 序章', link: '/Basic/00-preface/' },
          { text: '1. 觉醒：从码农到指挥官', link: '/Basic/01-awakening/' },
          { text: '2. 心法：核心思维', link: '/Basic/02-mindset/' },
          { text: '3. 技术：从想法到产品', link: '/Basic/03-technique/' },
          { text: '4. 从 0 到 1 实战', link: '/Basic/04-practice-0-to-1/' },
          { text: '5. 精进技能', link: '/Basic/05-advanced/' },
          { text: '附录', link: '/Basic/99-appendix/' },
          { text: '结语', link: '/Basic/100-epilogue/' },
          { text: '下部预告', link: '/Basic/101-next-part/' },
        ]
      },

      {
        text: '进阶篇',
        items: [
          { text: '导览', link: '/Advanced/' },
          { text: '进阶版（旧）', link: '/Advanced-old/' },
          { text: '第一章：环境搭建', link: '/Advanced/01-environment-setup/' },
          { text: '第二章：开发工具', link: '/Advanced/02-dev-tools-ai-tuning/' },
          { text: '第三章：PRD 与文档', link: '/Advanced/03-prd-doc-driven/' },
          { text: '第四章：运行与构建', link: '/Advanced/04-build-and-runtime-modes/' },
          { text: '第五章：UI/UX', link: '/Advanced/05-ui-ux/' },
          { text: '第六章：环境变量', link: '/Advanced/06-env-vars-secrets/' },
          { text: '第七章：数据库', link: '/Advanced/07-data-persistence-database/' },
          { text: '第八章：测试', link: '/Advanced/08-testing-automation/' },
          { text: '第九章：公网访问', link: '/Advanced/09-localhost-public-access/' },
          { text: '第十章：Git 协作', link: '/Advanced/10-git-collaboration/' },
          { text: '第十一章：CI/CD', link: '/Advanced/11-serverless-deploy-cicd/' },
          { text: '第十二章：域名与 DNS', link: '/Advanced/12-domain-dns/' },
          { text: '第十三章：云服务器', link: '/Advanced/13-vps-ops-deploy/' },
          { text: '第十四章：安全与 SEO', link: '/Advanced/14-security-seo-analytics/' },
        ]
      },

      {
        text: '实践篇',
        items: [
          { text: '导览', link: '/Practice/' },
          { text: '文科生/商科生项目', link: '/Practice/01-for-liberal-arts/' },
          { text: '理工科学生项目', link: '/Practice/02-for-stem/' },
          { text: '职场人士项目', link: '/Practice/03-for-professionals/' },
          { text: '核心技能', link: '/Practice/10-core-skills/' },
          { text: 'AI Agent 开发', link: '/Practice/11-ai-agents/' },
          { text: '全栈项目实战', link: '/Practice/12-fullstack-projects/' },
          { text: '工具与效率', link: '/Practice/13-tools-integration/' },
        ]
      },

      {
        text: '优质文章篇',
        items: [
          { text: '导览', link: '/Articles/' },
          { text: '知名公司博客', link: '/Articles/01-company-blogs/' },
          { text: '优质播客', link: '/Articles/02-podcasts/' },
          { text: '研究报告', link: '/Articles/03-research-reports/' },
          { text: '优质 Newsletter', link: '/Articles/04-newsletters/' },
          { text: '开发者社区', link: '/Articles/05-communities/' },
        ]
      },
    ],
    
    // 核心：自动生成侧边栏
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      useTitleFromFrontmatter: true,
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true, 
      useFolderLinkFromIndexFile: true,
      hyphenToSpace: true,
      sortMenusByFrontmatterOrder: true,
      frontmatterOrderDefaultValue: 9999,
      
      manualSortFileNameByPriority: [
        'Basic', 'Advanced', 'Advanced-old', 'Practice', 'Articles',
        'Basic/00-preface', 'Basic/01-awakening', 'Basic/02-mindset', 'Basic/03-technique',
        'Basic/04-practice-0-to-1', 'Basic/05-advanced', 'Basic/06-learning-paths', 
        'Basic/99-appendix', 'Basic/100-epilogue', 'Basic/101-next-part',
        'Practice/01-for-liberal-arts', 'Practice/02-for-stem', 'Practice/03-for-professionals',
        'Practice/10-core-skills', 'Practice/11-ai-agents', 'Practice/12-fullstack-projects', 'Practice/13-tools-integration',
        'Articles/01-company-blogs', 'Articles/02-podcasts', 'Articles/03-research-reports', 'Articles/04-newsletters', 'Articles/05-communities'
      ],
      
      collapsed: true,
      excludePattern: ['public', 'assets', 'docs'], 
    }),

    // editLink: {
    //   pattern: 'https://github.com/Eyre921/awesone-vibe-coding-tutorial/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datawhalechina/vibe-vibe' }
    ],

    footer: {
      message: '',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2024097797号-3</a>'
    }
  }
}))
