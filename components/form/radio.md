# Radio 单选框

在一组备选项中进行单选。

<script setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
const radio5 = ref('1')
const radio6 = ref('1')
</script>

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<div class="demo-block">
  <div class="demo-preview">
    <x-radio v-model="radio1" value="1">选项A</x-radio>
    <x-radio v-model="radio1" value="2">选项B</x-radio>
    <span style="margin-left: 16px;">选中值: {{ radio1 }}</span>
  </div>
</div>

```vue
<template>
  <x-radio v-model="value" value="1">选项A</x-radio>
  <x-radio v-model="value" value="2">选项B</x-radio>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('1')
</script>
```

## 禁用状态

单选框不可用状态。

<div class="demo-block">
  <div class="demo-preview">
    <x-radio v-model="radio2" value="1" disabled>禁用选项</x-radio>
    <x-radio v-model="radio2" value="2" disabled>禁用选项</x-radio>
  </div>
</div>

```vue
<template>
  <x-radio v-model="value" value="1" disabled>禁用选项</x-radio>
  <x-radio v-model="value" value="2" disabled>禁用选项</x-radio>
</template>
```

## 单选框组

适用于在多个互斥的选项中选中一个的场景。

<div class="demo-block">
  <div class="demo-preview">
    <x-radio-group v-model="radio3">
      <x-radio value="1">选项A</x-radio>
      <x-radio value="2">选项B</x-radio>
      <x-radio value="3">选项C</x-radio>
    </x-radio-group>
    <span style="margin-left: 16px;">选中值: {{ radio3 }}</span>
  </div>
</div>

```vue
<template>
  <x-radio-group v-model="value">
    <x-radio value="1">选项A</x-radio>
    <x-radio value="2">选项B</x-radio>
    <x-radio value="3">选项C</x-radio>
  </x-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('1')
</script>
```

## 按钮样式

按钮样式的单选组合。

<div class="demo-block">
  <div class="demo-preview">
    <x-radio-group v-model="radio4">
      <x-radio-button value="1">选项A</x-radio-button>
      <x-radio-button value="2">选项B</x-radio-button>
      <x-radio-button value="3">选项C</x-radio-button>
    </x-radio-group>
  </div>
</div>

```vue
<template>
  <x-radio-group v-model="value">
    <x-radio-button value="1">选项A</x-radio-button>
    <x-radio-button value="2">选项B</x-radio-button>
    <x-radio-button value="3">选项C</x-radio-button>
  </x-radio-group>
</template>
```

## 按钮样式 - 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-radio-group v-model="radio5">
      <x-radio-button value="1">选项A</x-radio-button>
      <x-radio-button value="2" disabled>选项B</x-radio-button>
      <x-radio-button value="3">选项C</x-radio-button>
    </x-radio-group>
  </div>
</div>

```vue
<template>
  <x-radio-group v-model="value">
    <x-radio-button value="1">选项A</x-radio-button>
    <x-radio-button value="2" disabled>选项B</x-radio-button>
    <x-radio-button value="3">选项C</x-radio-button>
  </x-radio-group>
</template>
```

## 整体禁用

<div class="demo-block">
  <div class="demo-preview">
    <x-radio-group v-model="radio6" disabled>
      <x-radio-button value="1">选项A</x-radio-button>
      <x-radio-button value="2">选项B</x-radio-button>
      <x-radio-button value="3">选项C</x-radio-button>
    </x-radio-group>
  </div>
</div>

```vue
<template>
  <x-radio-group v-model="value" disabled>
    <x-radio-button value="1">选项A</x-radio-button>
    <x-radio-button value="2">选项B</x-radio-button>
    <x-radio-button value="3">选项C</x-radio-button>
  </x-radio-group>
</template>
```

## API

### Radio Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `string \| number \| boolean` | — |
| value | 单选框的值 | `string \| number \| boolean` | — |
| label | 单选框的标签文本（也可使用默认插槽） | `string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| name | 原生 name 属性 | `string` | — |

### Radio Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 绑定值变化时触发 | `(value: string \| number \| boolean)` |
| change | 绑定值变化时触发 | `(value: string \| number \| boolean)` |

### RadioGroup Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `string \| number \| boolean` | — |
| disabled | 是否禁用所有子选项 | `boolean` | `false` |
| name | 原生 name 属性 | `string` | — |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 绑定值变化时触发 | `(value: string \| number \| boolean)` |
| change | 绑定值变化时触发 | `(value: string \| number \| boolean)` |

### RadioButton Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| value | 单选框的值 | `string \| number \| boolean` | — |
| label | 单选框的标签文本（也可使用默认插槽） | `string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| name | 原生 name 属性 | `string` | — |