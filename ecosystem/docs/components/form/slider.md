# Slider 滑块

通过拖动滑块在一个固定区间内进行选择。

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(50)
const value3 = ref(30)
const value4 = ref(30)
const value5 = ref(0)
const value6 = ref(0)
const value7 = ref(36)
const value8 = ref(0)

const formatTooltip = (val) => {
  return val + '%'
}

const marks = {
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#f56c6c'
    },
    label: '50°C'
  },
  100: '100°C'
}
</script>

## 基础用法

在拖动滑块时，显示当前值。

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value1" />
    <div style="margin-top: 20px;">当前值: {{ value1 }}</div>
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>
```

## 自定义初始值

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value2" />
    <div style="margin-top: 20px;">当前值: {{ value2 }}</div>
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(50)
</script>
```

## 隐藏 Tooltip

设置 `show-tooltip` 为 `false` 隐藏 Tooltip。

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value3" :show-tooltip="false" />
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" :show-tooltip="false" />
</template>
```

## 格式化 Tooltip

使用 `format-tooltip` 格式化 Tooltip 内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value4" :format-tooltip="formatTooltip" />
    <div style="margin-top: 20px;">当前值: {{ value4 }}%</div>
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" :format-tooltip="formatTooltip" />
</template>

<script setup>
const formatTooltip = (val) => {
  return val + '%'
}
</script>
```

## 禁用状态

设置 `disabled` 属性禁用滑块。

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value5" disabled />
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" disabled />
</template>
```

## 离散值

设置 `step` 属性设置步长，使用 `show-stops` 显示间断点。

### 不显示间断点

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value6" :step="10" />
    <div style="margin-top: 20px;">当前值: {{ value6 }}（步长: 10）</div>
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" :step="10" />
</template>
```

### 显示间断点

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value7" :step="10" show-stops />
    <div style="margin-top: 20px;">当前值: {{ value7 }}</div>
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" :step="10" show-stops />
</template>
```

## 竖向模式

设置 `vertical` 属性启用竖向模式，使用 `height` 设置高度。

<div class="demo-block">
  <div class="demo-preview" style="height: 280px; display: flex; align-items: center;">
    <x-slider v-model="value8" vertical height="200px" />
    <span style="margin-left: 20px;">当前值: {{ value8 }}</span>
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" vertical height="200px" />
</template>
```

## 带有标记

使用 `marks` 属性在滑块上显示标记。

<div class="demo-block">
  <div class="demo-preview">
    <x-slider v-model="value8" :marks="marks" />
  </div>
</div>

```vue
<template>
  <x-slider v-model="value" :marks="marks" />
</template>

<script setup>
const marks = {
  0: '0°C',
  37: '37°C',
  50: {
    style: {
      color: '#f56c6c'
    },
    label: '50°C'
  },
  100: '100°C'
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `number` | `0` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长 | `number` | `1` |
| disabled | 是否禁用 | `boolean` | `false` |
| showTooltip | 是否显示 Tooltip | `boolean` | `true` |
| formatTooltip | 格式化 Tooltip 内容 | `(value: number) => string \| number` | — |
| showStops | 是否显示间断点 | `boolean` | `false` |
| vertical | 是否竖向模式 | `boolean` | `false` |
| height | 滑块高度（竖向模式时有效） | `string \| number` | `'200px'` |
| marks | 标记 | `Record<number, string \| { style?: object; label?: string }>` | — |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值变化时触发 | `(value: number)` |
| change | 值改变时触发（鼠标释放时） | `(value: number)` |
| input | 拖拽时触发 | `(value: number)` |