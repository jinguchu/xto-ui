# Avatar 头像

用图标、图片或者字符展示用户或事物信息。

## 基础用法

通过 `shape` 和 `size` 设置头像的形状和大小。

```vue
<template>
  <x-avatar src="https://example.com/avatar.png" />
  <x-avatar src="https://example.com/avatar.png" size="large" />
  <x-avatar src="https://example.com/avatar.png" size="small" />
</template>

<script setup>
import { Avatar } from '@xto/data'
</script>
```

## 展示类型

支持三种类型：图标、图片和字符。

```vue
<template>
  <x-avatar icon="👤" />
  <x-avatar src="https://example.com/avatar.png" />
  <x-avatar>user</x-avatar>
</template>
```

## 形状

通过 `shape` 设置头像的形状。

```vue
<template>
  <x-avatar shape="circle" src="https://example.com/avatar.png" />
  <x-avatar shape="square" src="https://example.com/avatar.png" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| icon | 设置头像的图标类型 | `string` | — |
| size | 设置头像的大小 | `'large' \| 'default' \| 'small' \| number` | `'default'` |
| shape | 设置头像的形状 | `'circle' \| 'square'` | `'circle'` |
| src | 图片头像的资源地址 | `string` | — |
| alt | 描述图像的替换文本 | `string` | — |
| fit | 当展示类型为图片的时候，设置图片如何适应容器 | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'cover'` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| error | 图片类头像加载失败的回调 | `(e: Event)` |