# Descriptions 描述列表

成组展示多个只读字段。

## 基础用法

```vue
<template>
  <x-descriptions title="用户信息" :column="3" bordered>
    <x-descriptions-item label="姓名">张三</x-descriptions-item>
    <x-descriptions-item label="手机号">18100000000</x-descriptions-item>
    <x-descriptions-item label="居住地">浙江省杭州市</x-descriptions-item>
    <x-descriptions-item label="备注">浙江省杭州市西湖区</x-descriptions-item>
    <x-descriptions-item label="联系地址">
      浙江省杭州市西湖区工专路 77 号
    </x-descriptions-item>
  </x-descriptions>
</template>

<script setup>
import { Descriptions, DescriptionsItem } from '@xto/data'
</script>
```

## 无边框样式

```vue
<template>
  <x-descriptions title="用户信息" :column="3">
    <x-descriptions-item label="姓名">张三</x-descriptions-item>
    <x-descriptions-item label="手机号">18100000000</x-descriptions-item>
    <x-descriptions-item label="居住地">浙江省杭州市</x-descriptions-item>
  </x-descriptions>
</template>
```

## 不同尺寸

```vue
<template>
  <x-descriptions title="小尺寸" size="small" bordered :column="3">
    <x-descriptions-item label="姓名">张三</x-descriptions-item>
    <x-descriptions-item label="手机号">18100000000</x-descriptions-item>
    <x-descriptions-item label="居住地">浙江省杭州市</x-descriptions-item>
  </x-descriptions>
</template>
```

## API

### Descriptions Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题文本 | `string` | — |
| column | 一行显示的列数 | `number` | `3` |
| border | 是否带有边框 | `boolean` | `false` |
| size | 列表的尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| labelWidth | 标签宽度 | `string \| number` | — |
| labelAlign | 标签对齐方式 | `'left' \| 'center' \| 'right'` | `'right'` |
| contentAlign | 内容对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| colon | 是否显示冒号 | `boolean` | `true` |

### DescriptionsItem Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| label | 标签文本 | `string` | — |
| span | 列的数量 | `number` | `1` |
| labelAlign | 标签对齐方式 | `'left' \| 'center' \| 'right'` | — |
| contentAlign | 内容对齐方式 | `'left' \| 'center' \| 'right'` | — |