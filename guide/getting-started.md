# 快速上手

## 安装

```bash
# 使用 pnpm（推荐）
pnpm add @xto/core @xto/base @xto/form @xto/data

# 使用 npm
npm install @xto/core @xto/base @xto/form @xto/data

# 使用 yarn
yarn add @xto/core @xto/base @xto/form @xto/data
```

## 快速开始

### 1. 引入组件

```ts
import { Button, Input, Card } from '@xto/base'
import '@xto/base/dist/style.css'
```

### 2. 在模板中使用

```vue
<template>
  <Card header="欢迎">
    <Input v-model="text" placeholder="请输入内容" />
    <Button type="primary" @click="handleClick">
      提交
    </Button>
  </Card>
</template>
```

### 3. 全局引入（不推荐）

```ts
import XtoUI from '@xto/ui'
import '@xto/ui/dist/style.css'

app.use(XtoUI)
```

## 按需引入

推荐只引入需要的组件：

```ts
import { Button } from '@xto/base'
import { Input } from '@xto/form'
```