# @xto/form

## 1.8.3

### Patch Changes

- Fix dynamic form field cleanup, synchronize controlled upload lists, and emit upload callbacks once. Correct declaration build errors and add regression tests.

## 1.8.0

### Minor Changes

- 企业级视觉改版（Enterprise Indigo）：主色由青绿 #12B6AF 调整为靛蓝 #4F46E5（暗色 #818CF8），主按钮白字；圆角统一 4/8/12/16px；阴影中性化四级刻度；新增 --xto-focus-ring 统一焦点样式；移除默认按钮静息阴影与 Modal 遮罩毛玻璃；flow 节点类型色收敛至令牌。API 无变化。

### Patch Changes

- Updated dependencies
  - @xto/core@1.7.0
  - @xto/base@1.8.0

## 1.7.0

### Minor Changes

- 商业化风格改造：Input/Select/DatePicker/TimePicker/Cascader/InputNumber/ColorPicker/Mention/AutoComplete/Transfer 默认高度 32→36px（small 28 / large 44）；聚焦态色值同步品牌青

## 1.6.9

### Patch Changes

- 存量问题修复：dts 生成、组件 BUG、flow 测试

  **@xto/form / @xto/data / @xto/navigation / @xto/layout**

  - 添加 vite-plugin-dts，修复类型声明文件 (.d.ts) 不生成的问题

  **@xto/data**

  - Progress: circle 轨道 stroke 从硬编码 #ebeef5 改为 var(--xto-fill-color, #F1F5F9)
  - Table: 实现 clearSelection / getSelection / toggleRowSelection，补充选中行追踪

  **@xto/form**

  - Switch: 添加 role="switch" / tabindex / aria-checked / aria-disabled / 键盘支持（Space/Enter）
  - Switch: inactiveColor 默认值从 '#dcdfe6' 改为空字符串，走 CSS token var(--xto-border-color)

  **@xto/flow**

  - NODE_THEME_COLORS 添加 python 键（#EC4899）
  - 修正测试：NODE_CONFIG_REGISTRY 断言改为 toContain，code→python，ref 路径格式对齐 output 中间段

- Updated dependencies
  - @xto/core@1.5.1
  - @xto/base@1.6.5

## 1.6.8

### Patch Changes

- 精炼靛蓝（Refined Indigo）设计令牌刷新与暗色模式完善

  **@xto/core**

  - 设计令牌全面精修：secondary 调整为 #0EA5E9，success 调整为 #059669 并补齐 9 级阶梯，中性色/边框/页面底色微调（text-regular #475569、border-lighter #EDF2F7、bg-page #F6F7F9），阴影改为 slate 色调双层阴影，新增 `--xto-font-family-mono` 与字重令牌
  - 暗色主题令牌完善：info 阶梯在暗色下反转为表面相对色（修复暗色下 info 标签几乎不可见的问题），primary/success/warning/danger 阶梯暗色化
  - 新增 `useDark()` composable：localStorage 持久化 + 系统偏好回退 + 切换过渡动画
  - 新增 `./theme/style.css` 导出（构建时拷贝到 es/lib），应用可直接 `import '@xto/core/theme/style.css'` 获得全部亮暗 tokens
  - 统一三个主题镜像（style.css / theme/index.ts / variables.scss）的色值

  **组件包（base/form/data/feedback/navigation 等）**

  - 全面对齐新 tokens（fallback 值同步更新）
  - Button/Tag/Badge/Empty/Skeleton、Input/Textarea/Select/Checkbox/Radio/Switch、Table/Card/Pagination/Descriptions/Progress/Avatar/Tree、Modal/Message/Drawer/Popconfirm/Tooltip/Alert/Notification、Tabs/Menu/Breadcrumb/Dropdown 细节美化（hover/焦点态、阴影、圆角、动效）

- Updated dependencies
  - @xto/core@1.5.0
  - @xto/base@1.6.4

## 1.6.7

### Patch Changes

- chore(Select): 移除 1.6.6-debug.0 中临时加入的 `[XSelect-Debug]` 诊断日志，发布干净的正式版。功能与 1.6.6 完全一致（含 `mergedOptions` slot 优先合并、`ensureTopZIndex` popper 置顶、popper 定位强制同步布局三项修复）。

## 1.6.6

### Patch Changes

- fix(Select): 修复 `mergedOptions` 在「props.options 非空就完全忽略 slot 选项」的缺陷。XSelectOption 是在 `onMounted` 异步注册的，注册完成前若 `props.options` 恰好非空（哪怕只有历史残留的一项），slot 里真正要渲染的 `<x-option>` 会被整体丢弃，导致下拉只剩一项。现在改为：slot 选项优先、props.options 兜底，两者按 `value` 去重合并。

## 1.6.5

### Patch Changes

- fix(Select): 修复 popper 在 Drawer/Modal 中只显示第一项的根本问题。根因：popper 用 `v-show` 常驻 DOM（teleport 到 body），其 `z-index` 是上次打开时分配的旧值；当 Drawer/Modal 随后打开并分配到更高的 overlay `z-index` 时，全屏半透明的 overlay 会盖住 popper，用户只能隐约看到顶部露出的一项。修复：新增 `ensureTopZIndex()`，每次打开 popper 时扫描 body 下所有 overlay/popper 的最大 `z-index` 并取其 +1，保证 popper 永远置顶。

## 1.6.4

### Patch Changes

- fix(Select): 修复 popper 定位时因 `v-show` 刚切换、`getBoundingClientRect` 返回全 0 导致高度判断失效的问题。表现为在 Drawer/Modal 底部区域的 Select 展开后只看到第一个选项（其余选项被定位到视口外）。修复：测量前强制同步布局（`void offsetHeight`），并在上下空间都不足时自动压缩 `maxHeight` 而不是盲目翻转；`showPopper` 改为 `nextTick + requestAnimationFrame` 后再测量，确保 Transition 的 `display` 切换已生效。

## 1.6.3

### Patch Changes

- chore(Select): 移除 1.6.2 中临时加入的 `filteredOptions` 调试 `console.log`。

## 1.6.2

### Patch Changes

- debug(Select): 在 `filteredOptions` computed 中加 `console.log`，用于排查下拉选项显示不全的问题（生产环境请移除）。

## 1.6.1

### Patch Changes

- feat: 主题色从 Indigo (#4F46E5) 升级为 Royal Blue (#1D4ED8)，Gauss Admin 风格
- Updated dependencies
  - @xto/base@1.6.1
  - @xto/core@1.4.1

## 1.6.0

### Minor Changes

- feat(theme): Gauss Admin 风格视觉美化

  - 设计令牌重塑：品牌深蓝 #1D4ED8 + slate 蓝灰中性色阶 + 柔和多层阴影 + 大圆角（large 10px / xl 16px），暗色模式同步重调（主色提亮 #4C8DFF、深蓝黑背景），CSS 变量名零变更
  - base：Tag/Alert 柔和语义浅底（light-9 底 + 语义色文字）
  - form：Input/Select/DatePicker/Cascader/InputNumber/Textarea/AutoComplete/Mention/TimePicker/ColorPicker/RichEditor 聚焦态统一为品牌蓝边框 + 3px primary-light-8 光晕，hover 边框加深
  - data：Table 浅蓝灰表头 + 600 字重 + 行 hover 品牌最浅蓝；Pagination 激活实心蓝；Card 圆角阴影走令牌
  - navigation：Menu 激活浅蓝底深蓝字圆角项；Tabs line 型 2px 品牌蓝下划线；FloatButton hover 明度递进
  - feedback：Message/Notification 白卡 + 左侧 4px 语义色条 + elevated 阴影；Modal/Drawer 圆角 16px；Alert 语义浅底
  - business：ProTable 表头浅蓝灰 + 行 hover 浅蓝；SearchForm/Statistic/AppCard 白卡容器化与令牌阴影
  - chat/flow：样式变量桥接到 core 令牌，无独立色系分叉

  API 零变更：所有组件 props/emits/slots/类名前缀与 DOM 结构约定保持不变。

### Patch Changes

- Updated dependencies
  - @xto/core@1.4.0
  - @xto/base@1.6.0

## 1.5.0

### Minor Changes

- Style optimization: Complete design token system overhaul with new Indigo color palette

  - **New primary color**: #4F46E5 (Indigo-600) replacing #4F46E5 (Element Plus blue)
  - **Design token system**: CSS Variables (--xto-_) + SCSS ($xto-_) dual-track with full fallback support
  - **Color palette**: Full light-1 through light-9 variants for primary/success/warning/danger/info
  - **Border radius tokens**: small(4px), base(6px), large(8px), xl(12px), round(20px), circle(100%)
  - **Shadow tokens**: 4 levels (subtle, base, elevated, prominent) with dark mode variants
  - **Spacing tokens**: xs(4px) through xl(32px) on 4px base
  - **Typography**: Inter + PingFang SC + Microsoft YaHei font stack
  - **Transition tokens**: fast(150ms), base(250ms), slow(350ms) with cubic-bezier easing
  - **Dark mode**: html.dark class approach with proper dark palette (#818CF8 primary, #111827 bg)
  - **Accessibility**: :focus-visible focus rings on all interactive elements, prefers-reduced-motion support
  - **Button feedback**: Click scale(0.97) + hover translateY(-1px) micro-lift
  - **Modal/Dialog**: backdrop-filter blur(4px), border-radius-xl(12px), prominent shadow
  - **All hardcoded colors replaced**: #4F46E5, #67c23a, #e6a23c, #f56c6c, #909399 etc. → CSS variables
  - **All old var() patterns migrated**: --color-_, --bg-color → --xto-_ namespace
  - **Flow package**: --flow-_ → --xto-flow-_ prefix, #155eef → var(--xto-color-primary)
  - **Chat package**: --chat-_ → --xto-chat-_ prefix, #155eef → var(--xto-color-primary)

### Patch Changes

- Updated dependencies
  - @xto/core@1.3.0
  - @xto/base@1.5.0

## 1.4.2

### Patch Changes

- FormItem: 增加 #label 插槽支持，允许自定义 label 内容

## 1.4.1

### Patch Changes

- 修复类型声明文件，添加所有导出组件的类型定义
- Updated dependencies
  - @xto/base@1.4.1
  - @xto/core@1.2.4

## 1.3.0

### Minor Changes

- Add SelectOption component support for slot-based option rendering. The Select component now supports both `options` prop and `x-select-option` slot for defining options.

## 1.2.0

### Minor Changes

- 为所有组件添加完整的 TypeScript 类型定义和 JSDoc 文档注释

  ### 新特性

  - **类型定义**: 为所有组件添加了完整的 TypeScript 类型定义文件 (`types.ts`)
  - **组件实例类型**: 导出 `ComponentInstance` 类型，支持 `InstanceType<typeof import('./index.vue').default>` 模式
  - **文档 UI**: 重新设计文档站点，支持浅色/深色/跟随系统三种主题模式
  - **DemoBlock**: 新增演示块组件，支持代码展示、复制功能
  - **ApiTable**: 新增 API 表格组件，用于展示 Props、Events、Slots
  - **ThemeToggle**: 新增主题切换组件
  - **Navbar/Sidebar/Footer**: 新增导航栏、侧边栏、页脚组件

  ### 改进

  - 完善了所有组件的 Props、Emits、Expose 类型定义
  - 统一了类型命名规范
  - 优化了文档站点的样式和布局
  - 添加了 CHANGELOG.md 更新日志文件

### Patch Changes

- Updated dependencies
  - @xto/core@1.1.0
  - @xto/base@1.4.0

## 1.1.4

### Patch Changes

- Fix Table component fixed column support and DatePicker showTime feature
  - Table: Add proper sticky positioning for fixed columns (left/right)
  - Table: Fix column ordering to preserve insertion order
  - TableColumn: Make prop optional for operation columns
  - DatePicker: Add showTime prop with time selector UI

## 1.1.3

### Patch Changes

- Add homepage and repository documentation links to all packages
- Updated dependencies
  - @xto/core@1.0.3

## 1.1.2

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

## 3.0.0

### Major Changes

- q

### Patch Changes

- Updated dependencies
  - @xto/core@3.0.0

## 2.0.0

### Major Changes

- 5e634cd: 初始化提交
- 增加基础组件，修复部分问题

### Patch Changes

- Updated dependencies [5e634cd]
- Updated dependencies
  - @xto/core@2.0.0
