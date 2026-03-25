# DatePicker 日期选择器

用于选择或输入日期。

<script setup>
import { ref } from 'vue'

const dateValue = ref('')
const dateRangeValue = ref(['', ''])
const disabledDateValue = ref('')

// 禁用今天之后的日期
const disabledDate = (date) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date > today
}
</script>

## 基础用法

通过点击输入框，在弹出的日期面板中选择日期。

<div class="demo-block">
  <div class="demo-preview">
    <x-date-picker v-model="dateValue" placeholder="请选择日期" style="width: 220px" />
    <span style="margin-left: 12px;">选择的日期: {{ dateValue }}</span>
  </div>
</div>

```vue
<template>
  <x-date-picker v-model="value" placeholder="请选择日期" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 日期格式

使用 `format` 指定输入框的展示格式，使用 `value-format` 指定绑定值的格式。

<div class="demo-block">
  <div class="demo-preview">
    <x-date-picker v-model="dateValue" format="YYYY年MM月DD日" placeholder="请选择日期" style="width: 220px" />
  </div>
</div>

```vue
<template>
  <x-date-picker v-model="value" format="YYYY年MM月DD日" placeholder="请选择日期" />
</template>
```

## 日期范围选择

设置 `type` 为 `daterange` 可以选择日期范围。

<div class="demo-block">
  <div class="demo-preview">
    <x-date-picker
      v-model="dateRangeValue"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    />
  </div>
</div>

```vue
<template>
  <x-date-picker
    v-model="value"
    type="daterange"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(['', ''])
</script>
```

## 禁用日期

通过 `disabledDate` 函数可以禁用指定的日期。

<div class="demo-block">
  <div class="demo-preview">
    <x-date-picker v-model="disabledDateValue" placeholder="只能选择今天及之前的日期" :disabled-date="disabledDate" style="width: 220px" />
  </div>
</div>

```vue
<template>
  <x-date-picker v-model="value" placeholder="只能选择今天及之前的日期" :disabled-date="disabledDate" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')

// 禁用今天之后的日期
const disabledDate = (date) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date > today
}
</script>
```

## 可清空

使用 `clearable` 属性即可得到一个可清空的日期选择器。

<div class="demo-block">
  <div class="demo-preview">
    <x-date-picker v-model="dateValue" clearable placeholder="可清空" style="width: 220px" />
  </div>
</div>

```vue
<template>
  <x-date-picker v-model="value" clearable placeholder="可清空" />
</template>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-date-picker disabled placeholder="禁用状态" style="width: 220px" />
  </div>
</div>

```vue
<template>
  <x-date-picker disabled placeholder="禁用状态" />
</template>
```

## 不同尺寸

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row" style="flex-direction: column; align-items: flex-start; gap: 12px;">
      <x-date-picker size="large" placeholder="大型" style="width: 220px" />
      <x-date-picker placeholder="默认" style="width: 220px" />
      <x-date-picker size="small" placeholder="小型" style="width: 220px" />
    </div>
  </div>
</div>

```vue
<template>
  <x-date-picker size="large" placeholder="大型" />
  <x-date-picker placeholder="默认" />
  <x-date-picker size="small" placeholder="小型" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `Date \| string \| number \| [Date \| string \| number, Date \| string \| number]` | — |
| type | 选择类型 | `'date' \| 'daterange' \| 'month' \| 'year'` | `'date'` |
| placeholder | 占位文本 | `string` | `'请选择日期'` |
| startPlaceholder | 开始日期占位 | `string` | `'开始日期'` |
| endPlaceholder | 结束日期占位 | `string` | `'结束日期'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| size | 输入框尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| format | 显示格式 | `string` | `'YYYY-MM-DD'` |
| valueFormat | 绑定值格式 | `string` | — |
| disabledDate | 禁用日期函数 | `(date: Date) => boolean` | — |
| minDate | 最小可选日期 | `Date \| string` | — |
| maxDate | 最大可选日期 | `Date \| string` | — |

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
| YYYY | 年份 | 2024 |
| YY | 年份（两位） | 24 |
| MM | 月份（补零） | 01-12 |
| M | 月份 | 1-12 |
| DD | 日期（补零） | 01-31 |
| D | 日期 | 1-31 |