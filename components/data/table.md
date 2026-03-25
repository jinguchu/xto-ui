# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选等操作。

## 基础用法

基础的表格展示用法。

```vue
<template>
  <x-table :data="tableData" style="width: 100%">
    <x-table-column prop="name" label="姓名" width="180" />
    <x-table-column prop="age" label="年龄" width="180" />
    <x-table-column prop="address" label="地址" />
  </x-table>
</template>

<script setup>
import { ref } from 'vue'
import { Table, TableColumn } from '@xto/data'

const tableData = ref([
  { name: '张三', age: 20, address: '北京市朝阳区' },
  { name: '李四', age: 25, address: '上海市浦东新区' },
  { name: '王五', age: 30, address: '广州市天河区' }
])
</script>
```

## 带斑马纹表格

使用 `stripe` 属性创建带斑马纹的表格。

```vue
<template>
  <x-table :data="tableData" stripe>
    <x-table-column prop="name" label="姓名" />
    <x-table-column prop="age" label="年龄" />
    <x-table-column prop="address" label="地址" />
  </x-table>
</template>
```

## 带边框表格

使用 `border` 属性创建带边框的表格。

```vue
<template>
  <x-table :data="tableData" border>
    <x-table-column prop="name" label="姓名" />
    <x-table-column prop="age" label="年龄" />
    <x-table-column prop="address" label="地址" />
  </x-table>
</template>
```

## 排序

对表格进行排序，可快速查找或对比数据。

```vue
<template>
  <x-table :data="tableData">
    <x-table-column prop="name" label="姓名" sortable />
    <x-table-column prop="age" label="年龄" sortable />
    <x-table-column prop="address" label="地址" />
  </x-table>
</template>
```

## API

### Table Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| data | 显示的数据 | `array` | `[]` |
| height | Table 的高度 | `string \| number` | — |
| maxHeight | Table 的最大高度 | `string \| number` | — |
| stripe | 是否为斑马纹 table | `boolean` | `false` |
| border | 是否带有纵向边框 | `boolean` | `false` |
| loading | 是否显示加载状态 | `boolean` | `false` |
| showHeader | 是否显示表头 | `boolean` | `true` |
| emptyText | 空数据时显示的文本内容 | `string` | `'暂无数据'` |

### TableColumn Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| prop | 对应列内容的字段名 | `string` | — |
| label | 显示的标题 | `string` | — |
| width | 对应列的宽度 | `string \| number` | — |
| minWidth | 对应列的最小宽度 | `string \| number` | — |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| sortable | 对应列是否可以排序 | `boolean \| 'custom'` | `false` |
| fixed | 列是否固定在左侧或者右侧 | `'left' \| 'right' \| true` | — |