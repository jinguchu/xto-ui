# Space 间距

设置组件之间的间距。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-space>
      <x-button>Button 1</x-button>
      <x-button>Button 2</x-button>
      <x-button>Button 3</x-button>
    </x-space>
  </div>
</div>

```vue
<template>
  <x-space>
    <x-button>Button 1</x-button>
    <x-button>Button 2</x-button>
    <x-button>Button 3</x-button>
  </x-space>
</template>

<script setup>
import { Space, Button } from '@xto/base'
</script>
```

## 垂直间距

使用 `direction` 属性设置排列方向。

<div class="demo-block">
  <div class="demo-preview">
    <x-space direction="vertical">
      <x-button>Button 1</x-button>
      <x-button>Button 2</x-button>
      <x-button>Button 3</x-button>
    </x-space>
  </div>
</div>

```vue
<template>
  <x-space direction="vertical">
    <x-button>Button 1</x-button>
    <x-button>Button 2</x-button>
  </x-space>
</template>
```

## 间距大小

使用 `size` 属性设置间距大小。

<div class="demo-block">
  <div class="demo-preview">
    <div style="margin-bottom: 16px;">
      <span style="margin-right: 8px;">Small:</span>
      <x-space size="small">
        <x-button>Button</x-button>
        <x-button>Button</x-button>
      </x-space>
    </div>
    <div style="margin-bottom: 16px;">
      <span style="margin-right: 8px;">Default:</span>
      <x-space>
        <x-button>Button</x-button>
        <x-button>Button</x-button>
      </x-space>
    </div>
    <div>
      <span style="margin-right: 8px;">Large:</span>
      <x-space size="large">
        <x-button>Button</x-button>
        <x-button>Button</x-button>
      </x-space>
    </div>
  </div>
</div>

```vue
<template>
  <x-space size="small">
    <x-button>Small</x-button>
    <x-button>Small</x-button>
  </x-space>

  <x-space size="large">
    <x-button>Large</x-button>
    <x-button>Large</x-button>
  </x-space>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | 间距大小 | `'small' \| 'default' \| 'large' \| number` | `'default'` |
| wrap | 是否换行 | `boolean` | `true` |
| align | 对齐方式 | `'start' \| 'center' \| 'end'` | `'center'` |