# InputNumber 数字输入框

仅允许输入标准的数字值，可定义范围，允许设置步长，支持设置精度。

<script setup>
import { ref } from 'vue'
const num1 = ref(1)
const num2 = ref(5)
const num3 = ref(10)
const num4 = ref(1)
const num5 = ref(1)
const num6 = ref(1.23)
const num7 = ref(2)
</script>

## 基础用法

输入框只能输入数字，支持键盘上下键增减。

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num1" style="width: 150px" />
    <span style="margin-left: 16px;">当前值: {{ num1 }}</span>
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(1)
</script>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num2" disabled style="width: 150px" />
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" disabled />
</template>
```

## 步数

设置 `step` 属性控制每次增减的数值。

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num3" :step="2" style="width: 150px" />
    <span style="margin-left: 16px;">步长: 2</span>
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" :step="2" />
</template>
```

## 严格步数

使用 `step-strictly` 属性后，输入值只能是步数的倍数。

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num3" :step="2" step-strictly style="width: 150px" />
    <span style="margin-left: 16px;">只能是 2 的倍数</span>
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" :step="2" step-strictly />
</template>
```

## 精度

设置 `precision` 属性控制小数精度。

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num6" :precision="2" :step="0.1" style="width: 150px" />
    <span style="margin-left: 16px;">精度: 2 位小数</span>
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" :precision="2" :step="0.1" />
</template>
```

## 限制范围

设置 `min` 和 `max` 属性限制数值范围。

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num4" :min="1" :max="10" style="width: 150px" />
    <span style="margin-left: 16px;">范围: 1-10</span>
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" :min="1" :max="10" />
</template>
```

## 不同尺寸

提供三种尺寸：`large`、`default`、`small`。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row" style="flex-direction: column; align-items: flex-start; gap: 12px;">
      <x-input-number v-model="num5" size="large" style="width: 150px" />
      <x-input-number v-model="num5" style="width: 150px" />
      <x-input-number v-model="num5" size="small" style="width: 150px" />
    </div>
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" size="large" />
  <x-input-number v-model="value" />
  <x-input-number v-model="value" size="small" />
</template>
```

## 按钮位置

设置 `controls-position="right"` 使增减按钮垂直排列在右侧。

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num7" controls-position="right" style="width: 100px" />
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" controls-position="right" />
</template>
```

## 无按钮

设置 `controls="false"` 隐藏增减按钮。

<div class="demo-block">
  <div class="demo-preview">
    <x-input-number v-model="num5" :controls="false" placeholder="请输入数字" style="width: 150px" />
  </div>
</div>

```vue
<template>
  <x-input-number v-model="value" :controls="false" placeholder="请输入数字" />
</template>
```

## 键盘操作

- `↑` / `↓`：增加 / 减少
- `Enter`：确认输入

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `number` | — |
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` | `Infinity` |
| step | 步长 | `number` | `1` |
| stepStrictly | 是否只能输入步数的倍数 | `boolean` | `false` |
| precision | 数值精度（小数位数） | `number` | — |
| size | 输入框尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| controls | 是否显示增减按钮 | `boolean` | `true` |
| controlsPosition | 按钮位置 | `'' \| 'right'` | `''` |
| placeholder | 占位文本 | `string` | — |
| valueOnClear | 清空时的默认值 | `number \| null` | `null` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值改变时触发 | `(value: number \| undefined)` |
| change | 值改变且失焦后触发 | `(currentValue, oldValue)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |

### Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| focus | 使输入框获取焦点 | — |
| blur | 使输入框失去焦点 | — |
| clear | 清空输入值 | — |
| increase | 增加值 | — |
| decrease | 减少值 | — |