# Pagination 分页

当数据量过多时，使用分页分解数据。

<script setup>
import { ref } from 'vue'

const currentPage = ref(1)
const currentPage2 = ref(1)
const pageSize = ref(20)
const pageSize2 = ref(10)

const handleCurrentChange = (page) => {
  console.log('当前页:', page)
}

const handleSizeChange = (size) => {
  console.log('每页条数:', size)
}
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-pagination :total="100" />
  </div>
</div>

```vue
<template>
  <x-pagination :total="100" />
</template>

<script setup>
import { Pagination } from '@xto/data'
</script>
```

## 页码切换

使用 `v-model:currentPage` 双向绑定当前页码。

<div class="demo-block">
  <div class="demo-preview">
    <x-pagination :total="100" v-model:currentPage="currentPage" />
    <span style="margin-left: 16px;">当前页: {{ currentPage }}</span>
  </div>
</div>

```vue
<template>
  <x-pagination :total="100" v-model:currentPage="currentPage" />
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '@xto/data'

const currentPage = ref(1)
</script>
```

## 每页条数

使用 `pageSizes` 设置每页条数选项，`v-model:pageSize` 双向绑定每页条数。

<div class="demo-block">
  <div class="demo-preview">
    <x-pagination
      :total="200"
      :pageSizes="[10, 20, 30, 50]"
      v-model:pageSize="pageSize"
    />
    <span style="margin-left: 16px;">每页条数: {{ pageSize }}</span>
  </div>
</div>

```vue
<template>
  <x-pagination
    :total="200"
    :pageSizes="[10, 20, 30, 50]"
    v-model:pageSize="pageSize"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '@xto/data'

const pageSize = ref(20)
</script>
```

## 完整功能

结合页码切换和每页条数选择。

<div class="demo-block">
  <div class="demo-preview">
    <x-pagination
      :total="500"
      :pageSizes="[10, 20, 50, 100]"
      v-model:currentPage="currentPage2"
      v-model:pageSize="pageSize2"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
    <div style="margin-top: 12px; color: #606266;">
      当前页: {{ currentPage2 }}，每页: {{ pageSize2 }} 条
    </div>
  </div>
</div>

```vue
<template>
  <x-pagination
    :total="500"
    :pageSizes="[10, 20, 50, 100]"
    v-model:currentPage="currentPage2"
    v-model:pageSize="pageSize2"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '@xto/data'

const currentPage2 = ref(1)
const pageSize2 = ref(10)

const handleCurrentChange = (page) => {
  console.log('当前页:', page)
}

const handleSizeChange = (size) => {
  console.log('每页条数:', size)
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| total | 数据总条数 | `number` | `0` |
| pageSize | 每页显示条数 | `number` | `10` |
| currentPage | 当前页码 | `number` | `1` |
| pageSizes | 每页显示个数选择器的选项 | `number[]` | `[10, 20, 50, 100]` |
| layout | 分页布局 | `string` | `'total, sizes, prev, pager, next, jumper'` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:currentPage | 当前页码改变时触发 | `(page: number)` |
| update:pageSize | 每页条数改变时触发 | `(size: number)` |
| current-change | 当前页码改变时触发 | `(page: number)` |
| size-change | 每页条数改变时触发 | `(size: number)` |