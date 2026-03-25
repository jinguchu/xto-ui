# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

<script setup>
import { Notification } from '@xto/feedback'

const handleBasic = () => {
  Notification({
    title: '标题名称',
    message: '这是一条通知消息'
  })
}

const handleSuccess = () => {
  Notification.success({
    title: '成功',
    message: '这是一条成功的提示消息'
  })
}

const handleWarning = () => {
  Notification.warning({
    title: '警告',
    message: '这是一条警告的提示消息'
  })
}

const handleError = () => {
  Notification.error({
    title: '错误',
    message: '这是一条错误的提示消息'
  })
}

const handleInfo = () => {
  Notification.info({
    title: '消息',
    message: '这是一条消息提示'
  })
}

const handlePosition = (position) => {
  Notification({
    title: '自定义位置',
    message: `这是一条${position}的通知`,
    position
  })
}

const handleNoClose = () => {
  Notification({
    title: '不会自动关闭',
    message: '这是一条不会自动关闭的消息，点击关闭按钮才能关闭',
    duration: 0
  })
}

const handleHTML = () => {
  Notification({
    title: 'HTML 片段',
    dangerouslyUseHTMLString: true,
    message: '<strong>这是 <i>HTML</i> 片段</strong>'
  })
}

const handleHiddenClose = () => {
  Notification({
    title: '隐藏关闭按钮',
    message: '这是一条没有关闭按钮的消息',
    showClose: false
  })
}
</script>

## 基础用法

从右上角出现，4.5 秒后自动消失。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleBasic">基本用法</x-button>
  </div>
</div>

```vue
<template>
  <x-button @click="handleBasic">基本用法</x-button>
</template>

<script setup>
import { Notification } from '@xto/feedback'

const handleBasic = () => {
  Notification({
    title: '标题名称',
    message: '这是一条通知消息'
  })
}
</script>
```

## 不同类型

Notification 支持四种类型：success、warning、info、error。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleSuccess">成功</x-button>
    <x-button @click="handleWarning" style="margin-left: 10px;">警告</x-button>
    <x-button @click="handleInfo" style="margin-left: 10px;">消息</x-button>
    <x-button @click="handleError" style="margin-left: 10px;">错误</x-button>
  </div>
</div>

```vue
<script setup>
import { Notification } from '@xto/feedback'

const handleSuccess = () => {
  Notification.success({
    title: '成功',
    message: '这是一条成功的提示消息'
  })
}

const handleWarning = () => {
  Notification.warning({
    title: '警告',
    message: '这是一条警告的提示消息'
  })
}
</script>
```

## 自定义弹出位置

Notification 支持 four 种弹出位置：`top-right`、`top-left`、`bottom-right`、`bottom-left`。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handlePosition('top-right')">右上角</x-button>
    <x-button @click="handlePosition('top-left')" style="margin-left: 10px;">左上角</x-button>
    <x-button @click="handlePosition('bottom-right')" style="margin-left: 10px;">右下角</x-button>
    <x-button @click="handlePosition('bottom-left')" style="margin-left: 10px;">左下角</x-button>
  </div>
</div>

```vue
<script setup>
import { Notification } from '@xto/feedback'

const handlePosition = (position) => {
  Notification({
    title: '自定义位置',
    message: `这是一条${position}的通知`,
    position
  })
}
</script>
```

## 隐藏关闭按钮

可以不显示关闭按钮。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleHiddenClose">隐藏关闭按钮</x-button>
  </div>
</div>

```vue
<script setup>
import { Notification } from '@xto/feedback'

const handleHiddenClose = () => {
  Notification({
    title: '隐藏关闭按钮',
    message: '这是一条没有关闭按钮的消息',
    showClose: false
  })
}
</script>
```

## 不会自动关闭

将 duration 设置为 0 不会自动关闭。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleNoClose">不会自动关闭</x-button>
  </div>
</div>

```vue
<script setup>
import { Notification } from '@xto/feedback'

const handleNoClose = () => {
  Notification({
    title: '不会自动关闭',
    message: '这是一条不会自动关闭的消息，点击关闭按钮才能关闭',
    duration: 0
  })
}
</script>
```

## 使用 HTML 片段

`message` 属性支持传入 HTML 片段。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleHTML">使用 HTML 片段</x-button>
  </div>
</div>

```vue
<script setup>
import { Notification } from '@xto/feedback'

const handleHTML = () => {
  Notification({
    title: 'HTML 片段',
    dangerouslyUseHTMLString: true,
    message: '<strong>这是 <i>HTML</i> 片段</strong>'
  })
}
</script>
```

## API

### 方法

| 方法名 | 说明 | 参数 |
|-------|------|------|
| Notification | 显示通知 | `NotificationOptions \| string` |
| Notification.success | 显示成功通知 | `NotificationOptions \| string` |
| Notification.warning | 显示警告通知 | `NotificationOptions \| string` |
| Notification.info | 显示信息通知 | `NotificationOptions \| string` |
| Notification.error | 显示错误通知 | `NotificationOptions \| string` |
| Notification.closeAll | 关闭所有通知 | — |

### NotificationOptions

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题 | `string` | — |
| message | 内容 | `string` | — |
| type | 通知类型 | `'success' \| 'warning' \| 'info' \| 'error'` | — |
| duration | 显示时间，毫秒。设为 0 则不会自动关闭 | `number` | `4500` |
| position | 自定义弹出位置 | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| offset | 偏移距离 | `number` | `0` |
| customClass | 自定义类名 | `string` | — |
| dangerouslyUseHTMLString | 是否将 message 作为 HTML 渲染 | `boolean` | `false` |
| onClose | 关闭时的回调函数 | `() => void` | — |

### 返回值

Notification 方法返回一个 NotificationInstance 对象：

| 属性 | 说明 | 类型 |
|-----|------|------|
| close | 关闭当前通知 | `() => void` |