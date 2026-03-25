# SearchForm 搜索表单

用于表格上方的搜索筛选表单。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-search-form
      :columns="columns"
    />
  </div>
</div>

<script setup>
const columns = [
  { prop: 'name', label: '姓名', type: 'input', placeholder: '请输入姓名' },
  { prop: 'status', label: '状态', type: 'select', options: [
    { label: '启用', value: 1 },
    { label: '禁用', value: 0 }
  ], placeholder: '请选择状态' }
]
</script>

```vue
<template>
  <x-search-form
    :columns="columns"
    @search="handleSearch"
  />
</template>

<script setup>
import { SearchForm } from '@xto/business'

const columns = [
  { prop: 'name', label: '姓名', type: 'input' },
  { prop: 'status', label: '状态', type: 'select', options: [
    { label: '启用', value: 1 },
    { label: '禁用', value: 0 }
  ]}
]

const handleSearch = (params) => {
  console.log('搜索参数:', params)
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| columns | 表单项配置 | `SearchFormItem[]` | `[]` |
| model | 表单数据对象 | `Record<string, any>` | `{}` |
| labelWidth | 标签宽度 | `string \| number` | `'100px'` |
| labelPosition | 标签位置 | `'left' \| 'right' \| 'top'` | `'right'` |

### SearchFormItem

| 属性 | 说明 | 类型 |
|-----|------|------|
| prop | 字段名 | `string` |
| label | 标签文本 | `string` |
| type | 输入类型 | `'input' \| 'select' \| 'date' \| 'daterange'` |
| placeholder | 占位文本 | `string` |
| options | 选项列表（select 类型） | `{ label: string, value: any }[]` |
| defaultValue | 默认值 | `any` |

### Events

| 事件名 | 说明 |
|-------|------|
| search | 搜索时触发 |
| reset | 重置时触发 |