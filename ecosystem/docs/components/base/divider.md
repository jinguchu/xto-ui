# Divider 分割线

用于分隔内容的分割线。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <div>上半部分内容</div>
    <x-divider />
    <div>下半部分内容</div>
  </div>
</div>

```vue
<template>
  <div>上半部分内容</div>
  <x-divider />
  <div>下半部分内容</div>
</template>

<script setup>
import { Divider } from '@xto/base'
</script>
```

## 设置文案

可以在分割线上自定义文案。

<div class="demo-block">
  <div class="demo-preview">
    <div>内容区域</div>
    <x-divider>分割线</x-divider>
    <div>内容区域</div>
    <x-divider content-position="left">左侧文案</x-divider>
    <div>内容区域</div>
    <x-divider content-position="right">右侧文案</x-divider>
  </div>
</div>

```vue
<template>
  <x-divider>分割线</x-divider>
  <x-divider content-position="left">左侧文案</x-divider>
  <x-divider content-position="right">右侧文案</x-divider>
</template>
```

## 垂直分割

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <span>文字</span>
      <x-divider direction="vertical" />
      <span>文字</span>
      <x-divider direction="vertical" />
      <span>文字</span>
    </div>
  </div>
</div>

```vue
<template>
  <span>文字</span>
  <x-divider direction="vertical" />
  <span>文字</span>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| direction | 设置分割线方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| contentPosition | 设置文案位置 | `'left' \| 'center' \| 'right'` | `'center'` |
| borderStyle | 设置分割线样式 | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` |