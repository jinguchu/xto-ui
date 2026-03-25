# Checkbox 多选框

多选框组件，用于一组备选项中进行多选。

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(['1'])
const checked4 = ref(['1', '2'])
const checked5 = ref([])
const checked6 = ref(['A'])
</script>

## 基础用法

单独使用可以表示两种状态之间的切换。

<div class="demo-block">
  <div class="demo-preview">
    <x-checkbox v-model="checked1">选项A</x-checkbox>
    <x-checkbox v-model="checked2">选项B</x-checkbox>
    <span style="margin-left: 16px;">选中值: {{ checked1 }}, {{ checked2 }}</span>
  </div>
</div>

```vue
<template>
  <x-checkbox v-model="checked">选项</x-checkbox>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```

## 禁用状态

多选框不可用状态。

<div class="demo-block">
  <div class="demo-preview">
    <x-checkbox v-model="checked1" disabled>禁用选中</x-checkbox>
    <x-checkbox v-model="checked2" disabled>禁用未选中</x-checkbox>
  </div>
</div>

```vue
<template>
  <x-checkbox v-model="checked" disabled>禁用状态</x-checkbox>
</template>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过 `CheckboxGroup` 组件包裹。

<div class="demo-block">
  <div class="demo-preview">
    <x-checkbox-group v-model="checked3">
      <x-checkbox value="1">选项A</x-checkbox>
      <x-checkbox value="2">选项B</x-checkbox>
      <x-checkbox value="3">选项C</x-checkbox>
    </x-checkbox-group>
    <span style="margin-left: 16px;">选中值: {{ checked3 }}</span>
  </div>
</div>

```vue
<template>
  <x-checkbox-group v-model="checked">
    <x-checkbox value="1">选项A</x-checkbox>
    <x-checkbox value="2">选项B</x-checkbox>
    <x-checkbox value="3">选项C</x-checkbox>
  </x-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(['1'])
</script>
```

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于全选。

<div class="demo-block">
  <div class="demo-preview">
    <x-checkbox
      :model-value="checked4.length > 0"
      :indeterminate="checked4.length > 0 && checked4.length < 3"
      @change="checked4 = checked4.length === 3 ? [] : ['1', '2', '3']"
    >
      全选
    </x-checkbox>
    <x-checkbox-group v-model="checked4" style="margin-top: 12px;">
      <x-checkbox value="1">选项A</x-checkbox>
      <x-checkbox value="2">选项B</x-checkbox>
      <x-checkbox value="3">选项C</x-checkbox>
    </x-checkbox-group>
  </div>
</div>

```vue
<template>
  <x-checkbox
    :model-value="checked.length > 0"
    :indeterminate="checked.length > 0 && checked.length < 3"
    @change="handleCheckAll"
  >
    全选
  </x-checkbox>
  <x-checkbox-group v-model="checked">
    <x-checkbox value="1">选项A</x-checkbox>
    <x-checkbox value="2">选项B</x-checkbox>
    <x-checkbox value="3">选项C</x-checkbox>
  </x-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref([])

const handleCheckAll = () => {
  checked.value = checked.value.length === 3 ? [] : ['1', '2', '3']
}
</script>
```

## 可选项目数量限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

<div class="demo-block">
  <div class="demo-preview">
    <x-checkbox-group v-model="checked5" :min="1" :max="2">
      <x-checkbox value="1">选项A</x-checkbox>
      <x-checkbox value="2">选项B</x-checkbox>
      <x-checkbox value="3">选项C</x-checkbox>
      <x-checkbox value="4">选项D</x-checkbox>
    </x-checkbox-group>
    <span style="margin-left: 16px;">选中值: {{ checked5 }}（至少选1个，最多选2个）</span>
  </div>
</div>

```vue
<template>
  <x-checkbox-group v-model="checked" :min="1" :max="2">
    <x-checkbox value="1">选项A</x-checkbox>
    <x-checkbox value="2">选项B</x-checkbox>
    <x-checkbox value="3">选项C</x-checkbox>
    <x-checkbox value="4">选项D</x-checkbox>
  </x-checkbox-group>
</template>
```

## 多选框组禁用

<div class="demo-block">
  <div class="demo-preview">
    <x-checkbox-group v-model="checked6" disabled>
      <x-checkbox value="A">选项A</x-checkbox>
      <x-checkbox value="B">选项B</x-checkbox>
      <x-checkbox value="C">选项C</x-checkbox>
    </x-checkbox-group>
  </div>
</div>

```vue
<template>
  <x-checkbox-group v-model="checked" disabled>
    <x-checkbox value="A">选项A</x-checkbox>
    <x-checkbox value="B">选项B</x-checkbox>
    <x-checkbox value="C">选项C</x-checkbox>
  </x-checkbox-group>
</template>
```

## API

### Checkbox Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `boolean \| string \| number \| boolean[] \| string[] \| number[]` | `false` |
| value | 多选框的值 | `string \| number \| boolean` | — |
| label | 多选框的标签文本（也可使用默认插槽） | `string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| name | 原生 name 属性 | `string` | — |
| indeterminate | 是否为不确定状态 | `boolean` | `false` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 绑定值变化时触发 | `(value: boolean \| string \| number \| boolean[] \| string[] \| number[])` |
| change | 绑定值变化时触发 | `(value: boolean \| string \| number \| boolean[] \| string[] \| number[])` |

### CheckboxGroup Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `(string \| number)[]` | `[]` |
| disabled | 是否禁用所有子选项 | `boolean` | `false` |
| min | 可被勾选的最小数量 | `number` | `0` |
| max | 可被勾选的最大数量 | `number` | `0` |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 绑定值变化时触发 | `(value: (string \| number)[])` |
| change | 绑定值变化时触发 | `(value: (string \| number)[])` |