# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

包含标题，内容和操作。

<div class="demo-block">
  <div class="demo-preview">
    <x-card header="卡片标题" style="max-width: 400px">
      卡片内容，这里可以放置任何内容。
    </x-card>
  </div>
</div>

```vue
<template>
  <x-card header="卡片标题">
    卡片内容
  </x-card>
</template>

<script setup>
import { Card } from '@xto/data'
</script>
```

## 带操作区域

<div class="demo-block">
  <div class="demo-preview">
    <x-card style="max-width: 400px">
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>卡片标题</span>
          <x-button type="primary" size="small">操作</x-button>
        </div>
      </template>
      卡片内容，这里可以放置任何内容。
    </x-card>
  </div>
</div>

```vue
<template>
  <x-card>
    <template #header>
      <span>卡片标题</span>
    </template>
    卡片内容
  </x-card>
</template>
```

## 阴影

可通过对 `shadow` 属性的设置来控制阴影显示时机。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-card shadow="always" style="width: 200px">总是显示阴影</x-card>
      <x-card shadow="hover" style="width: 200px">悬浮显示阴影</x-card>
      <x-card shadow="never" style="width: 200px">从不显示阴影</x-card>
    </div>
  </div>
</div>

```vue
<template>
  <x-card shadow="always">总是显示</x-card>
  <x-card shadow="hover">悬浮显示</x-card>
  <x-card shadow="never">从不显示</x-card>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| header | 卡片标题 | `string` | — |
| bodyStyle | body 的样式 | `Record<string, any>` | `{ padding: '20px' }` |
| shadow | 阴影显示时机 | `'always' \| 'hover' \| 'never'` | `'always'` |