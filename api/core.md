# Core 核心 API

@xto/core 提供核心功能：主题系统、工具函数、Hooks 和类型定义。

## 安装

```bash
pnpm add @xto/core
```

## 导出模块

### Types 类型

```ts
import type {
  ComponentSize,
  ThemeMode,
  ThemeConfig,
  ZIndex
} from '@xto/core'
```

### Theme 主题

```ts
import {
  defaultThemeConfig,
  generateCSSVars,
  useTheme
} from '@xto/core'
```

### Hooks 组合式函数

```ts
import {
  useToggle,
  useModel,
  useVisible,
  useDisabled,
  useLoading,
  useClickOutside,
  useEscape,
  useResize,
  useScroll,
  useFocus,
  useIntersectionObserver
} from '@xto/core'
```

### Utils 工具函数

```ts
import {
  useNamespace,
  useZIndex,
  isUndefined,
  isNull,
  isNil,
  isEmpty,
  isDefined,
  debounce,
  throttle,
  deepMerge,
  deepClone
} from '@xto/core'
```

## ComponentSize 组件尺寸

组件尺寸类型定义。

```ts
type ComponentSize = 'large' | 'default' | 'small'
```

## ThemeConfig 主题配置

主题配置接口定义。

```ts
interface ThemeConfig {
  mode: 'light' | 'dark'
  primary: string
  success: string
  warning: string
  danger: string
  info: string
  size: ComponentSize
}
```

## useNamespace 命名空间

BEM 命名空间工具函数。

```ts
const ns = useNamespace('button')

ns.b() // 'x-button'
ns.is('disabled', true) // 'is-disabled'
```