import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick, h } from 'vue'
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
    const { frontmatter } = useData();
    
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => {
        // 如果页面 Frontmatter 设置了 comment: false，则不显示评论
        if (frontmatter.value.comment === false) return null;
        
        return h('div', { style: { marginTop: '2rem' } }, [
          h(Giscus, {
            repo: "datawhalechina/vibe-vibe",
            repoId: "R_kgDOQerM_g",
            category: "General",
            categoryId: "DIC_kwDOQerM_s4CzzOf",
            mapping: "pathname",
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "1",
            inputPosition: "bottom",
            theme: "preferred_color_scheme",
            lang: "zh-CN",
            loading: "lazy"
          })
        ])
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
    })

    // 监听路由变化，确保切换页面后图片依然可以放大
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
