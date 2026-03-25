# 主题定制

## CSS 变量

Xto UI 使用 CSS 变量进行主题定制：

```css
:root {
  --xto-color-primary: #409eff;
  --xto-color-success: #67c23a;
  --xto-color-warning: #e6a23c;
  --xto-color-danger: #f56c6c;
  --xto-color-info: #909399;

  --xto-font-size: 14px;
  --xto-border-radius: 4px;
}
```

## 自定义主题

### CSS 覆盖

```css
:root {
  --xto-color-primary: #1890ff;
  --xto-color-success: #52c41a;
  --xto-border-radius: 6px;
}
```

### 动态主题切换

```ts
import { useTheme } from '@xto/core'

const { setTheme } = useTheme()

// 切换到暗黑模式
setTheme({
  mode: 'dark',
  primary: '#1890ff'
})
```

## SCSS 变量

```scss
// 在项目中自定义
$color-primary: #409eff;
$color-success: #67c23a;
$border-radius-base: 4px;
```