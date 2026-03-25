# TimePicker 时间选择器

用于选择或输入时间。

<script setup>
import { ref } from 'vue'

const timeValue = ref('')
const timeRangeValue = ref(['', ''])

// 禁用小时
const disabledHours = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
}

// 禁用分钟
const disabledMinutes = (hour) => {
  if (hour === 12) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
  }
  return []
}
</script>

## 基础用法

通过点击输入框，在弹出的时间面板中选择时间。

<div class="demo-block">
  <div class="demo-preview">
    <x-time-picker v-model="timeValue" placeholder="请选择时间" style="width: 180px" />
    <span style="margin-left: 12px;">选择的时间: {{ timeValue }}</span>
  </div>
</div>

```vue
<template>
  <x-time-picker v-model="value" placeholder="请选择时间" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 时间格式

使用 `format` 指定输入框的展示格式。

<div class="demo-block">
  <div class="demo-preview">
    <x-time-picker v-model="timeValue" format="HH:mm" placeholder="选择时分" style="width: 180px" />
  </div>
</div>

```vue
<template>
  <x-time-picker v-model="value" format="HH:mm" placeholder="选择时分" />
</script>
```

## 时间范围选择

设置 `type` 为 `timerange` 可以选择时间范围。

<div class="demo-block">
  <div class="demo-preview">
    <x-time-picker
      v-model="timeRangeValue"
      type="timerange"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
    />
  </div>
</div>

```vue
<template>
  <x-time-picker
    v-model="value"
    type="timerange"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
  />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(['', ''])
</script>
```

## 禁用时间

通过 `disabledHours`、`disabledMinutes`、`disabledSeconds` 可以禁用指定的时间。

<div class="demo-block">
  <div class="demo-preview">
    <x-time-picker
      v-model="timeValue"
      placeholder="禁用上午时间"
      :disabled-hours="disabledHours"
      style="width: 180px"
    />
  </div>
</div>

```vue
<template>
  <x-time-picker v-model="value" placeholder="禁用上午时间" :disabled-hours="disabledHours" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')

// 禁用 0-11 点
const disabledHours = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
}
</script>
```

## 时间步长

使用 `hour-step`、`minute-step`、`second-step` 设置时间间隔。

<div class="demo-block">
  <div class="demo-preview">
    <x-time-picker
      v-model="timeValue"
      placeholder="整点选择"
      :minute-step="30"
      :second-step="0"
      style="width: 180px"
    />
  </div>
</div>

```vue
<template>
  <x-time-picker v-model="value" placeholder="整点选择" :minute-step="30" :second-step="0" />
</template>
```

## 可清空

使用 `clearable` 属性即可得到一个可清空的时间选择器。

<div class="demo-block">
  <div class="demo-preview">
    <x-time-picker v-model="timeValue" clearable placeholder="可清空" style="width: 180px" />
  </div>
</div>

```vue
<template>
  <x-time-picker v-model="value" clearable placeholder="可清空" />
</template>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-time-picker disabled placeholder="禁用状态" style="width: 180px" />
  </div>
</div>

```vue
<template>
  <x-time-picker disabled placeholder="禁用状态" />
</template>
```

## 不同尺寸

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row" style="flex-direction: column; align-items: flex-start; gap: 12px;">
      <x-time-picker size="large" placeholder="大型" style="width: 180px" />
      <x-time-picker placeholder="默认" style="width: 180px" />
      <x-time-picker size="small" placeholder="小型" style="width: 180px" />
    </div>
  </div>
</div>

```vue
<template>
  <x-time-picker size="large" placeholder="大型" />
  <x-time-picker placeholder="默认" />
  <x-time-picker size="small" placeholder="小型" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `Date \| string \| number \| [Date \| string \| number, Date \| string \| number]` | — |
| type | 选择类型 | `'time' \| 'timerange'` | `'time'` |
| placeholder | 占位文本 | `string` | `'请选择时间'` |
| startPlaceholder | 开始时间占位 | `string` | `'开始时间'` |
| endPlaceholder | 结束时间占位 | `string` | `'结束时间'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| size | 输入框尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| format | 显示格式 | `string` | `'HH:mm:ss'` |
| valueFormat | 绑定值格式 | `string` | — |
| disabledHours | 禁用小时 | `() => number[]` | — |
| disabledMinutes | 禁用分钟 | `(hour: number) => number[]` | — |
| disabledSeconds | 禁用秒 | `(hour: number, minute: number) => number[]` | — |
| hourStep | 小时步长 | `number` | `1` |
| minuteStep | 分钟步长 | `number` | `1` |
| secondStep | 秒步长 | `number` | `1` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值改变时触发 | `(value: Date \| string \| [Date \| string, Date \| string] \| null)` |
| change | 值改变时触发 | `(value: Date \| string \| [Date \| string, Date \| string] \| null)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| clear | 清空时触发 | — |

### 格式说明

| 格式 | 说明 | 示例 |
|-----|------|------|
| HH | 小时（24小时制，补零） | 00-23 |
| H | 小时（24小时制） | 0-23 |
| mm | 分钟（补零） | 00-59 |
| m | 分钟 | 0-59 |
| ss | 秒（补零） | 00-59 |
| s | 秒 | 0-59 |