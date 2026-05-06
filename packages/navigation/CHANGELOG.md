# @xto/navigation

## 1.2.5

### Patch Changes

- Add homepage and repository documentation links to all packages
- Updated dependencies
  - @xto/core@1.0.3
  - @xto/base@1.3.6

## 1.2.3

### Patch Changes

- fix: 修复菜单组件暗黑模式样式问题，增强水平菜单和子菜单的暗黑主题支持

## 1.2.2

### Patch Changes

- 修复菜单组件在暗黑模式下的样式问题，使用 CSS 变量替代硬编码颜色值

## 1.1.0

### Minor Changes

- Menu 组件支持直接使用 Icon 组件的图标名称

  - MenuItem 和 SubMenu 的 `icon` 属性现在接受 Icon 组件的图标名称
  - 自动使用 Icon 组件渲染图标
  - 简化了使用方式，不再需要手动使用 `<x-icon>` 组件
  - 仍支持 `#icon` 插槽自定义图标样式
  - 添加 @xto/base 依赖

## 1.0.2

### Patch Changes

- 添加菜单导航相关图标

  - 新增 menu-fold, menu-unfold, sidebar-fold, sidebar-expand 等菜单图标
  - 新增 dashboard, chart, report, analytics 等数据可视化图标
  - 新增 system, permission, role, user-manage, log 等系统管理图标
  - 更新 Icon 组件文档，添加菜单导航类图标展示
  - 更新 Menu 组件文档，展示使用 Icon 组件的最佳实践

## 1.0.1

### Patch Changes

- 修复发布到 npm 时依赖版本未正确解析的问题

## 1.0.0

### Major Changes

- fa32163: 首次提交组件库

### Minor Changes

- 优化 Menu 组件收起侧边栏功能样式：

  - 新增 MenuItem 和 SubMenu 的 `icon` 插槽，收起时仅显示图标
  - 优化收起状态下的布局和过渡动画
  - 弹出子菜单添加边框和阴影效果
  - 左侧高亮条宽度调整为 4px 并添加圆角
  - 箭头图标改用 SVG 支持旋转动画
  - 更新文档示例，使用新的 icon 插槽用法

### Patch Changes

- Updated dependencies [fa32163]
  - @xto/core@1.0.0

## 1.0.0

### Major Changes

- 初始化组件库提交

### Patch Changes

- Updated dependencies
  - @xto/core@1.0.0

## 3.0.0

### Major Changes

- q

### Patch Changes

- Updated dependencies
  - @xto/core@3.0.0

## 2.0.0

### Major Changes

- 5e634cd: 初始化提交

### Patch Changes

- Updated dependencies [5e634cd]
- Updated dependencies
  - @xto/core@2.0.0
