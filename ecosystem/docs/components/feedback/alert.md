# Alert 警告

用于页面中展示重要的提示信息。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-alert title="成功提示" type="success" style="margin-bottom: 12px" />
    <x-alert title="消息提示" type="info" style="margin-bottom: 12px" />
    <x-alert title="警告提示" type="warning" style="margin-bottom: 12px" />
    <x-alert title="错误提示" type="error" />
  </div>
</div>

```vue
<template>
  <x-alert title="成功提示" type="success" />
  <x-alert title="消息提示" type="info" />
  <x-alert title="警告提示" type="warning" />
  <x-alert title="错误提示" type="error" />
</template>

<script setup>
import { Alert } from '@xto/feedback'
</script>
```

## 带有辅助性文字介绍

<div class="demo-block">
  <div class="demo-preview">
    <x-alert
      title="带辅助性文字介绍"
      type="success"
      description="这是一句描述性文字，用于补充说明提示内容。"
    />
  </div>
</div>

```vue
<template>
  <x-alert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句描述性文字"
  />
</template>
```

## 可关闭

<div class="demo-block">
  <div class="demo-preview">
    <x-alert title="可关闭的提示" type="success" closable />
  </div>
</div>

```vue
<template>
  <x-alert title="可关闭的提示" type="success" closable />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题 | `string` | — |
| type | 类型 | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` |
| description | 辅助性文字 | `string` | — |
| closable | 是否可关闭 | `boolean` | `true` |
| showIcon | 是否显示图标 | `boolean` | `false` |
| center | 文字是否居中 | `boolean` | `false` |
| effect | 主题 | `'light' \| 'dark'` | `'light'` |

### Events

| 事件名 | 说明 |
|-------|------|
| close | 关闭时触发 |