# ProTable 高级表格

封装了常用表格功能的高级表格组件。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-pro-table
      :columns="columns"
      :data="tableData"
      :pagination="false"
    />
  </div>
</div>

<script setup>
const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'email', label: '邮箱', minWidth: 180 },
  { prop: 'status', label: '状态', width: 100 }
]

const tableData = [
  { name: '张三', email: 'zhangsan@example.com', status: '启用' },
  { name: '李四', email: 'lisi@example.com', status: '禁用' },
  { name: '王五', email: 'wangwu@example.com', status: '启用' }
]
</script>

```vue
<template>
  <x-pro-table
    :columns="columns"
    :data="tableData"
    :pagination="true"
    :total="100"
  />
</template>

<script setup>
import { ref } from 'vue'
import { ProTable } from '@xto/business'

const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'email', label: '邮箱', minWidth: 180 },
  { prop: 'status', label: '状态', width: 100 }
]

const tableData = ref([
  { name: '张三', email: 'zhangsan@example.com', status: 'active' },
  { name: '李四', email: 'lisi@example.com', status: 'inactive' }
])
</script>
```

## 带选择和序号

<div class="demo-block">
  <div class="demo-preview">
    <x-pro-table
      :columns="columns"
      :data="tableData"
      :selection="true"
      :index="true"
      :pagination="false"
    />
  </div>
</div>

```vue
<template>
  <x-pro-table
    :columns="columns"
    :data="tableData"
    :selection="true"
    :index="true"
  />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| columns | 表格列配置 | `Column[]` | `[]` |
| data | 表格数据 | `any[]` | `[]` |
| loading | 加载状态 | `boolean` | `false` |
| pagination | 是否显示分页 | `boolean` | `true` |
| pageSize | 每页条数 | `number` | `10` |
| currentPage | 当前页 | `number` | `1` |
| total | 总条数 | `number` | `0` |
| selection | 是否显示选择列 | `boolean` | `false` |
| index | 是否显示序号列 | `boolean` | `false` |

### Column

| 属性 | 说明 | 类型 |
|-----|------|------|
| type | 列类型 | `'selection' \| 'index'` |
| prop | 字段名 | `string` |
| label | 标题 | `string` |
| width | 列宽 | `string \| number` |
| minWidth | 最小列宽 | `string \| number` |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` |
| sortable | 是否可排序 | `boolean` |
| formatter | 格式化函数 | `(row, column, cellValue) => string` |
| search | 是否可搜索 | `boolean` |
| searchType | 搜索类型 | `'input' \| 'select' \| 'date'` |

### Events

| 事件名 | 说明 |
|-------|------|
| search | 搜索时触发 |
| refresh | 刷新时触发 |
| reset | 重置时触发 |