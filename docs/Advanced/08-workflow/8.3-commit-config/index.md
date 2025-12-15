---
title: "8.3 让你看懂改了什么——提交规范：Conventional Commits 与 Release Note"
typora-root-url: ../../public
---

# 8.3 让你(和 AI)看懂改了什么——提交规范

好的提交信息是给未来的自己和队友写的说明书——也是让 AI 理解代码变更的关键。

## 为什么提交规范很重要

```bash
# 差的提交历史
git log --oneline
a1b2c3d fix
b2c3d4e update
c3d4e5f fix bug
d4e5f6g 改了点东西
e5f6g7h WIP

# 好的提交历史
git log --oneline
a1b2c3d feat: 添加用户登录功能
b2c3d4e fix: 修复登录验证失败的问题
c3d4e5f docs: 更新 API 文档
d4e5f6g refactor: 重构用户认证模块
e5f6g7h test: 添加登录功能的单元测试
```

**规范提交的价值**：
- 快速定位问题引入的提交
- 自动生成 CHANGELOG
- 方便代码审查
- 让 AI 更容易理解代码变更意图

## Conventional Commits 规范

Conventional Commits 是目前最流行的提交信息规范：

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### 核心元素

| 元素 | 说明 | 示例 |
|------|------|------|
| type | 变更类型 | feat, fix, docs |
| scope | 影响范围（可选） | auth, api, ui |
| description | 简短描述 | 添加用户登录 |
| body | 详细说明（可选） | 多行详细描述 |
| footer | 关联信息（可选） | Closes #123 |

## 本节结构

1. **提交格式**：Conventional Commits 标准格式详解
2. **类型分类**：feat/fix/docs 等类型的使用场景
3. **自动化检查**：commitlint 与 husky 配置
4. **CHANGELOG 生成**：从提交历史自动生成发布日志

## 快速示例

```bash
# 功能提交
git commit -m "feat(auth): 添加 Google OAuth 登录"

# 修复提交
git commit -m "fix(api): 修复用户查询分页错误"

# 带 body 的提交
git commit -m "refactor(database): 优化查询性能

- 添加复合索引
- 使用连接池
- 缓存热点数据

Closes #456"
```

## 验收清单

- [ ] 理解 Conventional Commits 规范
- [ ] 能正确使用 type 和 scope
- [ ] 会配置 commitlint 自动检查
- [ ] 能使用工具自动生成 CHANGELOG
