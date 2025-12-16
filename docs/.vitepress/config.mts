import { defineConfig, type HeadConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { withMermaid } from 'vitepress-plugin-mermaid'
// @ts-ignore
import timeline from "vitepress-markdown-timeline";
import { writeFile } from 'fs/promises'
import { join as joinPath } from 'path'

const SITE_TITLE = "Vibe Coding 全栈实战教程"
const SITE_DESCRIPTION = "从 Next.js 到 AI 辅助开发，用 Vibe Coding 的方式重塑你的编程工作流。涵盖零基础入门、全栈开发、数据库、部署运维等 12 个核心章节。"

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
    const title = (pageData.frontmatter as any)?.title || pageData.title || SITE_TITLE;
    const description = (pageData.frontmatter as any)?.description || pageData.description || SITE_DESCRIPTION;
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
          { text: '0. Bootcamp 概念打底', link: '/Advanced/00-bootcamp/' },
          { text: '1. 概念与准备', link: '/Advanced/01-concept/' },
          { text: '2. 技术选型与架构', link: '/Advanced/02-tech-stack/' },
          { text: '3. 前端到后端', link: '/Advanced/03-frontend/' },
          { text: '4. 数据库与数据', link: '/Advanced/04-database/' },
          { text: '5. 产品与文档', link: '/Advanced/05-product/' },
          { text: '6. 认证与安全', link: '/Advanced/06-security/' },
          { text: '7. API 设计规范', link: '/Advanced/07-api/' },
          { text: '8. 项目规则与协作', link: '/Advanced/08-workflow/' },
          { text: '9. 测试与质量', link: '/Advanced/09-testing/' },
          { text: '10. 部署与运维', link: '/Advanced/10-deploy/' },
          { text: '11. 发布与复盘', link: '/Advanced/11-review/' },
          { text: '12. 高级专题', link: '/Advanced/12-advanced/' },
        ]
      },
      { 
        text: '实践篇', 
        items: [
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
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true, 
      useFolderLinkFromIndexFile: true,
      hyphenToSpace: true,
      
      manualSortFileNameByPriority: [
        'Basic', 'Advanced', 'Practice', 'Articles',
        'Basic/00-preface', 'Basic/01-awakening', 'Basic/02-mindset', 'Basic/03-technique',
        'Basic/04-practice-0-to-1', 'Basic/05-advanced', 'Basic/06-learning-paths', 
        'Basic/99-appendix', 'Basic/100-epilogue', 'Basic/101-next-part',
        'Advanced/00-bootcamp', 'Advanced/01-concept', 'Advanced/02-tech-stack', 'Advanced/03-frontend',
        'Advanced/04-database', 'Advanced/05-product', 'Advanced/06-security', 'Advanced/07-api',
        'Advanced/08-workflow', 'Advanced/09-testing', 'Advanced/10-deploy', 'Advanced/11-review', 'Advanced/12-advanced',
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
