# Container 布局容器

用于布局的容器组件。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-container style="height: 200px; border: 1px solid #eee">
      <x-header style="background: #b3c0d1; line-height: 60px">Header</x-header>
      <x-container>
        <x-aside style="background: #d3dce6; width: 200px; line-height: 200px; text-align: center">Aside</x-aside>
        <x-main style="background: #e9eef3; text-align: center; line-height: 160px">Main</x-main>
      </x-container>
      <x-footer style="background: #b3c0d1; line-height: 60px">Footer</x-footer>
    </x-container>
  </div>
</div>

```vue
<template>
  <x-container>
    <x-header>Header</x-header>
    <x-container>
      <x-aside>Aside</x-aside>
      <x-main>Main</x-main>
    </x-container>
    <x-footer>Footer</x-footer>
  </x-container>
</template>

<script setup>
import { Container, Header, Aside, Main, Footer } from '@xto/layout'
</script>
```

## 常见页面布局

<div class="demo-block">
  <div class="demo-preview">
    <x-container style="height: 150px; border: 1px solid #eee">
      <x-aside style="background: #d3dce6; width: 150px; line-height: 150px; text-align: center">Aside</x-aside>
      <x-container>
        <x-header style="background: #b3c0d1; line-height: 60px">Header</x-header>
        <x-main style="background: #e9eef3; text-align: center; line-height: 90px">Main</x-main>
      </x-container>
    </x-container>
  </div>
</div>

## API

### Container Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| direction | 子元素的排列方向 | `'horizontal' \| 'vertical'` | `'vertical'` |

### Header Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| height | 顶栏高度 | `string \| number` | `60` |

### Aside Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| width | 侧边栏宽度 | `string \| number` | `200` |

### Main Props

无特定属性

### Footer Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| height | 底栏高度 | `string \| number` | `60` |