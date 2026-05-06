# @xto/feedback

## 1.1.8

### Patch Changes

- Add homepage and repository documentation links to all packages
- Updated dependencies
  - @xto/core@1.0.3

## 1.1.7

### Patch Changes

- Add Timeline and TimelineItem components for displaying timeline data

## 1.1.6

### Patch Changes

- Fix Drawer footer slot display issue: body height now correctly accounts for footer presence

## 1.1.3

### Patch Changes

- Add business components: AppCard, Chat, LogTable, ApiDoc, VarTag

  - AppCard: Application card with status indicator
  - Chat: AI chat interface with code block parsing
  - LogTable: Session log table with pagination
  - ApiDoc: API documentation with curl examples
  - VarTag: Variable type tags

  Enhance form components:

  - DrawerForm: Drawer-style form component
  - DynamicFields: Dynamic field add/remove functionality
  - IconPicker: Icon selection component
  - ColorPicker: Color selection functionality

## 1.0.3

### Patch Changes

- feat(drawer): 添加 placement/width 属性别名支持

  - 添加 `placement` 作为 `direction` 的别名（已标记为废弃）
  - 添加 `width` 作为 `size` 的别名（已标记为废弃）
  - 设置 `inheritAttrs: false` 解决 Teleport 根节点导致的 Vue 警告
  - 更新 TypeScript 类型定义

## 1.0.2

### Patch Changes

- 修复发布到 npm 时依赖版本未正确解析的问题

## 1.0.1

### Patch Changes

- 同步组件库版本更新

## 1.0.0

### Major Changes

- fa32163: 首次提交组件库

### Patch Changes

- Updated dependencies [fa32163]
  - @xto/core@1.0.0

## 1.0.0

### Major Changes

- 初始化组件库提交

### Patch Changes

- Updated dependencies
  - @xto/core@1.0.0

## 4.0.0

### Major Changes

- q

### Patch Changes

- Updated dependencies
  - @xto/core@3.0.0

## 3.0.0

### Major Changes

- 新增部分组件

## 2.0.0

### Major Changes

- 5e634cd: 初始化提交

### Patch Changes

- Updated dependencies [5e634cd]
- Updated dependencies
  - @xto/core@2.0.0
