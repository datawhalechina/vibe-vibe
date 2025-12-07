---
title: "B.2 CSS/样式问题"
---

# B.2 CSS/样式问题

样式问题不会报红色错误，但会让你的页面「长得不对」。这一节帮你快速定位和解决常见的样式问题。


## 样式完全不生效

**现象**：你写了 CSS，但页面完全没变化。

**排查清单**：

| 检查项 | 怎么检查 | 解决方法 |
|--------|----------|----------|
| CSS 文件没引入 | 看 HTML 有没有 `<link>` 标签 | 添加 `<link rel="stylesheet" href="style.css">` |
| 路径写错了 | 检查文件路径是否正确 | 确保 `href` 路径对应实际文件位置 |
| 选择器写错了 | 检查 class/id 名是否匹配 | `.btn`（class）vs `#btn`（id），别搞混 |
| 被其他样式覆盖 | 用浏览器开发者工具检查 | 增加选择器权重或调整顺序 |
| 缓存问题 | 强制刷新页面 | Mac: `Cmd+Shift+R`，Win: `Ctrl+Shift+R` |

**快速修复 Prompt**：
```markdown
我的 CSS 样式没有生效。

HTML 代码：
[粘贴相关 HTML]

CSS 代码：
[粘贴 CSS]

请帮我检查为什么样式没生效。
```


## 布局错乱

**现象**：元素的位置不对，挤在一起、跑偏了、或者溢出了。

**常见问题与解决**：

### 元素挤在一起
```css
/* 问题：多个元素挤成一行 */
/* 解决：让它们换行显示 */
.container {
  display: flex;
  flex-wrap: wrap;  /* 允许换行 */
  gap: 10px;        /* 添加间距 */
}
```

### 元素跑到屏幕外
```css
/* 问题：内容超出容器 */
/* 解决：限制宽度，允许滚动或隐藏 */
.content {
  max-width: 100%;    /* 不超过父容器 */
  overflow: auto;     /* 超出时显示滚动条 */
}
```

### 垂直居中不生效
```css
/* 最简单的垂直居中方法 */
.parent {
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */
  height: 100vh;            /* 父容器要有高度！ */
}
```

::: warning 常见坑
垂直居中不生效，90% 是因为父容器没有设置高度。`height: 100%` 或 `height: 100vh` 是常用的解决方案。
:::


## 响应式问题

**现象**：在电脑上好好的，手机上就乱了。

**快速检查**：
1. 有没有加 viewport meta 标签？
2. 有没有用百分比/rem 而不是固定 px？
3. 有没有写媒体查询？

**基础响应式模板**：

```html
<!-- 必须在 <head> 里加这行 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* 基础样式（手机优先） */
.container {
  width: 100%;
  padding: 15px;
}

/* 平板及以上 */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* 电脑 */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```


## 常见样式问题速查表

| 问题 | 可能原因 | 快速解决 |
|------|----------|----------|
| 字体大小不对 | 继承了父元素的样式 | 明确设置 `font-size` |
| 颜色不对 | 选择器权重不够 | 检查是否被覆盖，提高权重 |
| 边距不对 | margin 和 padding 搞混 | margin 是外边距，padding 是内边距 |
| 图片变形 | 宽高比被破坏 | 使用 `object-fit: cover` |
| 按钮点不到 | 被其他元素遮挡 | 检查 `z-index` 和定位 |
| 文字溢出 | 容器太小 | 使用 `overflow: hidden` 或 `text-overflow: ellipsis` |


## 用浏览器调试样式

这是解决样式问题最有效的方法：

1. **打开开发者工具**：右键页面 → 检查（或按 F12）
2. **选中元素**：点击左上角的「选择」图标，然后点击页面上的元素
3. **查看样式**：右侧会显示这个元素的所有样式
4. **实时修改**：直接在右侧修改 CSS 值，页面会实时更新
5. **找到问题**：看哪些样式被划掉了（说明被覆盖了）

::: tip 小技巧
在开发者工具里调好样式后，把修改后的 CSS 复制回你的代码文件。这样比盲改快多了。
:::
