# Switch 开关

表示两种状态之间的切换。

<script setup>
import { ref } from 'vue'
const switchValue = ref(false)
const switchValue2 = ref(false)
const switchValue3 = ref(true)
const switchValue4 = ref(false)
const switchValue5 = ref(false)
const switchValue6 = ref(false)
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-switch v-model="switchValue" />
    <span style="margin-left: 12px;">当前值: {{ switchValue }}</span>
  </div>
</div>

```vue
<template>
  <x-switch v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-switch v-model="switchValue2" disabled />
      <x-switch v-model="switchValue3" disabled />
    </div>
  </div>
</div>

```vue
<template>
  <x-switch v-model="value" disabled />
</template>
```

## 自定义颜色

<div class="demo-block">
  <div class="demo-preview">
    <x-switch v-model="switchValue4" active-color="#13ce66" inactive-color="#ff4949" />
  </div>
</div>

```vue
<template>
  <x-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `boolean \| number \| string` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| width | 宽度 | `number \| string` | `40` |
| activeColor | 打开时的背景色 | `string` | `'#409eff'` |
| inactiveColor | 关闭时的背景色 | `string` | `'#dcdfe6'` |
| activeValue | 打开时的值 | `boolean \| number \| string` | `true` |
| inactiveValue | 关闭时的值 | `boolean \| number \| string` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值改变时触发 | `(value: boolean \| number \| string)` |
| change | 值改变时触发 | `(value: boolean \| number \| string)` |