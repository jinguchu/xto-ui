# Input 输入框

通过鼠标或键盘输入内容。

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
const passwordValue = ref('')
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-input v-model="inputValue" placeholder="请输入内容" style="width: 200px" />
    <span style="margin-left: 12px;">输入值: {{ inputValue }}</span>
  </div>
</div>

```vue
<template>
  <x-input v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-input disabled placeholder="禁用状态" style="width: 200px" />
  </div>
</div>

```vue
<template>
  <x-input v-model="value" disabled placeholder="禁用状态" />
</template>
```

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框。

<div class="demo-block">
  <div class="demo-preview">
    <x-input v-model="inputValue" clearable placeholder="可清空" style="width: 200px" />
  </div>
</div>

```vue
<template>
  <x-input v-model="value" clearable placeholder="可清空" />
</template>
```

## 密码输入框

使用 `show-password` 属性即可得到一个可切换显示密码的输入框。

<div class="demo-block">
  <div class="demo-preview">
    <x-input v-model="passwordValue" type="password" show-password placeholder="请输入密码" style="width: 200px" />
  </div>
</div>

```vue
<template>
  <x-input v-model="password" type="password" show-password placeholder="请输入密码" />
</template>
```

## 不同尺寸

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row" style="flex-direction: column; align-items: flex-start;">
      <x-input size="large" placeholder="大型输入框" style="width: 200px" />
      <x-input placeholder="默认输入框" style="width: 200px" />
      <x-input size="small" placeholder="小型输入框" style="width: 200px" />
    </div>
  </div>
</div>

```vue
<template>
  <x-input size="large" placeholder="大型输入框" />
  <x-input placeholder="默认输入框" />
  <x-input size="small" placeholder="小型输入框" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `string \| number` | — |
| type | 类型 | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url'` | `'text'` |
| placeholder | 输入框占位文本 | `string` | — |
| size | 输入框尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| maxlength | 最大输入长度 | `number` | — |
| clearable | 是否可清空 | `boolean` | `false` |
| showPassword | 是否显示切换密码图标 | `boolean` | `false` |
| showWordLimit | 是否显示字数统计 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 输入值改变时触发 | `(value: string)` |
| input | 输入时触发 | `(value: string)` |
| change | 值改变时触发 | `(value: string)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| clear | 清空时触发 | — |