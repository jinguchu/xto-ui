# MessageBox 消息弹框

模拟系统的消息提示框，同时支持 alert、confirm 和 prompt 三种模式。

<script setup>
import { MessageBox } from '@xto/feedback'

const handleAlert = () => {
  MessageBox.alert('这是一条消息提示', '提示')
}

const handleSuccess = () => {
  MessageBox.alert('操作成功！', '成功', {
    type: 'success'
  })
}

const handleWarning = () => {
  MessageBox.alert('这是一条警告提示', '警告', {
    type: 'warning'
  })
}

const handleError = () => {
  MessageBox.alert('这是一条错误提示', '错误', {
    type: 'error'
  })
}

const handleConfirm = async () => {
  try {
    const result = await MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      type: 'warning'
    })
    if (result.action === 'confirm') {
      MessageBox.alert('删除成功!', '提示')
    }
  } catch {
    // 用户取消
  }
}

const handlePrompt = async () => {
  try {
    const result = await MessageBox.prompt('请输入邮箱', '提示', {
      inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: '邮箱格式不正确'
    })
    if (result.action === 'confirm') {
      MessageBox.alert(`你输入的邮箱是: ${result.value}`, '提示')
    }
  } catch {
    // 用户取消
  }
}

const handleCustom = async () => {
  const result = await MessageBox.confirm('测试内容', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    center: true
  })
}
</script>

## 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleAlert">消息提示</x-button>
    <x-button @click="handleSuccess" style="margin-left: 10px;">成功</x-button>
    <x-button @click="handleWarning" style="margin-left: 10px;">警告</x-button>
    <x-button @click="handleError" style="margin-left: 10px;">错误</x-button>
  </div>
</div>

```vue
<template>
  <x-button @click="handleAlert">消息提示</x-button>
  <x-button @click="handleSuccess">成功</x-button>
</template>

<script setup>
import { MessageBox } from '@xto/feedback'

const handleAlert = () => {
  MessageBox.alert('这是一条消息提示', '提示')
}

const handleSuccess = () => {
  MessageBox.alert('操作成功！', '成功', {
    type: 'success'
  })
}
</script>
```

## 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作。

<div class="demo-block">
  <div class="demo-preview">
    <x-button type="danger" @click="handleConfirm">删除确认</x-button>
  </div>
</div>

```vue
<template>
  <x-button type="danger" @click="handleConfirm">删除确认</x-button>
</template>

<script setup>
import { MessageBox } from '@xto/feedback'

const handleConfirm = async () => {
  try {
    const result = await MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      type: 'warning'
    })
    if (result.action === 'confirm') {
      // 用户确认，执行删除操作
    }
  } catch {
    // 用户取消
  }
}
</script>
```

## 提交内容

当用户进行操作时会被触发，需要用户输入内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-button type="primary" @click="handlePrompt">输入邮箱</x-button>
  </div>
</div>

```vue
<template>
  <x-button type="primary" @click="handlePrompt">输入邮箱</x-button>
</template>

<script setup>
import { MessageBox } from '@xto/feedback'

const handlePrompt = async () => {
  try {
    const result = await MessageBox.prompt('请输入邮箱', '提示', {
      inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: '邮箱格式不正确'
    })
    if (result.action === 'confirm') {
      console.log('用户输入:', result.value)
    }
  } catch {
    // 用户取消
  }
}
</script>
```

## 自定义

可自定义按钮文字和样式。

<div class="demo-block">
  <div class="demo-preview">
    <x-button @click="handleCustom">自定义按钮</x-button>
  </div>
</div>

```vue
<script setup>
import { MessageBox } from '@xto/feedback'

const handleCustom = async () => {
  const result = await MessageBox.confirm('测试内容', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    center: true
  })
}
</script>
```

## API

### 方法

| 方法名 | 说明 | 参数 |
|-------|------|------|
| MessageBox.alert | 显示消息提示框 | `(message, title?, options?)` |
| MessageBox.confirm | 显示确认消息框 | `(message, title?, options?)` |
| MessageBox.prompt | 显示输入消息框 | `(message, title?, options?)` |
| MessageBox.closeAll | 关闭所有消息框 | — |

### MessageBoxOptions

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题 | `string` | `'提示'` |
| message | 消息内容 | `string` | — |
| type | 消息类型 | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` |
| confirmButtonText | 确认按钮文字 | `string` | `'确定'` |
| cancelButtonText | 取消按钮文字 | `string` | `'取消'` |
| showConfirmButton | 是否显示确认按钮 | `boolean` | `true` |
| showCancelButton | 是否显示取消按钮 | `boolean` | `false` |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| closeOnClickModal | 点击遮罩层是否关闭 | `boolean` | `true` |
| dangerouslyUseHTMLString | 是否将 message 作为 HTML 渲染 | `boolean` | `false` |
| center | 是否居中布局 | `boolean` | `false` |
| showInput | 是否显示输入框 (prompt) | `boolean` | `false` |
| inputPlaceholder | 输入框占位符 | `string` | `'请输入'` |
| inputType | 输入框类型 | `string` | `'text'` |
| inputPattern | 输入框验证正则 | `RegExp` | — |
| inputErrorMessage | 输入框验证失败提示 | `string` | — |
| inputValue | 输入框默认值 | `string` | `''` |
| customClass | 自定义类名 | `string` | — |

### 返回值

MessageBox 方法返回一个 Promise，resolve 的值是 MessageBoxResult：

| 属性 | 说明 | 类型 |
|-----|------|------|
| action | 用户的操作 | `'confirm' \| 'cancel' \| 'close'` |
| value | 输入框的值 (仅 prompt) | `string` |