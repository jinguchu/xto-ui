# 快速开始

## 引入组件

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件
import { Button, Card } from '@xto/base'
import { Input, Switch } from '@xto/form'

const app = createApp(App)

// 全局注册
app.component('PButton', Button)
app.component('PInput', Input)
app.component('PCard', Card)

app.mount('#app')
```

## 使用

```vue
<template>
  <div>
    <PButton type="primary">主要按钮</PButton>
    <PInput v-model="value" placeholder="请输入内容..." />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 按需引入

```ts
import { Button } from '@xto/base'
import { Input } from '@xto/form'
import { Card, Tag } from '@xto/data'
```

## 下一步

- [主题定制](/guide/theming) - 自定义外观和样式
- [组件文档](/components/base/button) - 浏览所有组件