---
layout: home
hero:
  name: "Vibe Vibe"
  text: "人人都能学会的 AI 编程"
  tagline: "不写代码，也能做产品。从零基础到全栈开发，让 AI 成为你的编程搭档"
  image:
    src: /logo.png
    alt: Vibe Coding
  actions:
    - theme: brand
      text: 零基础入门
      link: /Basic/
    - theme: alt
      text: 有基础进阶
      link: /Advanced/
    - theme: alt
      text: 动手做项目
      link: /Practice/
    - theme: alt
      text: 优质好文章
      link: /Articles/

features:
  - title: 零基础友好
    details: 不需要任何编程经验，从"什么是代码"开始，手把手带你做出第一个作品
  - title: AI 驱动开发
    details: 学会"指挥 AI 写代码"而不是"自己写代码"，用自然语言描述需求，让 AI 帮你实现
  - title: MVP 思维
    details: 掌握"最小可行产品"理念，用最少的时间验证你的想法，避免功能蔓延的陷阱
  - title: 现代技术栈
    details: 进阶篇基于 Next.js + TypeScript + Prisma，学习企业级全栈开发最佳实践
  - title: 安全意识
    details: 从第一天就建立安全底线意识，学会保护用户数据和避免常见安全漏洞
  - title: 渐进式学习
    details: 基础篇建立认知，进阶篇深入实战。两条路径，适合不同阶段的你
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #15a051ff 30%, #2eb3dfff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #15a051ff 50%, #2eb3dfff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPHero .actions .VPButton.brand {
  background-color: #45523E;
  border-color: #45523E;
}
.VPHero .actions .VPButton.brand:hover {
  background-color: #4F5B53;
  border-color: #4F5B53;
}
.VPHero .actions .VPButton.brand:active {
  background-color: #3B423C;
  border-color: #3B423C;
}
</style>

## 选择你的学习路径

<div class="paths-container" style="display: flex; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">

<div style="flex: 1; min-width: 300px; padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #667eea11 0%, #764ba211 100%); border: 1px solid #667eea33;">

### 基础篇：零基础入门

**适合人群**：从未写过代码的小白、文科生、设计师、产品经理

**学习目标**：
- 理解 Vibe Coding 是什么
- 学会用 AI 做出你的第一个作品
- 掌握 MVP 思维和产品感

**章节预览**：
| 章节 | 内容 |
|------|------|
| 0. 序章 | 自测清单、学习路径规划 |
| 1. 觉醒 | 从码农到指挥官的思维转变 |
| 2. 心法 | MVP 思维、不加功能的艺术 |
| 3. 技法 | 提示词工程、PRD 编写 |
| 4. 实战 | 从 0 到 1 做出你的作品 |
| 5. 进阶 | 版本控制、部署、安全意识 |
| 6. 路径 | 不同背景的学习建议 |


</div>

<div style="flex: 1; min-width: 300px; padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #f093fb11 0%, #f5576c11 100%); border: 1px solid #f093fb33;">

### 进阶篇：全栈实战

**适合人群**：有一定编程基础、想系统学习全栈开发的开发者

**学习目标**：
- 以项目交付全流程为主线：环境 → 文档 → 开发 → 部署上线
- 第 1-7 章为“序言可阅读”，其余章节持续更新中
- 旧版进阶（偏知识陈列）仍可阅读：[/Advanced-old/](/Advanced-old/)

持续更新中。


</div>

</div>

## 项目状态

::: warning 内部预览版本
- 本版本为**内部预览版**，并非正式发行版本，不代表最终品质
- 正式版本需要等待后续对每一个章节进行深度优化、补充互动教学内容、以及完善实战练习环节
- 如发现问题欢迎通过 [GitHub Issues](https://github.com/datawhalechina/vibe-vibe/issues) 反馈
:::

::: tip 进阶版预告：Web 互动教学
我们正在开发**交互式教学内容**，正式版将支持：
- **可视化原理演示** —— 通过动画和交互图解，直观理解前后端交互、请求响应流程
- **数据库交互沙盒** —— 在浏览器中体验数据库查询、表关系设计，理解数据流转
- **架构图解互动** —— 点击探索系统架构，理解各层职责和数据走向
- **概念对比卡片** —— 交互式对比 SSR/CSR、REST/GraphQL 等核心概念

让抽象概念变得可触摸，敬请期待！
:::

## 什么是 Vibe Coding？

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
> 
> — Andrej Karpathy, 2025

**Vibe Coding** 是 2025 年最火的编程方式（Collins 词典年度词汇）。它的核心理念是：

- **用自然语言描述需求**，而不是手写代码
- **让 AI 生成代码**，你来验收和调整
- **快速迭代**，做出能用的东西比代码完美更重要

简单说：**你负责想法，AI 负责实现。**

## 这门课不会让你成为资深程序员

- 你不会精通算法和数据结构
- 你不会成为框架源码专家
- 你不会获得大厂面试通关能力

但你会获得：

- 独立交付产品的能力
- 与 AI 高效协作的方法
- 把想法变成现实的执行力

这是两条不同的路径，各有价值。

## 适合谁学习？

| 你是谁 | 推荐路径 | 理由 |
|--------|----------|------|
| 设计师 / 产品经理 | 基础篇 | 零代码基础也能做出可运行的原型 |
| 文科生 / 跨专业 | 基础篇 | 从最基础的概念开始，循序渐进 |
| 前端开发者 | 进阶篇 | 扩展后端能力，成为全栈工程师 |
| 后端开发者 | 进阶篇 | 了解现代前端生态和 Next.js |
| 创业者 / 独立开发者 | 两者皆可 | 快速搭建 MVP，独立完成产品 |
| 想提升效率的开发者 | 基础篇 + 进阶篇 | 系统学习 AI 辅助开发工作流 |

## 技术栈一览

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">

<div style="padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #667eea11 0%, #764ba211 100%); border: 1px solid #667eea33;">
  <h4 style="margin-top: 0; margin-bottom: 1rem; color: #667eea;">基础篇</h4>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li><strong>前端基础</strong>：HTML/CSS/JS</li>
    <li><strong>AI 工具</strong>：ChatGPT/Claude/Cursor等</li>
    <li><strong>版本控制</strong>：Git 基础操作</li>
    <li><strong>部署</strong>：静态网站部署</li>
  </ul>
</div>

<div style="padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #f093fb11 0%, #f5576c11 100%); border: 1px solid #f093fb33;">
  <h4 style="margin-top: 0; margin-bottom: 1rem; color: #f093fb;">进阶篇</h4>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li><strong>框架</strong>：Next.js + TypeScript</li>
    <li><strong>数据层</strong>：PostgreSQL + Prisma</li>
    <li><strong>UI 框架</strong>：Tailwind CSS + shadcn/ui</li>
    <li><strong>认证</strong>：NextAuth.js</li>
    <li><strong>部署</strong>：Docker + Vercel/Edgeone</li>
  </ul>
</div>

</div>

## 贡献者名单

感谢以下成员为本项目做出的贡献：

| 姓名 | 职务 | 简介 |
|------|------|------|
| <a href="http://www.guohaoqi.cn" target="_blank">齐国皓</a> | 项目负责人 & 核心贡献者 | 现就读于新加坡国立大学计算机学院, 湖南大学金融科技协会创始人 |
| <a href="https://www.hangkangfu.cn/" target="_blank">符航康</a> | 项目负责人 & 核心贡献者 | 湖南大学金融科技协会创始成员, 一名 AI 原生的年轻人，湖南大学信息科学与工程学院24级本科生 |
| 陈俊希 | 「优质文章篇」板块贡献者 | 湖南大学金融科技协会现任会长，湖南大学金融与统计学院24级本科生 |
| 金龙 | 「实践篇」板块贡献者 | 北京大学学生创新学社AI俱乐部副部长，北京大学24级研究生 |
| 舒璐璐 | 「实践篇」板块贡献者 | 湖南大学「麓山人文+」创始人，湖南大学岳麓书院23级本科生 |

## 如何贡献

本项目欢迎社区贡献：

- 在页面底部评论区反馈问题
- 提交 [GitHub Issues](https://github.com/datawhalechina/vibe-vibe/issues)
- 提交 Pull Request 完善内容

