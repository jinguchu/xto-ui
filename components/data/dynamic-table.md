# DynamicTable 动态表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

<script setup>
import { ref, reactive } from 'vue'

const tableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: '在职' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: '在职' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: '离职' },
  { id: 4, name: '赵六', age: 30, address: '深圳市南山区', status: '在职' }
])

const columns = ref([
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 100, sortable: true },
  { prop: 'address', label: '地址' },
  { prop: 'status', label: '状态', width: 100 }
])

const editableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区' }
])

const loading = ref(false)

const handleSortChange = (sort) => {
  console.log('排序变化:', sort)
}

const handleRowClick = (row) => {
  console.log('点击行:', row)
}

const handleAddRow = (newRow) => {
  console.log('新增行:', newRow)
}

const handleDeleteRow = (row, index) => {
  console.log('删除行:', row, index)
}
</script>

## 基础用法

通过 `columns` 配置列，`data` 绑定数据。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table :data="tableData" :columns="columns" />
  </div>
</div>

```vue
<template>
  <x-dynamic-table :data="tableData" :columns="columns" />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区' }
])

const columns = ref([
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 100 },
  { prop: 'address', label: '地址' }
])
</script>
```

## 带边框表格

设置 `border` 属性显示边框。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table :data="tableData" :columns="columns" border />
  </div>
</div>

```vue
<template>
  <x-dynamic-table :data="tableData" :columns="columns" border />
</template>
```

## 斑马纹表格

设置 `stripe` 属性显示斑马纹。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table :data="tableData" :columns="columns" stripe />
  </div>
</div>

```vue
<template>
  <x-dynamic-table :data="tableData" :columns="columns" stripe />
</template>
```

## 显示序号

设置 `show-index` 显示行序号。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table :data="tableData" :columns="columns" show-index />
  </div>
</div>

```vue
<template>
  <x-dynamic-table :data="tableData" :columns="columns" show-index />
</template>
```

## 操作列

设置 `show-operation` 显示操作列，默认提供删除按钮。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table
      :data="tableData"
      :columns="columns"
      show-operation
      @delete-row="handleDeleteRow"
    />
  </div>
</div>

```vue
<template>
  <x-dynamic-table
    :data="tableData"
    :columns="columns"
    show-operation
    @delete-row="handleDeleteRow"
  />
</template>

<script setup>
const handleDeleteRow = (row, index) => {
  console.log('删除行:', row, index)
}
</script>
```

## 新增和删除行

设置 `show-add-button` 显示新增按钮，配合 `show-operation` 实现完整的增删功能。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table
      v-model:data="editableData"
      :columns="columns"
      show-index
      show-operation
      show-add-button
      @add-row="handleAddRow"
      @delete-row="handleDeleteRow"
    />
  </div>
</div>

```vue
<template>
  <x-dynamic-table
    v-model:data="tableData"
    :columns="columns"
    show-index
    show-operation
    show-add-button
    @add-row="handleAddRow"
    @delete-row="handleDeleteRow"
  />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区' }
])

const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 100 },
  { prop: 'address', label: '地址' }
]

const handleAddRow = (newRow) => {
  console.log('新增行:', newRow)
}

const handleDeleteRow = (row, index) => {
  console.log('删除行:', row, index)
}
</script>
```

## 自定义操作列

通过 `operation` 插槽自定义操作列内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table :data="tableData" :columns="columns" show-operation>
      <template #operation="{ row, $index, deleteRow }">
        <button style="margin-right: 8px; padding: 4px 8px; color: #409eff; background: none; border: 1px solid #409eff; border-radius: 4px; cursor: pointer;">编辑</button>
        <button style="padding: 4px 8px; color: #f56c6c; background: none; border: 1px solid #f56c6c; border-radius: 4px; cursor: pointer;" @click="deleteRow">删除</button>
      </template>
    </x-dynamic-table>
  </div>
</div>

```vue
<template>
  <x-dynamic-table :data="tableData" :columns="columns" show-operation>
    <template #operation="{ row, $index, deleteRow }">
      <button @click="handleEdit(row)">编辑</button>
      <button @click="deleteRow">删除</button>
    </template>
  </x-dynamic-table>
</template>
```

## 排序

设置列的 `sortable` 属性启用排序功能。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table
      :data="tableData"
      :columns="columns"
      @sort-change="handleSortChange"
    />
  </div>
</div>

```vue
<template>
  <x-dynamic-table
    :data="tableData"
    :columns="columns"
    @sort-change="handleSortChange"
  />
</template>

<script setup>
const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 100, sortable: true },
  { prop: 'address', label: '地址' }
]

const handleSortChange = (sort) => {
  console.log('排序:', sort)
}
</script>
```

## 选择功能

设置 `row-key` 启用行选择功能。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table
      :data="tableData"
      :columns="columns"
      row-key="id"
    />
  </div>
</div>

```vue
<template>
  <x-dynamic-table
    :data="tableData"
    :columns="columns"
    row-key="id"
  />
</template>
```

## 加载状态

设置 `loading` 显示加载状态。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="loading = !loading" style="margin-bottom: 12px;">
      {{ loading ? '关闭加载' : '开启加载' }}
    </x-button>
    <x-dynamic-table :data="tableData" :columns="columns" :loading="loading" />
  </div>
</div>

```vue
<template>
  <x-dynamic-table :data="tableData" :columns="columns" :loading="loading" />
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(true)
</script>
```

## 固定高度

设置 `height` 或 `max-height` 固定表格高度。

<div class="demo-block">
  <div class="demo-preview">
    <x-dynamic-table :data="tableData" :columns="columns" :height="200" border />
  </div>
</div>

```vue
<template>
  <x-dynamic-table :data="tableData" :columns="columns" :height="200" border />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| data | 表格数据（支持 v-model） | `any[]` | `[]` |
| columns | 列配置 | `TableColumn[]` | `[]` |
| height | 表格高度 | `string \| number` | — |
| maxHeight | 表格最大高度 | `string \| number` | — |
| rowKey | 行数据的 Key，用于选择功能 | `string \| (row) => string` | — |
| loading | 是否加载中 | `boolean` | `false` |
| border | 是否显示边框 | `boolean` | `false` |
| stripe | 是否显示斑马纹 | `boolean` | `false` |
| showHeader | 是否显示表头 | `boolean` | `true` |
| showIndex | 是否显示序号 | `boolean` | `false` |
| showOperation | 是否显示操作列 | `boolean` | `false` |
| showAddButton | 是否显示新增按钮 | `boolean` | `false` |
| operationWidth | 操作列宽度 | `string \| number` | `120` |
| operationLabel | 操作列标题 | `string` | `'操作'` |
| emptyText | 空数据提示文本 | `string` | `'暂无数据'` |
| defaultSort | 默认排序 | `{ prop: string; order: 'ascending' \| 'descending' }` | — |

### TableColumn 配置

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| prop | 列字段名 | `string` | — |
| label | 列标题 | `string` | — |
| width | 列宽度 | `string \| number` | — |
| minWidth | 最小列宽 | `string \| number` | — |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| sortable | 是否可排序 | `boolean \| 'custom'` | `false` |
| formatter | 格式化函数 | `(row, column, cellValue, index) => string` | — |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:data | 数据变化时触发 | `(data: any[])` |
| sort-change | 排序变化时触发 | `(sort: { prop: string; order: string \| null })` |
| row-click | 行点击时触发 | `(row, column, event)` |
| row-dblclick | 行双击时触发 | `(row, column, event)` |
| selection-change | 选择变化时触发 | `(selection: any[])` |
| select-all | 全选时触发 | `(selection: any[])` |
| cell-click | 单元格点击时触发 | `(row, column, cell, event)` |
| add-row | 新增行时触发 | `(newRow: any)` |
| delete-row | 删除行时触发 | `(row: any, index: number)` |

### Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| clearSelection | 清空选择 | — |
| getSelection | 获取选中行 | — |
| addRow | 新增一行 | `(rowData?: any)` |
| deleteRow | 删除指定行 | `(index: number)` |
| getData | 获取当前数据 | — |

### Slots

| 插槽名 | 说明 | 参数 |
|-------|------|------|
| column-[prop] | 自定义列内容 | `{ row, column, $index }` |
| operation | 自定义操作列 | `{ row, $index, deleteRow }` |
| toolbar | 自定义工具栏 | — |
| empty | 空状态内容 | — |