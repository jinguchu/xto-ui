# PageHeader 页头

用于显示页面标题和导航信息，常用于页面顶部。

<script setup>
import { ref } from 'vue'

const handleBack = () => {
  console.log('点击返回')
}
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-page-header title="页面标题" subtitle="这是一个副标题描述" />
  </div>
</div>

```vue
<template>
  <x-page-header title="页面标题" subtitle="这是一个副标题描述" />
</template>

<script setup>
import { PageHeader } from '@xto/navigation'
</script>
```

## 带返回按钮

设置 `showBack` 显示返回按钮，点击时触发 `back` 事件。

<div class="demo-block">
  <div class="demo-preview">
    <x-page-header
      title="详情页面"
      show-back
      @back="handleBack"
    />
  </div>
</div>

```vue
<template>
  <x-page-header
    title="详情页面"
    show-back
    @back="handleBack"
  />
</template>

<script setup>
import { PageHeader } from '@xto/navigation'

const handleBack = () => {
  console.log('点击返回')
}
</script>
```

## 自定义返回按钮文字

通过 `backText` 自定义返回按钮文字。

<div class="demo-block">
  <div class="demo-preview">
    <x-page-header
      title="编辑页面"
      back-text="返回列表"
      show-back
      @back="handleBack"
    />
  </div>
</div>

```vue
<template>
  <x-page-header
    title="编辑页面"
    back-text="返回列表"
    show-back
    @back="handleBack"
  />
</template>
```

## 操作区域

使用 `extra` 插槽添加操作按钮。

<div class="demo-block">
  <div class="demo-preview">
    <x-page-header title="用户管理" subtitle="管理系统中的所有用户">
      <template #extra>
        <x-button type="primary" size="small">新增用户</x-button>
        <x-button size="small">导出数据</x-button>
      </template>
    </x-page-header>
  </div>
</div>

```vue
<template>
  <x-page-header title="用户管理" subtitle="管理系统中的所有用户">
    <template #extra>
      <x-button type="primary" size="small">新增用户</x-button>
      <x-button size="small">导出数据</x-button>
    </template>
  </x-page-header>
</template>
```

## 底部内容

使用 `footer` 插槽添加底部内容，常用于放置标签页或筛选条件。

<div class="demo-block">
  <div class="demo-preview">
    <x-page-header title="订单详情" show-back @back="handleBack">
      <template #extra>
        <x-button type="primary" size="small">编辑</x-button>
      </template>
      <template #footer>
        <div style="color: #909399; font-size: 14px;">
          订单编号：202401150001 | 创建时间：2024-01-15 10:30:00
        </div>
      </template>
    </x-page-header>
  </div>
</div>

## 自定义标题

使用 `title` 插槽自定义标题内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-page-header>
      <template #title>
        <span style="color: #409eff;">自定义标题</span>
        <span style="margin-left: 8px; font-size: 12px; color: #909399; font-weight: normal;">
          (已启用)
        </span>
      </template>
    </x-page-header>
  </div>
</div>

```vue
<template>
  <x-page-header>
    <template #title>
      <span style="color: #409eff;">自定义标题</span>
    </template>
  </x-page-header>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题 | `string` | `''` |
| subtitle | 副标题 | `string` | `''` |
| backText | 返回按钮文字 | `string` | `'返回'` |
| showBack | 是否显示返回按钮 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| back | 点击返回按钮时触发 | — |

### Slots

| 插槽名 | 说明 |
|-------|------|
| default | 默认内容 |
| title | 自定义标题 |
| subtitle | 自定义副标题 |
| extra | 操作区域 |
| footer | 底部内容 |