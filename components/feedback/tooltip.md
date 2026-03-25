# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

<script setup>
import { ref } from 'vue'
</script>

## 基础用法

使用 `content` 属性设置提示内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-tooltip content="这是提示内容">
      <x-button>悬停显示提示</x-button>
    </x-tooltip>
  </div>
</div>

```vue
<template>
  <x-tooltip content="这是提示内容">
    <x-button>悬停显示提示</x-button>
  </x-tooltip>
</template>
```

## 不同位置

通过 `placement` 属性设置弹出位置，支持四个方向。

<div class="demo-block">
  <div class="demo-preview" style="display: flex; gap: 20px; justify-content: center; padding: 50px 0;">
    <x-tooltip content="上方提示" placement="top">
      <x-button>上方</x-button>
    </x-tooltip>
    <x-tooltip content="下方提示" placement="bottom">
      <x-button>下方</x-button>
    </x-tooltip>
    <x-tooltip content="左侧提示" placement="left">
      <x-button>左侧</x-button>
    </x-tooltip>
    <x-tooltip content="右侧提示" placement="right">
      <x-button>右侧</x-button>
    </x-tooltip>
  </div>
</div>

```vue
<template>
  <x-tooltip content="上方提示" placement="top">
    <x-button>上方</x-button>
  </x-tooltip>
  <x-tooltip content="下方提示" placement="bottom">
    <x-button>下方</x-button>
  </x-tooltip>
  <x-tooltip content="左侧提示" placement="left">
    <x-button>左侧</x-button>
  </x-tooltip>
  <x-tooltip content="右侧提示" placement="right">
    <x-button>右侧</x-button>
  </x-tooltip>
</template>
```

## 主题

通过 `effect` 属性设置主题，支持 `dark` 和 `light` 两种。

<div class="demo-block">
  <div class="demo-preview" style="display: flex; gap: 20px;">
    <x-tooltip content="深色主题" effect="dark">
      <x-button>深色</x-button>
    </x-tooltip>
    <x-tooltip content="浅色主题" effect="light">
      <x-button>浅色</x-button>
    </x-tooltip>
  </div>
</div>

```vue
<template>
  <x-tooltip content="深色主题" effect="dark">
    <x-button>深色</x-button>
  </x-tooltip>
  <x-tooltip content="浅色主题" effect="light">
    <x-button>浅色</x-button>
  </x-tooltip>
</template>
```

## 触发方式

通过 `trigger` 属性设置触发方式，支持 `hover`、`click`、`focus`。

<div class="demo-block">
  <div class="demo-preview" style="display: flex; gap: 20px;">
    <x-tooltip content="悬停触发" trigger="hover">
      <x-button>悬停触发</x-button>
    </x-tooltip>
    <x-tooltip content="点击触发" trigger="click">
      <x-button>点击触发</x-button>
    </x-tooltip>
    <x-tooltip content="聚焦触发" trigger="focus">
      <x-input placeholder="聚焦触发" style="width: 150px;" />
    </x-tooltip>
  </div>
</div>

```vue
<template>
  <x-tooltip content="悬停触发" trigger="hover">
    <x-button>悬停触发</x-button>
  </x-tooltip>
  <x-tooltip content="点击触发" trigger="click">
    <x-button>点击触发</x-button>
  </x-tooltip>
  <x-tooltip content="聚焦触发" trigger="focus">
    <x-input placeholder="聚焦触发" />
  </x-tooltip>
</template>
```

## 延迟显示

通过 `open-delay` 和 `close-delay` 设置延迟时间（毫秒）。

<div class="demo-block">
  <div class="demo-preview" style="display: flex; gap: 20px;">
    <x-tooltip content="延迟 500ms 显示" :open-delay="500">
      <x-button>延迟显示</x-button>
    </x-tooltip>
    <x-tooltip content="延迟 500ms 隐藏" :close-delay="500">
      <x-button>延迟隐藏</x-button>
    </x-tooltip>
  </div>
</div>

```vue
<template>
  <x-tooltip content="延迟 500ms 显示" :open-delay="500">
    <x-button>延迟显示</x-button>
  </x-tooltip>
  <x-tooltip content="延迟 500ms 隐藏" :close-delay="500">
    <x-button>延迟隐藏</x-button>
  </x-tooltip>
</template>
```

## 禁用状态

设置 `disabled` 属性禁用提示。

<div class="demo-block">
  <div class="demo-preview">
    <x-tooltip content="禁用状态" disabled>
      <x-button>禁用提示</x-button>
    </x-tooltip>
  </div>
</div>

```vue
<template>
  <x-tooltip content="禁用状态" disabled>
    <x-button>禁用提示</x-button>
  </x-tooltip>
</template>
```

## 自定义内容

使用 `content` 插槽自定义提示内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-tooltip>
      <x-button>自定义内容</x-button>
      <template #content>
        <div style="text-align: center;">
          <div style="font-weight: bold; margin-bottom: 4px;">标题</div>
          <div style="color: #909399; font-size: 12px;">这是一段描述文字</div>
        </div>
      </template>
    </x-tooltip>
  </div>
</div>

```vue
<template>
  <x-tooltip>
    <x-button>自定义内容</x-button>
    <template #content>
      <div>
        <div style="font-weight: bold;">标题</div>
        <div style="color: #909399; font-size: 12px;">描述文字</div>
      </div>
    </template>
  </x-tooltip>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| content | 显示的内容 | `string` | — |
| placement | Tooltip 的出现位置 | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| effect | 默认提供的主题 | `'dark' \| 'light'` | `'dark'` |
| disabled | 是否禁用 | `boolean` | `false` |
| offset | 出现位置的偏移量 | `number` | `10` |
| transition | 过渡动画名称 | `string` | `'fade'` |
| visibleArrow | 是否显示箭头 | `boolean` | `true` |
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus'` | `'hover'` |
| openDelay | 显示延迟（毫秒） | `number` | `0` |
| closeDelay | 隐藏延迟（毫秒） | `number` | `0` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| show | 显示时触发 | — |
| hide | 隐藏时触发 | — |

### Slots

| 插槽名 | 说明 |
|-------|------|
| default | 触发 Tooltip 显示的元素 |
| content | 自定义内容 |