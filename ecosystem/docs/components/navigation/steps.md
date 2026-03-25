# Steps 步骤条

引导用户按流程完成任务的导航条。

<script setup>
import { ref } from 'vue'

const active1 = ref(0)
const active2 = ref(1)
const active3 = ref(0)
const active4 = ref(1)

const next = () => {
  if (active1.value++ > 2) active1.value = 0
}
</script>

## 基础用法

通过 `active` 设置当前激活步骤，从 0 开始。

<div class="demo-block">
  <div class="demo-preview">
    <x-steps :active="active1">
      <x-step title="步骤 1" description="这是一段描述" />
      <x-step title="步骤 2" description="这是一段描述" />
      <x-step title="步骤 3" description="这是一段描述" />
    </x-steps>
    <x-button style="margin-top: 16px;" @click="next">下一步</x-button>
  </div>
</div>

```vue
<template>
  <x-steps :active="active">
    <x-step title="步骤 1" description="这是一段描述" />
    <x-step title="步骤 2" description="这是一段描述" />
    <x-step title="步骤 3" description="这是一段描述" />
  </x-steps>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

## 不同状态

使用 `status` 设置步骤状态。

<div class="demo-block">
  <div class="demo-preview">
    <x-steps :active="active2">
      <x-step title="已完成" status="success" />
      <x-step title="进行中" />
      <x-step title="待处理" status="wait" />
      <x-step title="错误" status="error" />
    </x-steps>
  </div>
</div>

```vue
<template>
  <x-steps :active="1">
    <x-step title="已完成" status="success" />
    <x-step title="进行中" />
    <x-step title="待处理" status="wait" />
    <x-step title="错误" status="error" />
  </x-steps>
</template>
```

## 垂直方向

设置 `direction="vertical"` 显示垂直步骤条。

<div class="demo-block">
  <div class="demo-preview">
    <x-steps :active="active3" direction="vertical" style="height: 250px;">
      <x-step title="步骤 1" description="这是一段描述文字" />
      <x-step title="步骤 2" description="这是一段描述文字" />
      <x-step title="步骤 3" description="这是一段描述文字" />
    </x-steps>
  </div>
</div>

```vue
<template>
  <x-steps :active="active" direction="vertical">
    <x-step title="步骤 1" description="这是一段描述文字" />
    <x-step title="步骤 2" description="这是一段描述文字" />
    <x-step title="步骤 3" description="这是一段描述文字" />
  </x-steps>
</template>
```

## 简洁风格

设置 `simple` 使用简洁风格。

<div class="demo-block">
  <div class="demo-preview">
    <x-steps :active="active4" simple>
      <x-step title="步骤 1" />
      <x-step title="步骤 2" />
      <x-step title="步骤 3" />
    </x-steps>
  </div>
</div>

```vue
<template>
  <x-steps :active="active" simple>
    <x-step title="步骤 1" />
    <x-step title="步骤 2" />
    <x-step title="步骤 3" />
  </x-steps>
</template>
```

## 可点击切换

点击步骤切换当前状态。

<div class="demo-block">
  <div class="demo-preview">
    <x-steps v-model:active="active1">
      <x-step title="步骤 1" description="点击切换" />
      <x-step title="步骤 2" description="点击切换" />
      <x-step title="步骤 3" description="点击切换" />
    </x-steps>
  </div>
</div>

```vue
<template>
  <x-steps v-model:active="active">
    <x-step title="步骤 1" description="点击切换" />
    <x-step title="步骤 2" description="点击切换" />
    <x-step title="步骤 3" description="点击切换" />
  </x-steps>
</template>
```

## API

### Steps Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| active / v-model:active | 当前激活步骤 | `number` | `0` |
| direction | 显示方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| simple | 是否简洁风格 | `boolean` | `false` |
| finishStatus | 结束步骤的状态 | `'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` | `'finish'` |
| processStatus | 当前步骤的状态 | `'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` | `'process'` |
| alignCenter | 居中对齐 | `boolean` | `false` |
| space | 每个 step 间距 | `string \| number` | — |

### Steps Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| change | 步骤切换时触发 | `(active: number)` |

### Step Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题 | `string` | — |
| description | 描述 | `string` | — |
| icon | 图标 | `string` | — |
| status | 状态 | `'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` | — |

### Step Slots

| 插槽名 | 说明 |
|-------|------|
| title | 自定义标题 |
| description | 自定义描述 |