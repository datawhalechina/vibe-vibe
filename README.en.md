<p align="center">
  <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=vibe-vibe">
    <img src="docs/public/atlas-cloud-logo.png" alt="Atlas Cloud" width="200">
  </a>
</p>

> 🎁 **[Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=vibe-vibe)** is a full-modal AI inference platform — 59 frontier LLMs (DeepSeek-V4, Qwen3, Kimi K2, GPT-5, Gemini 2.5 Pro, Claude…) via a single OpenAI-compatible endpoint. The ideal LLM API for Vibe Coding learners. [View all models](https://www.atlascloud.ai/models) · [Coding Plan](https://www.atlascloud.ai/console/coding-plan)

<details>
<summary>📋 59 models available on Atlas Cloud</summary>

| Model | Type |
|-------|------|
| deepseek-ai/deepseek-v4-pro | LLM |
| deepseek-ai/deepseek-v4-0520 | LLM |
| deepseek-ai/deepseek-v4-flash | LLM |
| deepseek-ai/deepseek-r2 | LLM |
| deepseek-ai/deepseek-r2-0528 | LLM |
| deepseek-ai/deepseek-r1-0528 | LLM |
| deepseek-ai/deepseek-r1 | LLM |
| deepseek-ai/deepseek-prover-v2 | LLM |
| moonshot-ai/kimi-k2 | LLM |
| moonshot-ai/kimi-k2-0711 | LLM |
| moonshot-ai/kimi-k1.5-long | LLM |
| qwen/qwen3-235b-a22b | LLM |
| qwen/qwen3-30b-a3b | LLM |
| qwen/qwen3-32b | LLM |
| qwen/qwq-32b | LLM |
| openai/gpt-5 | LLM |
| openai/gpt-5-mini | LLM |
| openai/gpt-4.1 | LLM |
| openai/gpt-4o | LLM |
| openai/o3 | LLM |
| openai/o4-mini | LLM |
| openai/o3-mini | LLM |
| anthropic/claude-sonnet-4-5 | LLM |
| anthropic/claude-opus-4 | LLM |
| anthropic/claude-sonnet-4 | LLM |
| anthropic/claude-haiku-4-5 | LLM |
| google/gemini-2.5-pro | LLM |
| google/gemini-2.5-flash | LLM |
| google/gemini-2.5-flash-lite | LLM |
| google/gemini-2.0-flash | LLM |
| xai/grok-4 | LLM |
| xai/grok-3 | LLM |
| xai/grok-3-mini | LLM |
| meta-llama/llama-4-scout | LLM |
| meta-llama/llama-4-maverick | LLM |
| meta-llama/llama-3.3-70b | LLM |
| cohere/command-a | LLM |
| mistral/mistral-large | LLM |
| minimax/minimax-m1 | LLM |
| 01ai/yi-lightning | LLM |
| seedance/seedance-v1-pro | Video |
| seedance/seedance-v1-pro-fast | Video |
| seedance/seedance-v1-lite | Video |
| kling/kling-v2.1-pro | Video |
| kling/kling-v2.1-standard | Video |
| kling/kling-v1.6-pro | Video |
| kling/kling-v1.6-standard | Video |
| wan2/wan2.1-t2v-turbo | Video |
| wan2/wan2.1-i2v-turbo | Video |
| veo/veo3.1-fast | Video |
| veo/veo3-fast | Video |
| veo/veo3 | Video |
| runway/gen4-turbo | Video |
| stable-diffusion/sd3.5-large | Image |
| flux/flux1.1-pro-ultra | Image |
| flux/flux1.1-pro | Image |
| ideogram/ideogram-v3 | Image |
| recraft/recraft-v3 | Image |
| minimax/hailuo-i2v-01-live | Video |
</details>

---

<p align="center">
  <a href="./README.en.md"><strong>English</strong></a> |
  <a href="./README.md">简体中文</a>
</p>

<p align="center">
  <img src="./docs/public/logo.png" width="100" alt="Vibe Vibe"/>
</p>

<h1 align="center">Vibe Vibe (⚠️ Alpha Preview)</h1>

# Vibe Vibe — AI Creation for Everyone

> An open-source learning project for people who want to turn ideas into real products with AI.
> From “I have an idea” to “I shipped something”, Vibe Vibe helps beginners, builders, and developers learn through real projects.

- Website: [www.vibevibe.cn](https://www.vibevibe.cn)
- Default site language: Chinese
- English entry: [/en/](https://www.vibevibe.cn/en/)

## Core Idea

Vibe Vibe is inspired by **Andrej Karpathy's** idea of Vibe Coding: moving from manually writing every line to collaborating with AI through clear goals, context, review, and iteration.

In practice, this project is not only about "AI programming". It is about using AI to:

- turn ideas into working products
- prototype quickly and learn by building
- gain enough technical leverage to keep iterating and shipping

## Who It Is For

| You are... | Best starting point |
| --- | --- |
| A complete beginner | Fundamentals |
| Someone who uses ChatGPT / Claude but has never shipped a project | Fundamentals |
| A developer who wants a stronger AI-native workflow | Advanced |
| Someone who wants project practice | Practice |
| Someone who wants curated learning resources | Articles |

## Self-Hosted Deployment

If you want to deploy the site inside a local or private network, this repository already includes a ready-to-use `Dockerfile` and `docker-compose.yml`:

```bash
docker compose up -d --build
```

The default address is `http://localhost:1024`.

For full deployment options, static-file hosting, and offline-environment notes, see the [deployment guide](./docs/deployment/index.md).

## Project Structure

Vibe Vibe currently has four major parts:

| Section | What it covers | Best for |
| --- | --- | --- |
| **Fundamentals** | Beginner-friendly path from idea to first working project | Complete beginners and first-time builders |
| **Advanced** | Full-stack delivery, architecture, deployment, collaboration, and engineering habits | Developers who want a more systematic workflow |
| **Practice** | Hands-on cases for different audiences and use cases | Learners who want to build by doing |
| **Articles** | Curated references, trends, and deeper reading | Continuous learners |

## What You Can Learn Here

- how to describe ideas clearly enough for AI to execute
- how to iterate instead of waiting for a perfect first version
- how to go from prototype to local project to deployment
- how to build better product judgment, not just tool familiarity
- how to keep learning full-stack development through real use cases

## Quick Start

- Read online: [www.vibevibe.cn](https://www.vibevibe.cn)
- Start with Fundamentals: [Fundamentals](https://www.vibevibe.cn/en/Basic/)
- Explore the Advanced track: [Advanced](https://www.vibevibe.cn/en/Advanced/)
- Browse project cases: [Practice](https://www.vibevibe.cn/en/Practice/)
- Read curated resources: [Articles](https://www.vibevibe.cn/en/Articles/)

## Maintainers and Contributors

| Name | Role | Bio |
| --- | --- | --- |
| [符航康](https://www.hangkangfu.cn) | Project Lead & Core Contributor | A native builder in the AI era |
| [齐国皓](https://www.guohaoqi.cn) | Project Lead & Core Contributor | NUS School of Computing, founder of the Hunan University FinTech Association |
| 刘磊 | Practice Contributor, Visual Contributor | Backend engineer from UCAS, loves sharing and Vibe workflows |
| 陈俊希 | Articles Contributor | President of the Hunan University FinTech Association |
| 金龙 | Practice Contributor | PKU AI Club vice minister, graduate student |
| 舒璐璐 | Practice Contributor | Founder of Hunan University "Lushan Humanities+" |

## Contributing

- Found an issue? Open an Issue.
- Want to improve the project? Open a Pull Request.
- Interested in launching a new Datawhale open-source project? Follow the [Datawhale open-source guide](https://github.com/datawhalechina/DOPMC/blob/main/GUIDE.md).

## License

This project is released under the **CC BY-NC-SA 4.0** license.
