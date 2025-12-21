---
title: "第十一章：无服务器部署与 CI/CD 自动化"
---

# 第十一章：无服务器部署与 CI/CD 自动化
## 序言
你准备上线了，听说要买服务器，但你囊中羞涩，而且不想折腾 Linux 运维。



老师傅给你推荐了一套经典的零成本起步方案：**Vercel (前端+后端运行环境)** + **Supabase (云数据库)**。

- **Vercel**：这是 Next.js 的官方部署平台，体验极佳。它提供 **Serverless (无服务器)** 环境。注意，Serverless 不是说没有服务器，而是**你不需要管理服务器**。你只管写代码，服务器的扩容、维护全交给 Vercel，有请求时它自动唤醒，没请求时它自动休眠，对个人开发者有免费额度。
- **Supabase**：Vercel 不提供数据库，所以我们需要 Supabase。它本质上就是一个**云端的 PostgreSQL**。 老师傅悄悄提醒你，最好不要被它深度捆绑。意思是：尽量使用 **Prisma** 通过标准的连接字符串去连它，而不是大量使用 Supabase 独有的 JS SDK。这样哪天 Supabase 收费贵了，你可以把 `DATABASE_URL` 一改，无缝迁移到阿里云或其他云数据库，这叫**保持架构的独立性**。



老师傅还提到了一个听起来很高级的词：**CI/CD（持续集成/持续部署）**。 虽然听起来复杂，但在现在的开发流程里，它就意味着**“自动化”**。

以前，部署网站需要：`手动打包 -> 传到服务器 -> SSH 登录服务器 -> 重启服务`。 现在，流程变成了：

1. 你在本地运行 `git push` 把代码推送到 GitHub。
2. GitHub 自动通知 Vercel：“嘿，有新代码了！”
3. Vercel 收到信号，自动拉取最新代码，下载依赖，运行构建，发布上线。

你不需要懂复杂的运维命令，**保存即发布**。



你学会了将 GitHub 项目绑定到 Vercel。第一次构建，红色的 **Failed** 给了你当头一棒。

**坑一：Node.js 版本不一致** Vercel 默认的 Node 版本可能比较老（比如 18），而你的 Next.js 16 项目可能需要 Node 20。你需要在 Vercel 的 `Settings -> Build & Development Settings` 里把 Node.js Version 调整为和你本地一致的版本。

**坑二：环境变量失踪** 修正版本后，构建成功了（Succeeded），但你访问网页，发现全是报错。 你猛然想起第六章学过的知识：**`.env` 文件被 `.gitignore` 拦在门外了！** GitHub 上根本没有你的数据库密码和 API Key，Vercel 自然也拿不到。 你需要在 Vercel 的 `Settings -> Environment Variables` 页面，把本地 `.env` 里的内容一条条复制填进去。**这意味着你需要将本地开发环境中的配置信息，手动同步到云端生产环境中。**

配置好变量后，你满怀期待地打开网站，结果页面显示 **500 Server Error**。 查看日志，报错显示：`Table "User" does not exist`。

你恍然大悟：**代码传上去了，但数据库表还没传上去！** Supabase 给你的只是一个**空的数据库**。你本地的表结构（Schema）还在你本地的电脑里。 老师傅教了你一个**远程同步命令**：在本地终端运行： `npx prisma db push` 这会将你本地 `schema.prisma` 定义的结构，推送到线上的 Supabase 数据库中。 （*注意：此时你的本地 `.env` 必须临时指向 Supabase 的地址，或者利用 `--url` 参数指定地址。*）



最后，为了防止上线后报错，老师傅让你检查 Vercel 的 **Build Command**。 虽然默认是 `next build`，但对于 Prisma 项目，最好修改为： `npx prisma generate && next build` 这呼应了第七章的伏笔：**每次构建前，必须先运行 generate**，确保云端的代码能认识最新的数据库结构。

终于，一切配置妥当。Vercel 给你生成了一个 `https://your-project.vercel.app` 的链接。 你激动地点开，网页在公网上跑起来了！你终于获得了那个可以发给朋友的链接。