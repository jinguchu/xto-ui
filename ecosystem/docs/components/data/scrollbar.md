# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

```vue
<template>
  <x-scrollbar height="200px">
    <div style="height: 400px; padding: 20px;">
      <p v-for="i in 20" :key="i">第 {{ i }} 行内容</p>
    </div>
  </x-scrollbar>
</template>

<script setup>
import { Scrollbar } from '@xto/data'
</script>
```

## 横向滚动

```vue
<template>
  <x-scrollbar>
    <div style="width: 1000px; padding: 20px;">
      <span v-for="i in 50" :key="i" style="margin-right: 10px;">项目 {{ i }}</span>
    </div>
  </x-scrollbar>
</template>
```

## 最大高度

通过设置 `max-height` 属性设置滚动条最大高度。

```vue
<template>
  <x-scrollbar max-height="300px">
    <div style="padding: 20px;">
      <p v-for="i in 50" :key="i">第 {{ i }} 行内容</p>
    </div>
  </x-scrollbar>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| height | 滚动条高度 | `string \| number` | — |
| maxHeight | 滚动条最大高度 | `string \| number` | — |
| native | 是否使用原生滚动条 | `boolean` | `false` |
| wrapStyle | 包裹容器的自定义样式 | `string` | — |
| wrapClass | 包裹容器的自定义类名 | `string` | — |
| viewStyle | 视图的自定义样式 | `string` | — |
| viewClass | 视图的自定义类名 | `string` | — |
| noresize | 不响应容器尺寸变化 | `boolean` | `false` |
| always | 滚动条是否一直显示 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| scroll | 滚动时触发 | `(event: Event)` |

### Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| scrollTo | 设置滚动条位置 | `options: ScrollToOptions` |
| setScrollTop | 设置滚动条到顶部距离 | `value: number` |
| setScrollLeft | 设置滚动条到左侧距离 | `value: number` |
| update | 手动更新滚动条状态 | — |