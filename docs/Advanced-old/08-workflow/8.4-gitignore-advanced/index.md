---
title: "8.4 哪些文件不该进仓库——`.gitignore` 管理：依赖/构建/敏感/IDE/系统/日志"
typora-root-url: ../../public
---

# 8.4 哪些文件不该进仓库——Gitignore 进阶

`.gitignore` 是代码仓库的"门卫"——它决定哪些文件能进，哪些文件留在门外。

## 为什么需要 .gitignore

**不该进仓库的文件**：

| 类型 | 示例 | 原因 |
|------|------|------|
| 依赖目录 | node_modules | 太大，可通过 package.json 恢复 |
| 构建产物 | .next, out, dist | 可重新构建 |
| 敏感信息 | .env, *.pem | 安全风险 |
| 系统文件 | .DS_Store | 与代码无关 |
| IDE 配置 | .idea, .vscode | 个人偏好 |
| 日志文件 | *.log | 临时数据 |

## Next.js 项目的 .gitignore

```gitignore
# 依赖目录
node_modules/
.pnpm-store/

# 构建产物
.next/
out/
dist/
build/

# 环境变量
.env
.env.local
.env.*.local

# 日志
*.log
npm-debug.log*
pnpm-debug.log*

# 系统文件
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.swp
*.swo

# 测试覆盖率
coverage/

# TypeScript
*.tsbuildinfo

# Vercel
.vercel

# 本地数据库
*.db
*.sqlite
```

## 本节结构

1. **依赖与构建产物**：node_modules、.next、out 等
2. **敏感文件**：.env 管理与 .env.example 模板
3. **系统与 IDE 文件**：跨平台忽略配置
4. **防误提交**：pre-commit 钩子检查

## .gitignore 语法速查

| 语法 | 含义 | 示例 |
|------|------|------|
| `*` | 匹配任意字符 | `*.log` |
| `**` | 匹配任意目录 | `**/node_modules` |
| `!` | 取反（不忽略） | `!.env.example` |
| `/` 开头 | 只匹配根目录 | `/dist` |
| `/` 结尾 | 只匹配目录 | `logs/` |
| `#` | 注释 | `# 忽略日志` |

## 验收清单

- [ ] 了解哪些文件应该被忽略
- [ ] 能编写基本的 .gitignore 规则
- [ ] 理解敏感文件的处理方式
- [ ] 知道如何配置全局 gitignore
