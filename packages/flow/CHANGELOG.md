# @xto/flow

## 1.2.21

### Patch Changes

- Add homepage and repository documentation links to all packages
- Updated dependencies
  - @xto/core@1.0.3
  - @xto/base@1.3.6
  - @xto/data@1.1.3

## 1.2.9

### Patch Changes

- Fix VueFlow recursive update loop causing "Maximum recursive updates exceeded" error

## 1.0.6

### Patch Changes

- Simplify FlowEditor: remove VueFlow CSS imports (external deps), consumer should import VueFlow styles in main.ts

## 1.0.5

### Patch Changes

- Fix edge initialization: validate edges against nodes and ensure nodes are ready before rendering VueFlow

## 1.0.4

### Patch Changes

- Fix initialization: properly initialize localNodes/localEdges from props and add safety checks

## 1.0.3

### Patch Changes

- Fix recursive update issue: use shallowRef and isInternalUpdate flag to prevent infinite loops

## 1.0.2

### Patch Changes

- Fix edge connection: properly add edges on connect and sync v-model data

## 1.0.1

### Patch Changes

- Add style.css export for proper style importing

## 1.0.0

### Added

- **FlowEditor**: 流程编排编辑器组件

  - 支持画布缩放和平移
  - 支持节点拖拽放置
  - 支持节点连线创建和删除
  - 支持连线验证
  - 支持迷你地图
  - 支持背景网格（点、线、交叉）
  - 支持多种连线类型（默认、直线、阶梯、贝塞尔）

- **FlowNode**: 基础节点组件

  - 支持自定义标题、描述、图标
  - 支持多种颜色主题
  - 支持输入/输出端口配置

- **StartNode**: 开始节点组件

  - 支持配置输入参数
  - 支持参数类型（文本、数字、布尔、文件）

- **AINode**: AI 对话节点组件

  - 支持配置 AI 模型
  - 支持系统提示词配置
  - 支持温度和最大输出参数

- **EndNode**: 结束节点组件
  - 支持配置输出变量
