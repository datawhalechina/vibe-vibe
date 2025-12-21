import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick, h, type VNode } from 'vue'
import { useRoute, useData } from 'vitepress'
import mediumZoom from 'medium-zoom'
import Giscus from '@giscus/vue'

// 引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";
import './custom.css' // 稍后创建这个文件，用于微调样式

export default {
  extends: DefaultTheme,
  
  // 1. 布局扩展：注入 Giscus 评论
  Layout: () => {
    const route = useRoute()
    const { frontmatter, isDark } = useData();
    
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => {
        return h('div', {
          class: 'info-banner',
          style: {
            background: '#e6a23c',
            color: '#fff',
            padding: '8px',
            textAlign: 'center',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        }, '抢先预览版，内容调整中，不代表最终品质')
      },
      'doc-after': () => {
        const children: VNode[] = [
          h('div', { class: 'feedback-tip' }, [
            h('strong', null, '反馈与建议：'),
            '发现内容有误或想补充？欢迎在下方评论区留言，或到 ',
            h(
              'a',
              {
                href: 'https://github.com/datawhalechina/vibe-vibe/issues',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              'GitHub 提 Issue'
            ),
            ,
            h('div', { class: 'feedback-actions' }, [
              h('span', { class: 'github-star-text' }, '点我给个 Star 吧：'),
              h('span', { class: 'github-star-wrap' }, [
                h('iframe', {
                  class: 'github-star-btn',
                  src: 'https://ghbtns.com/github-btn.html?user=datawhalechina&repo=vibe-vibe&type=star&count=false&size=large',
                  title: 'GitHub',
                  height: '30',
                  width: '120',
                  scrolling: '0',
                  frameborder: '0'
                })
              ])
            ])
          ])
        ];

        if (frontmatter.value.comment !== false) {
          children.push(
            h('div', { style: { marginTop: '2rem' } }, [
              h(Giscus, {
                key: `${route.path}::${isDark.value ? 'dark' : 'light'}`,
                repo: "datawhalechina/vibe-vibe",
                repoId: "R_kgDOQerM_g",
                category: "General",
                categoryId: "DIC_kwDOQerM_s4CzzOf",
                mapping: "pathname",
                strict: "0",
                reactionsEnabled: "1",
                emitMetadata: "1",
                inputPosition: "bottom",
                theme: isDark.value ? "dark_dimmed" : "light",
                lang: "zh-CN",
                loading: "lazy"
              })
            ])
          );
        }

        return h('div', null, children)
      }
    })
  },

  // 2. 增强功能：图片放大
  setup() {
    const route = useRoute()
    
    const initZoom = () => {
      // 给主要内容区的图片添加放大功能，排除 logo 等
      // background: var(--vp-c-bg) 确保背景色适应深色模式
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }

    onMounted(() => {
      initZoom()
      
      // 动态计算 Banner 高度并设置 CSS 变量
      const updateBannerHeight = () => {
        const banner = document.querySelector('.info-banner')
        if (banner) {
          const height = (banner as HTMLElement).offsetHeight
          document.documentElement.style.setProperty('--vp-layout-top-height', `${height}px`)
        }
      }
      
      updateBannerHeight()
      window.addEventListener('resize', updateBannerHeight)
    })

    // 监听路由变化，确保切换页面后图片依然可以放大
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
