# Popconfirm 气泡确认框

点击元素，弹出气泡确认框。

<script setup>
import { ref } from 'vue'

const result = ref('')

const handleConfirm = () => {
  result.value = '你点击了确定按钮'
}

const handleCancel = () => {
  result.value = '你点击了取消按钮'
}

const handleDelete = () => {
  result.value = '删除成功！'
}
</script>

## 基础用法

Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。

<div class="demo-block">
  <div class="demo-preview">
    <x-popconfirm title="确定删除吗？" @confirm="handleConfirm" @cancel="handleCancel">
      <x-button>删除</x-button>
    </x-popconfirm>
    <span style="margin-left: 10px;">{{ result }}</span>
  </div>
</div>

```vue
<template>
  <x-popconfirm title="确定删除吗？" @confirm="handleConfirm" @cancel="handleCancel">
    <x-button>删除</x-button>
  </x-popconfirm>
</template>

<script setup>
import { ref } from 'vue'

const result = ref('')

const handleConfirm = () => {
  result.value = '你点击了确定按钮'
}

const handleCancel = () => {
  result.value = '你点击了取消按钮'
}
</script>
```

## 自定义按钮

可以自定义按钮文字、类型等。

<div class="demo-block">
  <div class="demo-preview">
    <x-popconfirm
      title="这是一段内容确定删除吗？"
      confirm-button-text="好的"
      cancel-button-text="不用了"
      confirm-button-type="danger"
      @confirm="handleDelete"
    >
      <x-button type="danger">删除</x-button>
    </x-popconfirm>
  </div>
</div>

```vue
<template>
  <x-popconfirm
    title="这是一段内容确定删除吗？"
    confirm-button-text="好的"
    cancel-button-text="不用了"
    confirm-button-type="danger"
    @confirm="handleDelete"
  >
    <x-button type="danger">删除</x-button>
  </x-popconfirm>
</template>
```

## 自定义弹出位置

支持 12 个弹出位置。

<div class="demo-block">
  <div class="demo-preview" style="display: flex; gap: 10px; flex-wrap: wrap;">
    <x-popconfirm title="上" placement="top">
      <x-button>上</x-button>
    </x-popconfirm>
    <x-popconfirm title="下" placement="bottom">
      <x-button>下</x-button>
    </x-popconfirm>
    <x-popconfirm title="左" placement="left">
      <x-button>左</x-button>
    </x-popconfirm>
    <x-popconfirm title="右" placement="right">
      <x-button>右</x-button>
    </x-popconfirm>
  </div>
</div>

```vue
<template>
  <x-popconfirm title="上" placement="top">
    <x-button>上</x-button>
  </x-popconfirm>
  <x-popconfirm title="下" placement="bottom">
    <x-button>下</x-button>
  </x-popconfirm>
  <x-popconfirm title="左" placement="left">
    <x-button>左</x-button>
  </x-popconfirm>
  <x-popconfirm title="右" placement="right">
    <x-button>右</x-button>
  </x-popconfirm>
</template>
```

## 隐藏图标

设置 `hide-icon` 可以隐藏图标。

<div class="demo-block">
  <div class="demo-preview">
    <x-popconfirm title="确定删除吗？" :hide-icon="true">
      <x-button>隐藏图标</x-button>
    </x-popconfirm>
  </div>
</div>

```vue
<template>
  <x-popconfirm title="确定删除吗？" :hide-icon="true">
    <x-button>隐藏图标</x-button>
  </x-popconfirm>
</template>
```

## 隐藏按钮

可以单独隐藏确认或取消按钮。

<div class="demo-block">
  <div class="demo-preview" style="display: flex; gap: 10px;">
    <x-popconfirm title="只有确定按钮" :hide-cancel-button="true">
      <x-button>隐藏取消按钮</x-button>
    </x-popconfirm>
    <x-popconfirm title="只有取消按钮" :hide-confirm-button="true">
      <x-button>隐藏确定按钮</x-button>
    </x-popconfirm>
  </div>
</div>

```vue
<template>
  <x-popconfirm title="只有确定按钮" :hide-cancel-button="true">
    <x-button>隐藏取消按钮</x-button>
  </x-popconfirm>
  <x-popconfirm title="只有取消按钮" :hide-confirm-button="true">
    <x-button>隐藏确定按钮</x-button>
  </x-popconfirm>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题 | `string` | `''` |
| confirm-button-text | 确认按钮文字 | `string` | `'确定'` |
| cancel-button-text | 取消按钮文字 | `string` | `'取消'` |
| confirm-button-type | 确认按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | `'primary'` |
| cancel-button-type | 取消按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | `'default'` |
| icon | 图标 | `string` | `''` |
| icon-color | 图标颜色 | `string` | `'#faad14'` |
| hide-icon | 是否隐藏图标 | `boolean` | `false` |
| hide-cancel-button | 是否隐藏取消按钮 | `boolean` | `false` |
| hide-confirm-button | 是否隐藏确认按钮 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| width | 宽度 | `string \| number` | `200` |
| placement | 弹出位置 | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'` |
| offset | 出现位置的偏移量 | `number` | `12` |
| show-arrow | 是否显示箭头 | `boolean` | `true` |

### Events

| 事件名 | 说明 |
|-------|------|
| confirm | 点击确认按钮时触发 |
| cancel | 点击取消按钮时触发 |

### Slots

| 插槽名 | 说明 |
|-------|------|
| default | 触发 Popconfirm 显示的元素 |
| title | 标题内容 |
| icon | 图标内容 |