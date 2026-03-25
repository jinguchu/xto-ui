# Timeline 时间线

用于展示时间流向的信息。

<script setup>
import { ref } from 'vue'

const activities = [
  { content: '启动项目', timestamp: '2024-01-01' },
  { content: '完成设计', timestamp: '2024-01-15' },
  { content: '开发阶段', timestamp: '2024-02-01' },
  { content: '测试上线', timestamp: '2024-03-01' }
]
</script>

## 基础用法

Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳显示在内容下方。

<div class="demo-block">
  <div class="demo-preview">
    <x-timeline>
      <x-timeline-item timestamp="2024-01-01">启动项目</x-timeline-item>
      <x-timeline-item timestamp="2024-01-15">完成设计</x-timeline-item>
      <x-timeline-item timestamp="2024-02-01">开发阶段</x-timeline-item>
      <x-timeline-item timestamp="2024-03-01">测试上线</x-timeline-item>
    </x-timeline>
  </div>
</div>

```vue
<template>
  <x-timeline>
    <x-timeline-item timestamp="2024-01-01">启动项目</x-timeline-item>
    <x-timeline-item timestamp="2024-01-15">完成设计</x-timeline-item>
    <x-timeline-item timestamp="2024-02-01">开发阶段</x-timeline-item>
    <x-timeline-item timestamp="2024-03-01">测试上线</x-timeline-item>
  </x-timeline>
</template>

<script setup>
import { Timeline, TimelineItem } from '@xto/data'
</script>
```

## 自定义节点颜色

通过 `type` 或 `color` 设置节点颜色。

<div class="demo-block">
  <div class="demo-preview">
    <x-timeline>
      <x-timeline-item timestamp="2024-01-01" type="primary">启动项目</x-timeline-item>
      <x-timeline-item timestamp="2024-01-15" type="success">完成设计</x-timeline-item>
      <x-timeline-item timestamp="2024-02-01" type="warning">开发阶段</x-timeline-item>
      <x-timeline-item timestamp="2024-03-01" type="danger">测试上线</x-timeline-item>
    </x-timeline>
  </div>
</div>

```vue
<template>
  <x-timeline>
    <x-timeline-item timestamp="2024-01-01" type="primary">启动项目</x-timeline-item>
    <x-timeline-item timestamp="2024-01-15" type="success">完成设计</x-timeline-item>
    <x-timeline-item timestamp="2024-02-01" type="warning">开发阶段</x-timeline-item>
    <x-timeline-item timestamp="2024-03-01" type="danger">测试上线</x-timeline-item>
  </x-timeline>
</template>
```

## 自定义颜色

通过 `color` 自定义节点颜色。

<div class="demo-block">
  <div class="demo-preview">
    <x-timeline>
      <x-timeline-item timestamp="2024-01-01" color="#409eff">自定义颜色</x-timeline-item>
      <x-timeline-item timestamp="2024-01-15" color="#67c23a">自定义颜色</x-timeline-item>
      <x-timeline-item timestamp="2024-02-01" color="#e6a23c">自定义颜色</x-timeline-item>
    </x-timeline>
  </div>
</div>

```vue
<template>
  <x-timeline>
    <x-timeline-item timestamp="2024-01-01" color="#409eff">自定义颜色</x-timeline-item>
    <x-timeline-item timestamp="2024-01-15" color="#67c23a">自定义颜色</x-timeline-item>
    <x-timeline-item timestamp="2024-02-01" color="#e6a23c">自定义颜色</x-timeline-item>
  </x-timeline>
</template>
```

## 自定义节点图标

通过 `dot` 插槽自定义节点内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-timeline>
      <x-timeline-item timestamp="2024-01-01">
        <template #dot>
          <span style="display: inline-block; width: 16px; height: 16px; background: #409eff; border-radius: 50%;"></span>
        </template>
        自定义节点
      </x-timeline-item>
      <x-timeline-item timestamp="2024-01-15">
        <template #dot>
          <span style="display: inline-block; width: 16px; height: 16px; background: #67c23a; border-radius: 4px;"></span>
        </template>
        自定义节点
      </x-timeline-item>
      <x-timeline-item timestamp="2024-02-01">
        <template #dot>
          <span style="display: inline-block; width: 16px; height: 16px; background: #e6a23c;"></span>
        </template>
        自定义节点
      </x-timeline-item>
    </x-timeline>
  </div>
</div>

```vue
<template>
  <x-timeline>
    <x-timeline-item timestamp="2024-01-01">
      <template #dot>
        <span class="custom-dot"></span>
      </template>
      自定义节点
    </x-timeline-item>
  </x-timeline>
</template>

<style scoped>
.custom-dot {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: #409eff;
  border-radius: 50%;
}
</style>
```

## 时间戳位置

通过 `placement` 设置时间戳位置，可选 `top`（内容上方）或 `bottom`（内容下方，默认）。

<div class="demo-block">
  <div class="demo-preview">
    <x-timeline>
      <x-timeline-item timestamp="2024-01-01" placement="top">时间戳在上方</x-timeline-item>
      <x-timeline-item timestamp="2024-01-15" placement="bottom">时间戳在下方</x-timeline-item>
    </x-timeline>
  </div>
</div>

```vue
<template>
  <x-timeline>
    <x-timeline-item timestamp="2024-01-01" placement="top">时间戳在上方</x-timeline-item>
    <x-timeline-item timestamp="2024-01-15" placement="bottom">时间戳在下方</x-timeline-item>
  </x-timeline>
</template>
```

## 隐藏时间戳

通过 `hide-timestamp` 隐藏时间戳。

<div class="demo-block">
  <div class="demo-preview">
    <x-timeline>
      <x-timeline-item>隐藏时间戳</x-timeline-item>
      <x-timeline-item timestamp="2024-01-15">显示时间戳</x-timeline-item>
    </x-timeline>
  </div>
</div>

```vue
<template>
  <x-timeline>
    <x-timeline-item hide-timestamp>隐藏时间戳</x-timeline-item>
    <x-timeline-item timestamp="2024-01-15">显示时间戳</x-timeline-item>
  </x-timeline>
</template>
```

## API

### Timeline Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| direction | 时间线方向 | `'vertical' \| 'horizontal'` | `'vertical'` |

### TimelineItem Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| timestamp | 时间戳 | `string` | — |
| type | 节点类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` |
| color | 节点颜色 | `string` | — |
| size | 节点大小 | `'normal' \| 'large'` | `'normal'` |
| hideTimestamp | 是否隐藏时间戳 | `boolean` | `false` |
| placement | 时间戳位置 | `'top' \| 'bottom'` | `'bottom'` |

### TimelineItem Slots

| 插槽名 | 说明 |
|-------|------|
| default | 默认内容 |
| dot | 自定义节点 |