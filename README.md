# Xto UI

Xto UI 是一个基于 Vue 3 的组件库，使用 TypeScript 开发，支持按需引入。

## 文档与当前版本

- [在线手册](https://jinguchu.github.io/xto-ui/)
- [本次更新说明](https://jinguchu.github.io/xto-ui/guide/changelog.html)：`@xto/form@1.8.3`（2026-11-10）。各子包独立版本管理。
- 应用安装：`pnpm add @xto/form@^1.8.3`；以下 `pnpm install` 用于源码仓库开发。

## 技术栈

- Vue 3.4+
- TypeScript 5.4+
- Vite 5
- pnpm 8+
- Changesets（版本管理）

## 安装

```bash
pnpm install
```

## 开发

```bash
# 启动开发环境
pnpm dev

# 启动文档
pnpm docs

# 构建所有包
pnpm build:all

# 运行测试
pnpm test

# 代码检查
pnpm lint
```

## NPM 发布指南

本项目使用 [Changesets](https://github.com/changesets/changesets) 进行版本管理和 npm 发布。

### 前置准备

1. 确保 npm 账号已登录

```bash
npm login
```

2. 确保已加入 npm 组织（发布 scoped package 需要）

### 发布流程

#### 1. 创建变更集（Changeset）

在开发完成后，运行以下命令创建变更集：

```bash
pnpm changeset
```

按照提示：
- 选择要发布的包（使用空格选择，回车确认）
- 选择版本类型：`major` / `minor` / `patch`
- 输入变更说明

这会在 `.changeset` 目录下生成一个 markdown 文件。

#### 2. 提交变更集

```bash
git add .
git commit -m "chore: add changeset for xxx"
```

#### 3. 版本升级

当准备好发布时，运行：

```bash
pnpm changeset version
```

此命令会：
- 更新相关包的 `package.json` 版本号
- 更新 `CHANGELOG.md`
- 删除已处理的变更集文件

#### 4. 构建

```bash
pnpm build:all
```

#### 5. 发布到 npm

**重要**：如果 npm 账号开启了双因素认证（2FA），需要提供 OTP：

```bash
pnpm changeset publish --otp <6位验证码>
```

或使用带 2FA 绕过的 Automation Token：

```bash
# 创建 .npmrc 文件
//registry.npmjs.org/:_authToken=<your-automation-token>
```
```bash
npm config set //registry.npmjs.org/:_authToken=<your-token>
```

### 发布检查清单

- [ ] 所有测试通过：`pnpm test`
- [ ] 代码检查通过：`pnpm lint`
- [ ] 构建成功：`pnpm build:all`
- [ ] 已创建变更集：`pnpm changeset`
- [ ] 版本号已更新：`pnpm changeset version`
- [ ] CHANGELOG 已更新
- [ ] 已登录 npm：`npm whoami`

### 常见问题

#### 发布失败：403 Forbidden (2FA)

错误信息：`Two-factor authentication or granular access token with bypass 2fa enabled`

**解决方案**：
- 方式一：发布时提供 OTP：`pnpm changeset publish --otp <验证码>`
- 方式二：创建带 **Bypass 2FA for automation** 的 Granular Access Token

#### 发布失败：版本已存在

错误信息：`version x.x.x is already published on npm`

**解决方案**：运行 `pnpm changeset version` 升级版本号后再发布

#### 依赖包未更新

确保 monorepo 内的 workspace 依赖已正确更新：

```bash
pnpm install
```

## 包结构

```
packages/
├── core              # 核心：主题、hooks、工具函数、类型
├── base              # 基础组件：Button、Icon、Badge 等
├── form              # 表单组件：Input、Select、Form 等
├── data              # 数据展示：Table、Card、Tag 等
├── feedback          # 反馈组件：Modal、Drawer、Alert 等
├── navigation        # 导航组件：Menu、Tabs、Breadcrumb 等
├── layout            # 布局组件：Grid、Container 等
├── business          # 业务组件：ProTable、SearchForm 等
├── flow              # 流程组件：FlowEditor、StartNode、AINode 等
│
├── lowcode-shared    # 低代码共享：Schema 定义、代码生成器
├── designer          # 页面设计器：可视化拖拽布局
├── form-builder      # 表单构建器：Schema → XtoForm
├── flow-orchestrator # 流程编排器：扩展节点（Condition、Loop、Tool）
│
└── docs              # 文档目录
    ├── schema-spec.md
    ├── designer/
    ├── form-builder/
    └── flow-orchestrator/
```

## A2UI 低代码组件

A2UI 是 XTO UI 的低代码扩展，提供可视化页面构建能力。

### 包列表

| 包名 | 说明 | npm 名称 |
|------|------|----------|
| lowcode-shared | Schema 定义 + 代码生成 | `@xto/lowcode-shared` |
| designer | 页面设计器 | `@xto/designer` |
| form-builder | 表单构建器 | `@xto/form-builder` |
| flow-orchestrator | 流程编排器 | `@xto/flow-orchestrator` |

### 快速使用

#### 页面设计器

```vue
<script setup>
import { PageDesigner } from '@xto/designer'
</script>

<template>
  <PageDesigner @save="handleSave" @export="handleExport" />
</template>
```

#### 表单构建器

```vue
<script setup>
import { FormBuilder } from '@xto/form-builder'
</script>

<template>
  <FormBuilder @save="handleSave" @export="handleExport" />
</template>
```

#### 流程编排器

```vue
<script setup>
import { FlowOrchestrator, ConditionNode, LoopNode, ToolNode } from '@xto/flow-orchestrator'
</script>

<template>
  <FlowOrchestrator @save="handleSave" />
</template>
```

### Schema 规范

详见 [docs/schema-spec.md](docs/schema-spec.md)

- **PageSchema** - 页面配置（布局 + 组件列表）
- **FormSchema** - 表单配置（字段 + 校验规则）
- **FlowSchema** - 流程配置（节点 + 连线）

### 依赖关系

```
designer → form, data, layout, lowcode-shared
form-builder → form, lowcode-shared
flow-orchestrator → flow, lowcode-shared
```

## 许可证

MIT