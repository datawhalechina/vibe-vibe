---
title: "1.6 Models and Tools"
description: "Understand the difference between models and tools, and choose the right AI coding setup"
chapter: "Chapter 1"
---

# 1.6 Models and Tools

> **After reading this section, you will gain:**
>
> - An understanding of the differences between AI models, CLI tools, and IDE tools
> - How to choose the right tools based on your needs
> - How to configure the GLM model

::: tip Haven't installed Claude Code yet?

If you haven't installed Claude Code and configured a model yet, please refer to [1.0 Quick Start](./00-quick-start.md) to complete the installation and setup.

:::

## Basic Concepts

### AI Models

**AI models** are responsible for understanding intent and generating content. For example, if you ask "how do I build a login feature," the model analyzes the request and returns a code solution.

| Category | Representative Products |
|------|---------|
| **China** | [GLM](https://open.bigmodel.cn/) (Zhipu), [DeepSeek](https://www.deepseek.com/), [Kimi](https://kimi.moonshot.cn/) (Moonshot), [Doubao](https://www.doubao.com/) (ByteDance), [MiniMax](https://www.minimaxi.com/) |
| **International** | [GPT](https://openai.com/) (OpenAI), [Gemini](https://gemini.google.com/) (Google), [Claude](https://claude.ai/) (Anthropic) |

**Tools** are responsible for executing specific actions, such as reading files, running commands, and committing code. Tools need to be connected to a model in order to work.

::: tip Chatbox vs Tool Workflow

When you normally use AI, you might be chatting in a web-based chatbox:

| Chatbox Mode | Tool Workflow Mode |
|-----------|-----------|
| Can only chat, cannot operate on files | Can directly read and write files in your project |
| Copy code back and paste it yourself | AI modifies the code automatically |
| Run commands yourself | AI executes commands automatically |
| Good for asking questions and learning | Good for actual development |

**AI coding tools = AI brain + hands and feet**. The model is the brain, and the tools are the hands and feet. With only a brain and no hands or feet, you can only copy code; with hands and feet, AI can actually help you do the work.

:::

| Type | Representative Products | Features |
|------|---------|------|
| **CLI Tools** | Claude Code | Runs in the command line, no graphical interface |
| **IDE Tools** | Cursor, Windsurf, Trae | Graphical interface, visual operations |


::: tip CLI vs IDE Tools: How Should You Choose?

| | CLI Tools | IDE Tools |
|---|---------|---------|
| **Interaction Style** | Command-line text conversation | Graphical interface + conversation |
| **Experience** | Clean and focused, no distractions | Visual and more intuitive |
| **Flexibility** | High, easy to integrate into scripts | Medium, limited by the interface |
| **Best For** | Recommended in this tutorial, server-side development | Developers who prefer a GUI |

**Core capabilities are the same**: both can directly operate on project files, run commands, and work with Git. This tutorial recommends CLI tools (such as Claude Code) because they are simple, powerful, and better suited for learning the fundamentals of AI coding.

::: details 🎮 Click to try it: AI Tool Selection Wizard
<AIToolSelector />

> 💡 **Exercise**: Answer 3 questions to get a personalized tool recommendation
>
> 🎯 **Core idea**: There is no best tool, only the tool combination that fits you best
:::

::: tip Using Them Together: Best Practice

**Open a terminal inside your IDE and run CLI tools there** — this is the preferred setup for many developers:

- Use VS Code/Trae or another editor on the left for browsing and viewing files
- Run Claude Code or another CLI tool in the bottom terminal to help modify your code
- View the file structure while letting the CLI tool do the work

This way, you get both the visual convenience of an IDE and the power of CLI tools. Of course, it's recommended to always use the same AI model to keep the context consistent.

:::

::: tip The Relationship Between IDEs and VS Code

Most AI IDEs are built on **VS Code** (such as Cursor, Windsurf, and Trae), so the interface and interaction patterns are consistent, VS Code extensions are generally compatible, and the learning curve is very low.

:::

### Overview of Mainstream Tools

| Type | International Vendors | Domestic Vendors |
|------|---------|---------|
| **CLI** | [Claude Code](https://claude.com/product/claude-code), [Codex CLI](https://openai.com/), [Gemini CLI](https://gemini.google.com/), [Aider](https://aider.chat/), [OpenCode](https://opencode.ai/) | [Qoder CLI](https://qoder.com/), [iFlow CLI](https://iflow.cn/) |
| **IDE** | [Cursor](https://cursor.com/), [Windsurf](https://windsurf.com/), [Zed](https://zed.dev/), [GitHub Copilot](https://github.com/features/copilot) | [Trae](https://www.trae.cn/), [Qoder](https://qoder.com/), [CodeBuddy](https://copilot.tencent.com/) |

::: tip Further comparison

If you are comparing Cursor, Windsurf, Claude Code, Cline, GitHub Copilot, Trae, Aider, Continue, and similar tools, see the [AI Coding Tools Guide comparison of Cursor alternatives](https://ai-coding-tools-guide.vercel.app/cursor-alternatives/). It is organized by developer workflow rather than only by feature lists, which can help you choose the right tool for your current stage.

:::

::: tip Advantages of Claude Code

- **Publicly available**: Published to the npm registry, with no regional restrictions
- **Supports multiple models**: Can connect to domestic models (GLM, DeepSeek, etc.)
- **Powerful workflow**: File operations, code search, Git integration, and sub-agent collaboration
- **Controllable cost**: Using domestic model APIs is far cheaper than official Claude pricing

:::

## Configuring the GLM Model

If you have already configured the GLM model by following [1.0 Quick Start](./00-quick-start.md), you can skip this section.

### Step 1: Purchase a Coding Package

Visit the [Zhipu AI Open Platform](https://open.bigmodel.cn/) to purchase an official coding package and obtain your API Key.

::: tip What is an API Key

An API Key is the "pass" for calling large-model services. It serves as your identity credential when communicating with Zhipu AI servers.

:::

### Step 2: Automatic Configuration

```bash
npx @z_ai/coding-helper
# Enter the API Key you obtained; the tool will auto-complete all configuration
```

### Cost Comparison

| Comparison Item | Official Claude | GLM Coding Package |
|--------|-------------|------------------|
| Price | About ¥110/¥540 per 1M tokens | About 10% of standard API pricing |
| Single call | ~¥0.22 | ~¥0.02 |
| Network environment | Requires a relay | Direct connection within China |

**Conclusion**: For day-to-day development, the GLM coding package offers excellent value for money.

## Other Development Tools

The following tools are **not required**. Install them as needed:

| Tool Type | Recommended Products | When You Need Them |
|---------|---------|-------------|
| **Git GUI** | GitHub Desktop, Sourcetree | If you're not familiar with Git commands |
| **Database** | DBeaver, Drizzle Studio | If you frequently view/modify data |
| **API Testing** | Postman, Thunder Client | If you need to debug API endpoints |

::: tip Minimum Setup

Claude Code + GLM + your system terminal + browser is enough to start developing.

:::

## FAQ

### Q: Do I have to use an AI editor?

Yes, this is central to the tutorial. The Vibecoding approach is built on AI-native development. You can choose any AI IDE you like (Cursor/Windsurf/Trae, etc.), or use the Claude Code CLI tool.

### Q: What's the difference between Cursor and VS Code?

Cursor is an AI-enhanced version of VS Code. VS Code requires you to manually install AI extensions, while Cursor deeply integrates AI capabilities. If you're already familiar with VS Code, switching to Cursor is easy.

## Core Philosophy

**To do a good job, you must first sharpen your tools**.

**Principles for choosing tools**:

1. **AI-native first**: Modern development depends on AI
2. **Cross-platform support**: Tools should work on both Mac and Windows
3. **Low learning curve**: Avoid overly complex tools
4. **Active community**: Documentation and regular updates matter

**Minimum setup**: Claude Code + GLM + terminal + browser

## Related Content

- See also: [Chapter 2 AI Prompting Guide](../02-ai-tuning-guide/)
- See also: [2.2 Detailed VibeCoding Workflow](../02-ai-tuning-guide/02-vibecoding-workflow.md)
- Prerequisite: [1.0 Quick Start](./00-quick-start.md)
- Prerequisite: [1.4 Getting Started with the Terminal](./04-terminal-basics.md)
- Prerequisite: [1.5 Package Management and Project Configuration](./05-package-manager-and-config.md)
