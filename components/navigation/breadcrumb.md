# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

<script setup>
import { ref } from 'vue'
</script>

## 基础用法

使用 `x-breadcrumb` 和 `x-breadcrumb-item` 组合使用。

<div class="demo-block">
  <div class="demo-preview">
    <x-breadcrumb>
      <x-breadcrumb-item>首页</x-breadcrumb-item>
      <x-breadcrumb-item>活动管理</x-breadcrumb-item>
      <x-breadcrumb-item>活动列表</x-breadcrumb-item>
      <x-breadcrumb-item>活动详情</x-breadcrumb-item>
    </x-breadcrumb>
  </div>
</div>

```vue
<template>
  <x-breadcrumb>
    <x-breadcrumb-item>首页</x-breadcrumb-item>
    <x-breadcrumb-item>活动管理</x-breadcrumb-item>
    <x-breadcrumb-item>活动列表</x-breadcrumb-item>
    <x-breadcrumb-item>活动详情</x-breadcrumb-item>
  </x-breadcrumb>
</template>
```

## 自定义分隔符

通过 `separator` 属性自定义分隔符。

<div class="demo-block">
  <div class="demo-preview">
    <x-breadcrumb separator="-">
      <x-breadcrumb-item>首页</x-breadcrumb-item>
      <x-breadcrumb-item>活动管理</x-breadcrumb-item>
      <x-breadcrumb-item>活动列表</x-breadcrumb-item>
    </x-breadcrumb>
  </div>
</div>

```vue
<template>
  <x-breadcrumb separator="-">
    <x-breadcrumb-item>首页</x-breadcrumb-item>
    <x-breadcrumb-item>活动管理</x-breadcrumb-item>
    <x-breadcrumb-item>活动列表</x-breadcrumb-item>
  </x-breadcrumb>
</template>
```

## 图标分隔符

使用 `separator-icon` 设置图标分隔符。

<div class="demo-block">
  <div class="demo-preview">
    <x-breadcrumb separator-icon=">">
      <x-breadcrumb-item>首页</x-breadcrumb-item>
      <x-breadcrumb-item>活动管理</x-breadcrumb-item>
      <x-breadcrumb-item>活动列表</x-breadcrumb-item>
    </x-breadcrumb>
  </div>
</div>

```vue
<template>
  <x-breadcrumb separator-icon=">">
    <x-breadcrumb-item>首页</x-breadcrumb-item>
    <x-breadcrumb-item>活动管理</x-breadcrumb-item>
    <x-breadcrumb-item>活动列表</x-breadcrumb-item>
  </x-breadcrumb>
</template>
```

## 可点击链接

通过 `to` 属性设置跳转链接。

<div class="demo-block">
  <div class="demo-preview">
    <x-breadcrumb>
      <x-breadcrumb-item to="/">首页</x-breadcrumb-item>
      <x-breadcrumb-item to="/components/navigation/menu">导航组件</x-breadcrumb-item>
      <x-breadcrumb-item>面包屑</x-breadcrumb-item>
    </x-breadcrumb>
  </div>
</div>

```vue
<template>
  <x-breadcrumb>
    <x-breadcrumb-item to="/">首页</x-breadcrumb-item>
    <x-breadcrumb-item to="/components">组件</x-breadcrumb-item>
    <x-breadcrumb-item>面包屑</x-breadcrumb-item>
  </x-breadcrumb>
</template>
```

## API

### Breadcrumb Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| separator | 分隔符 | `string` | `'/'` |
| separatorIcon | 图标分隔符 | `string` | — |

### BreadcrumbItem Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| to | 路由跳转目标 | `string \| object` | — |
| replace | 是否替换历史记录 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

### BreadcrumbItem Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| click | 点击时触发 | `(event: MouseEvent)` |