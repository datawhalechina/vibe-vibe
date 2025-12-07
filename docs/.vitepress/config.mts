import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { withMermaid } from 'vitepress-plugin-mermaid'
// @ts-ignore
import timeline from "vitepress-markdown-timeline";

export default withMermaid(defineConfig({
  title: "Vibe Coding 全栈实战教程",
  description: "从 Next.js 到 AI 辅助开发，用 Vibe Coding 的方式重塑你的编程工作流。涵盖零基础入门、全栈开发、数据库、部署运维等 12 个核心章节。",
  
  // 排除 docs/docs 目录不构建
  srcExclude: ['**/docs/**'],
  
  head: [
    ['meta', { name: 'keywords', content: 'Vibe Coding, 全栈开发, Next.js, TypeScript, React, Prisma, AI编程, Cursor, Claude' }],
    ['meta', { name: 'author', content: 'Eyre' }],
    ['meta', { property: 'og:title', content: 'Vibe Coding 全栈实战教程' }],
    ['meta', { property: 'og:description', content: '从 Next.js 到 AI 辅助开发，用 Vibe Coding 的方式重塑你的编程工作流' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/png' }],
  ],

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
          { text: '5. 进阶技能', link: '/Basic/05-advanced/' },
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
      { icon: 'github', link: 'https://github.com/Eyre921/awesone-vibe-coding-tutorial' }
    ]
  }
}))
