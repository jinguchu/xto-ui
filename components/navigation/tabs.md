# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

<script setup>
import { ref } from 'vue'
const activeName1 = ref('first')
const activeName2 = ref('first')
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-tabs v-model="activeName1">
      <x-tab-pane label="用户管理" name="first">用户管理内容</x-tab-pane>
      <x-tab-pane label="配置管理" name="second">配置管理内容</x-tab-pane>
      <x-tab-pane label="角色管理" name="third">角色管理内容</x-tab-pane>
    </x-tabs>
  </div>
</div>

```vue
<template>
  <x-tabs v-model="activeName">
    <x-tab-pane label="用户管理" name="first">用户管理</x-tab-pane>
    <x-tab-pane label="配置管理" name="second">配置管理</x-tab-pane>
    <x-tab-pane label="角色管理" name="third">角色管理</x-tab-pane>
  </x-tabs>
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('first')
</script>
```

## 卡片风格

<div class="demo-block">
  <div class="demo-preview">
    <x-tabs v-model="activeName2" type="card">
      <x-tab-pane label="用户管理" name="first">用户管理内容</x-tab-pane>
      <x-tab-pane label="配置管理" name="second">配置管理内容</x-tab-pane>
      <x-tab-pane label="角色管理" name="third">角色管理内容</x-tab-pane>
    </x-tabs>
  </div>
</div>

```vue
<template>
  <x-tabs v-model="activeName" type="card">
    <x-tab-pane label="用户管理" name="first">用户管理</x-tab-pane>
    <x-tab-pane label="配置管理" name="second">配置管理</x-tab-pane>
  </x-tabs>
</template>
```

## API

### Tabs Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `string \| number` | — |
| type | 风格类型 | `'line' \| 'card'` | `'line'` |
| tabPosition | 选项卡位置 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` |
| closable | 是否可关闭 | `boolean` | `false` |
| addable | 是否可增加 | `boolean` | `false` |

### TabPane Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| label | 选项卡标题 | `string` | — |
| name | 选项卡标识 | `string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| closable | 是否可关闭 | `boolean` | `false` |
| lazy | 是否延迟渲染 | `boolean` | `false` |