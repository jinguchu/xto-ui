# Message 消息提示

常用于主动操作后的反馈提示。

<script setup>
import { Message } from '@xto/feedback'

const handleClose = () => {
  const instance = Message({
    message: '这条消息将在3秒后关闭',
    duration: 0
  })
  setTimeout(() => {
    instance.close()
  }, 3000)
}
</script>

## 基础用法

从顶部出现，3 秒后自动消失。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="Message.success('成功消息')">成功</x-button>
    <x-button @click="Message.warning('警告消息')">警告</x-button>
    <x-button @click="Message.info('信息消息')">信息</x-button>
    <x-button @click="Message.error('错误消息')">错误</x-button>
  </div>
</div>

```vue
<template>
  <x-button @click="Message.success('成功消息')">成功</x-button>
  <x-button @click="Message.warning('警告消息')">警告</x-button>
  <x-button @click="Message.info('信息消息')">信息</x-button>
  <x-button @click="Message.error('错误消息')">错误</x-button>
</template>

<script setup>
import { Message } from '@xto/feedback'
</script>
```

## 可关闭的消息提示

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="Message({ message: '可关闭的消息', showClose: true })">可关闭的消息</x-button>
  </div>
</div>

```vue
<template>
  <x-button @click="Message({ message: '可关闭的消息', showClose: true })">
    可关闭的消息
  </x-button>
</template>

<script setup>
import { Message } from '@xto/feedback'
</script>
```

## 文字居中

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="Message({ message: '居中的消息', center: true })">居中</x-button>
  </div>
</div>

```vue
<template>
  <x-button @click="Message({ message: '居中的消息', center: true })">居中</x-button>
</template>

<script setup>
import { Message } from '@xto/feedback'
</script>
```

## 手动关闭

Message 返回一个实例，可以通过 `close` 方法手动关闭。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleClose">3秒后自动关闭</x-button>
  </div>
</div>

```vue
<template>
  <x-button @click="handleClose">手动关闭</x-button>
</template>

<script setup>
import { Message } from '@xto/feedback'

const handleClose = () => {
  const instance = Message({
    message: '这条消息将在3秒后关闭',
    duration: 0 // 不自动关闭
  })

  setTimeout(() => {
    instance.close()
  }, 3000)
}
</script>
```

## 全局方法

调用 `Message.closeAll()` 可以关闭所有消息。

```js
import { Message } from '@xto/feedback'

// 关闭所有消息
Message.closeAll()
```

## API

### Message 方法

| 方法名 | 说明 | 参数 |
|-------|------|------|
| Message | 显示消息提示 | `string \| MessageOptions` |
| Message.success | 显示成功消息 | `string \| MessageOptions` |
| Message.warning | 显示警告消息 | `string \| MessageOptions` |
| Message.info | 显示信息消息 | `string \| MessageOptions` |
| Message.error | 显示错误消息 | `string \| MessageOptions` |
| Message.closeAll | 关闭所有消息 | — |

### MessageOptions

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| message | 消息文字 | `string` | — |
| type | 消息类型 | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` |
| duration | 显示时间，毫秒。设为 0 则不会自动关闭 | `number` | `3000` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |
| center | 文字是否居中 | `boolean` | `false` |
| offset | Message 距离窗口顶部的偏移量 | `number` | `20` |
| customClass | 自定义类名 | `string` | — |
| onClose | 关闭时的回调函数 | `() => void` | — |

### 返回值

Message 方法返回一个 `MessageInstance` 对象：

| 属性 | 说明 | 类型 |
|-----|------|------|
| close | 关闭当前消息 | `() => void` |