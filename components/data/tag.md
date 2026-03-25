# Tag 标签

用于标记和选择。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-tag>标签一</x-tag>
      <x-tag type="success">标签二</x-tag>
      <x-tag type="warning">标签三</x-tag>
      <x-tag type="danger">标签四</x-tag>
      <x-tag type="info">标签五</x-tag>
    </div>
  </div>
</div>

```vue
<template>
  <x-tag>标签一</x-tag>
  <x-tag type="success">标签二</x-tag>
  <x-tag type="warning">标签三</x-tag>
  <x-tag type="danger">标签四</x-tag>
  <x-tag type="info">标签五</x-tag>
</template>

<script setup>
import { Tag } from '@xto/data'
</script>
```

## 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-tag closable>可移除标签</x-tag>
      <x-tag type="success" closable>成功标签</x-tag>
      <x-tag type="warning" closable>警告标签</x-tag>
    </div>
  </div>
</div>

```vue
<template>
  <x-tag closable>可移除标签</x-tag>
</template>
```

## 不同尺寸

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-tag size="large">大型标签</x-tag>
      <x-tag>默认标签</x-tag>
      <x-tag size="small">小型标签</x-tag>
    </div>
  </div>
</div>

```vue
<template>
  <x-tag size="large">大型标签</x-tag>
  <x-tag>默认标签</x-tag>
  <x-tag size="small">小型标签</x-tag>
</template>
```

## 主题

通过 `effect` 属性设置主题。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-tag effect="dark">Dark</x-tag>
      <x-tag effect="light">Light</x-tag>
      <x-tag effect="plain">Plain</x-tag>
    </div>
    <div class="demo-row">
      <x-tag type="success" effect="dark">Dark</x-tag>
      <x-tag type="success" effect="light">Light</x-tag>
      <x-tag type="success" effect="plain">Plain</x-tag>
    </div>
  </div>
</div>

```vue
<template>
  <x-tag effect="dark">Dark</x-tag>
  <x-tag effect="light">Light</x-tag>
  <x-tag effect="plain">Plain</x-tag>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| type | 类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| ''` | `''` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| effect | 主题 | `'light' \| 'dark' \| 'plain'` | `'light'` |
| closable | 是否可移除 | `boolean` | `false` |
| hit | 是否有边框描边 | `boolean` | `false` |
| color | 自定义颜色 | `string` | — |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| close | 关闭标签时触发 | `(event: Event)` |