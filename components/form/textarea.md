# Textarea 文本域

用于输入多行文本。

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
</script>

## 基础用法

通过鼠标或键盘输入内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-textarea v-model="value1" placeholder="请输入内容" style="width: 400px" />
  </div>
</div>

```vue
<template>
  <x-textarea v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-textarea v-model="value2" disabled placeholder="禁用状态" style="width: 400px" />
  </div>
</div>

```vue
<template>
  <x-textarea v-model="value" disabled placeholder="禁用状态" />
</template>
```

## 控制行数

通过 `rows` 属性控制默认显示的行数。

<div class="demo-block">
  <div class="demo-preview">
    <x-textarea v-model="value3" :rows="4" placeholder="显示4行" style="width: 400px" />
  </div>
</div>

```vue
<template>
  <x-textarea v-model="value" :rows="4" placeholder="显示4行" />
</template>
```

## 限制字符数量

通过 `maxlength` 属性限制最大输入字符数，`show-word-limit` 显示字数统计。

<div class="demo-block">
  <div class="demo-preview">
    <x-textarea
      v-model="value4"
      :maxlength="100"
      show-word-limit
      placeholder="最多输入100个字符"
      style="width: 400px"
    />
  </div>
</div>

```vue
<template>
  <x-textarea
    v-model="value"
    :maxlength="100"
    show-word-limit
    placeholder="最多输入100个字符"
  />
</template>
```

## 自适应高度

通过设置 `autosize` 属性使文本域高度自适应。

<div class="demo-block">
  <div class="demo-preview">
    <p>自适应高度（无限制）：</p>
    <x-textarea v-model="value5" autosize placeholder="自适应高度" style="width: 400px; margin-bottom: 16px" />
    <p>自适应高度（限制最小2行，最大4行）：</p>
    <x-textarea
      v-model="value5"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="自适应高度，最小2行，最大4行"
      style="width: 400px"
    />
  </div>
</div>

```vue
<template>
  <!-- 自适应高度 -->
  <x-textarea v-model="value" autosize placeholder="自适应高度" />

  <!-- 限制行数范围 -->
  <x-textarea
    v-model="value"
    :autosize="{ minRows: 2, maxRows: 4 }"
    placeholder="自适应高度，最小2行，最大4行"
  />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `string` | `''` |
| placeholder | 占位文本 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| maxlength | 最大输入长度 | `number` | — |
| minlength | 最小输入长度 | `number` | — |
| rows | 文本域默认行数 | `number` | `2` |
| autosize | 自适应内容高度，可传入对象设置最小和最大行数 | `boolean \| { minRows?: number; maxRows?: number }` | `false` |
| showWordLimit | 是否显示字数统计 | `boolean` | `false` |
| resize | 控制是否能被用户缩放 | `'none' \| 'both' \| 'horizontal' \| 'vertical'` | `'vertical'` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值改变时触发 | `(value: string)` |
| input | 输入时触发 | `(value: string)` |
| change | 值改变时触发 | `(value: string)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |

### Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| focus | 使文本域获取焦点 | — |
| blur | 使文本域失去焦点 | — |