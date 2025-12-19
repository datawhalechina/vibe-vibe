---
title: "11.1 1.0.0 和 1.1.0 区别在哪——语义化版本与发布流：Release 分支/Tag/公告"
typora-root-url: ../../public
---

# 11.1 语义化版本与发布流

## 认知重构

版本号不是随便写的数字，而是一种**与用户沟通的语言**。通过版本号，用户可以判断这次更新是否会破坏现有功能、是否需要立即升级。

```mermaid
flowchart LR
    subgraph Version["版本号结构"]
        Major["主版本\n破坏性变更"] --> Minor["次版本\n新功能"]
        Minor --> Patch["修订版本\n Bug 修复"]
    end
    
    Example["1.2.3"] --> Major
    Example --> Minor
    Example --> Patch
```

## 本节内容

| 小节 | 核心问题 | 你将学会 |
|------|----------|----------|
| 11.1.1 SemVer 规范 | 版本号怎么定？ | 主版本/次版本/修订版本的含义 |
| 11.1.2 Release 分支 | 发布前做什么？ | 发布准备与稳定化流程 |
| 11.1.3 Git Tag | 如何标记版本？ | 版本标签的创建与管理 |
| 11.1.4 发布公告 | 如何通知用户？ | CHANGELOG 与升级指南 |

## 发布流程全景

```mermaid
sequenceDiagram
    participant Dev as 开发分支
    participant Release as Release 分支
    participant Main as 主分支
    participant Tag as Git Tag
    
    Dev->>Release: 1. 创建 release/1.2.0 分支
    Release->>Release: 2. 修复发布阻塞问题
    Release->>Main: 3. 合并到 main
    Main->>Tag: 4. 创建 v1.2.0 标签
    Tag->>Tag: 5. 触发自动部署
```

## AI 协作提示

在进行版本发布时，可以这样与 AI 协作：

- "根据最近的提交记录，判断应该发布什么版本"
- "帮我生成这个版本的 CHANGELOG"
- "检查这次变更是否有破坏性更新"

::: tip 版本号的承诺
版本号是你对用户的承诺。`1.0.0` 到 `2.0.0` 意味着"有东西会坏"，用户需要谨慎升级；`1.0.0` 到 `1.1.0` 意味着"只会变得更好"，用户可以放心更新。
:::
