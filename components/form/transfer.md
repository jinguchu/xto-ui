# Transfer 穿梭框

双栏穿梭选择框，常用于将多个项目从一个列表转移到另一个列表。

<script setup>
import { ref } from 'vue'

const value1 = ref([1, 4])
const value2 = ref([])
const value3 = ref([])
const customValue = ref([])

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `选项 ${i}`,
      disabled: i % 4 === 0
    })
  }
  return data
}

const data1 = ref(generateData())
const data2 = ref(generateData())
const data3 = ref(generateData())

const customData = ref([
  { id: 1, name: '选项 1', locked: false },
  { id: 2, name: '选项 2', locked: true },
  { id: 3, name: '选项 3', locked: false },
  { id: 4, name: '选项 4', locked: false },
  { id: 5, name: '选项 5', locked: false }
])

const handleChange = (value, direction, movedKeys) => {
  console.log('值变化:', value)
  console.log('方向:', direction)
  console.log('移动的项:', movedKeys)
}

const filterMethod = (query, item) => {
  return item.label.includes(query)
}
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-transfer v-model="value1" :data="data1" />
    <div style="margin-top: 12px;">选中值: {{ value1 }}</div>
  </div>
</div>

```vue
<template>
  <x-transfer v-model="value" :data="data" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref([1, 4])

const data = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3', disabled: true },
  { key: 4, label: '选项 4' }
])
</script>
```

## 可搜索

设置 `filterable` 开启搜索功能。

<div class="demo-block">
  <div class="demo-preview">
    <x-transfer
      v-model="value2"
      :data="data2"
      filterable
      filter-placeholder="请输入搜索内容"
    />
  </div>
</div>

```vue
<template>
  <x-transfer
    v-model="value"
    :data="data"
    filterable
    filter-placeholder="请输入搜索内容"
  />
</template>
```

## 自定义搜索

使用 `filter-method` 自定义搜索逻辑。

<div class="demo-block">
  <div class="demo-preview">
    <x-transfer
      v-model="value3"
      :data="data3"
      filterable
      :filter-method="filterMethod"
    />
  </div>
</div>

```vue
<template>
  <x-transfer
    v-model="value"
    :data="data"
    filterable
    :filter-method="filterMethod"
  />
</template>

<script setup>
const filterMethod = (query, item) => {
  return item.label.includes(query)
}
</script>
```

## 自定义标题和按钮

通过 `titles` 和 `button-texts` 自定义标题和按钮文本。

<div class="demo-block">
  <div class="demo-preview">
    <x-transfer
      v-model="value1"
      :data="data1"
      :titles="['源列表', '目标列表']"
      :button-texts="['移除', '添加']"
    />
  </div>
</div>

```vue
<template>
  <x-transfer
    v-model="value"
    :data="data"
    :titles="['源列表', '目标列表']"
    :button-texts="['移除', '添加']"
  />
</template>
```

## 自定义数据字段

使用 `props` 属性自定义数据字段映射。

<div class="demo-block">
  <div class="demo-preview">
    <x-transfer
      v-model="customValue"
      :data="customData"
      :props="{
        key: 'id',
        label: 'name',
        disabled: 'locked'
      }"
    />
  </div>
</div>

```vue
<template>
  <x-transfer
    v-model="value"
    :data="data"
    :props="{
      key: 'id',
      label: 'name',
      disabled: 'locked'
    }"
  />
</template>

<script setup>
const value = ref([])

const data = ref([
  { id: 1, name: '选项 1', locked: false },
  { id: 2, name: '选项 2', locked: true },
  { id: 3, name: '选项 3', locked: false }
])
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 目标列表的 key 数组 | `(string \| number)[]` | `[]` |
| data | 数据源 | `TransferOption[]` | `[]` |
| titles | 自定义标题 | `[string, string]` | `['列表1', '列表2']` |
| buttonTexts | 自定义按钮文本 | `[string, string]` | `['', '']` |
| filterable | 是否可搜索 | `boolean` | `false` |
| filterPlaceholder | 搜索框占位符 | `string` | `'请输入搜索内容'` |
| filterMethod | 自定义搜索方法 | `(query: string, option: TransferOption) => boolean` | — |
| targetOrder | 目标列表排序方式 | `'original' \| 'push' \| 'unshift'` | `'original'` |
| props | 数据字段映射 | `object` | — |

### TransferOption 数据结构

| 字段 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| key | 选项唯一标识 | `string \| number` | — |
| label | 选项标签 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值变化时触发 | `(value: (string \| number)[])` |
| change | 值变化时触发 | `(value: (string \| number)[], direction: 'left' \| 'right', movedKeys: (string \| number)[])` |
| left-check-change | 左侧选中项变化时触发 | `(checkedKeys: (string \| number)[])` |
| right-check-change | 右侧选中项变化时触发 | `(checkedKeys: (string \| number)[])` |

### Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| clearQuery | 清除搜索框内容 | `(direction: 'left' \| 'right')` |

### Slots

| 插槽名 | 说明 |
|-------|------|
| left-empty | 左侧空状态内容 |
| right-empty | 右侧空状态内容 |