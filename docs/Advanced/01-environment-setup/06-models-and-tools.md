---
title: "1.6 模型与工具"
description: "理解模型与工具的区别，选择 AI 编程的开发组合"
chapter: "第一章"
---

# 1.6 模型与工具

> **阅读完本节后，你将会收获：**
>
> - 理解 AI 模型、CLI 工具和 IDE 工具的区别
> - 了解如何根据需求选择合适的工具
> - 掌握 GLM 模型的配置方法

::: tip 还没安装 Claude Code？

如果你还没有安装 Claude Code 和配置模型，请参考 [1.0 快速开始](./00-quick-start.md) 完成安装配置。

:::

## 基本概念

### AI 模型

**AI 模型**负责理解意图和生成内容。比如你问"怎么写登录功能"，模型分析后返回代码方案。

| 分类 | 代表产品 |
|------|---------|
| **国内** | [GLM](https://open.bigmodel.cn/)（智谱）、[DeepSeek](https://www.deepseek.com/)、[Kimi](https://kimi.moonshot.cn/)（月之暗面）、[Doubao](https://www.doubao.com/)（字节）、[MiniMax](https://www.minimaxi.com/) |
| **国际** | [GPT](https://openai.com/)（OpenAI）、[Gemini](https://gemini.google.com/)（Google）、[Claude](https://claude.ai/)（Anthropic） |

**工具**负责执行具体操作，比如读取文件、运行命令、提交代码。工具需要接入模型才能工作。

::: tip 对话框 vs 工具流

你平时用 AI，可能是在网页对话框里聊天：

| 对话框模式 | 工具流模式 |
|-----------|-----------|
| 只能聊天，不能操作文件 | 能直接读写你项目的文件 |
| 复制代码回来自己粘贴 | AI 自动修改代码 |
| 自己运行命令 | AI 自动执行命令 |
| 适合提问、学习 | 适合实际开发 |

**AI 编程工具 = AI 大脑 + 手脚**。模型是大脑，工具是手脚。只有大脑没有手脚，你只能复制代码；有了手脚，AI 能真正帮你干活。

:::

| 类型 | 代表产品 | 特点 |
|------|---------|------|
| **CLI 工具** | Claude Code | 命令行运行，无图形界面 |
| **IDE 工具** | Cursor、Windsurf、Trae | 图形界面，可视化操作 |


::: tip CLI vs IDE 工具，怎么选？

| | CLI 工具 | IDE 工具 |
|---|---------|---------|
| **交互方式** | 命令行文字对话 | 图形界面+对话 |
| **体验** | 简洁专注，无干扰 | 可视化，更直观 |
| **灵活性** | 高，易于脚本集成 | 中，受界面限制 |
| **适用场景** | 本教程推荐、服务器开发 | 喜欢 GUI 的开发者 |

**核心能力相同**：两者都能直接操作项目文件、运行命令、操作 Git。本教程推荐 CLI 工具（如 Claude Code），因为它简洁、强大，且更适合学习 AI 编程的本质。

::: details 🎮 点击体验：AI 工具选择向导
<AIToolSelector />

> 💡 **练习**：回答 3 个问题，获取个性化的工具推荐方案
>
> 🎯 **核心概念**：没有最好的工具，只有最适合你的工具组合
:::

::: tip 组合使用：最佳实践

**在 IDE 里打开终端，运行 CLI 工具** —— 这是很多开发者的首选配置：

- 左边是 VS Code/Trae 等编辑器，方便浏览和查看文件
- 底部终端运行 Claude Code 等 CLI 工具，让它帮你改代码
- 一边看文件结构，一边让 CLI 工具干活

这样你可以同时享受 IDE 的可视化便利和 CLI 工具的强大能力。当然，建议始终使用同一个 AI 模型，保持上下文连贯。

:::

::: tip IDE 与 VS Code 的关系

大部分 AI IDE 基于 **VS Code** 开发（如 Cursor、Windsurf、Trae），界面和操作习惯一致，VS Code 插件可以通用，学习成本很低。

:::

### 主流工具概览

| 类型 | 国际厂商 | 国内厂商 |
|------|---------|---------|
| **CLI** | [Claude Code](https://claude.com/product/claude-code)、[Codex CLI](https://openai.com/)、[Gemini CLI](https://gemini.google.com/)、[Aider](https://aider.chat/)、[OpenCode](https://opencode.ai/) | [Qoder CLI](https://qoder.com/)、[iFlow CLI](https://iflow.cn/) |
| **IDE** | [Cursor](https://cursor.com/)、[Windsurf](https://windsurf.com/)、[Zed](https://zed.dev/)、[GitHub Copilot](https://github.com/features/copilot) | [Trae](https://www.trae.cn/)、[Qoder](https://qoder.com/)、[CodeBuddy](https://copilot.tencent.com/) |

::: tip 进一步对比阅读

如果你正在比较 Cursor、Windsurf、Claude Code、Cline、GitHub Copilot、Trae、Aider、Continue 等工具，可以参考 [AI Coding Tools Guide 的 Cursor alternatives 对比](https://ai-coding-tools-guide.vercel.app/cursor-alternatives/)。它按开发工作流而不是单纯功能清单来整理，更适合辅助你判断哪类工具适合当前阶段。

:::

::: tip Claude Code 的优势

- **公开可用**：发布在 npm 仓库，无地域限制
- **多模型支持**：可接入国内模型（GLM、DeepSeek 等）
- **工作流强大**：文件操作、代码搜索、Git 集成、子代理协作
- **成本可控**：使用国内模型 API，价格远低于官方 Claude

:::

## 配置 GLM 模型

如果你已经按照 [1.0 快速开始](./00-quick-start.md) 配置好了 GLM 模型，可以跳过本节。

### 步骤 1：购买编码套餐

访问 [智谱 AI 开放平台](https://open.bigmodel.cn/)，购买官方编码套餐，获取 API Key。

::: tip 什么是 API Key

API Key 是调用大模型服务的"通行证"，是你与智谱 AI 服务器通信的身份凭证。

:::

### 步骤 2：自动配置

```bash
npx @z_ai/coding-helper
# 输入获取到的 API Key，工具会自动完成所有配置
```

### 成本对比

| 对比项 | Claude 官方 | GLM 编码套餐 |
|--------|-------------|------------------|
| 价格 | 约 ¥110/¥540 每 1M Token | 约 API 价格的 0.1 折 |
| 单次调用 | ~¥0.22 | ~¥0.02 |
| 网络环境 | 需要中转 | 国内直连 |

**结论**：对于日常开发，GLM 编码套餐的性价比极高。

## 其他开发工具

以下工具**不是必需的**，根据需要安装：

| 工具类型 | 推荐产品 | 什么时候需要 |
|---------|---------|-------------|
| **Git GUI** | GitHub Desktop、Sourcetree | 不熟悉 Git 命令 |
| **数据库** | DBeaver、Drizzle Studio | 频繁查看/修改数据 |
| **API 测试** | Postman、Thunder Client | 调试 API 接口 |

::: tip 最低配置

Claude Code + GLM + 系统自带终端 + 浏览器，就能开始开发。

:::

## 常见问题

### Q: 必须用 AI 编辑器吗？

是的，这是本教程的核心。Vibecoding 理念建立在 AI 原生开发之上。你可以选择任意喜欢的 AI IDE（Cursor/Windsurf/Trae 等），或使用 Claude Code CLI 工具。

### Q: Cursor 和 VS Code 什么区别？

Cursor 是 VS Code 的 AI 增强版。VS Code 需要手动安装 AI 插件，Cursor 则深度集成 AI 能力。如果你已经熟悉 VS Code，切换到 Cursor 成本很低。

## 核心理念

**工欲善其事，必先利其器**。

**工具选择原则**：

1. **AI 原生优先**：现代开发离不开 AI
2. **跨平台考虑**：工具在 Mac/Windows 都可用
3. **学习成本低**：避免过于复杂的工具
4. **社区活跃**：有文档、有更新

**最低配置**：Claude Code + GLM + 终端 + 浏览器

## 相关内容

- 详见：[第2章 AI调教指南](../02-ai-tuning-guide/)
- 详见：[2.2 VibeCoding工作流详解](../02-ai-tuning-guide/02-vibecoding-workflow.md)
- 前置：[1.0 快速开始](./00-quick-start.md)
- 前置：[1.4 Terminal 终端入门](./04-terminal-basics.md)
- 前置：[1.5 包管理与项目配置](./05-package-manager-and-config.md)
