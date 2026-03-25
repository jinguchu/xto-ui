# Drawer 抽屉

有些时候，对话框并不满足我们的需求，这时可以使用抽屉组件。

<script setup>
import { ref } from 'vue'
const drawerVisible1 = ref(false)
const drawerVisibleLtr = ref(false)
const drawerVisibleRtl = ref(false)
const drawerVisibleTtb = ref(false)
const drawerVisibleBtt = ref(false)
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-button type="primary" @click="drawerVisible1 = true">打开抽屉</x-button>
    <x-drawer v-model="drawerVisible1" title="我是标题" size="400px">
      <div style="padding: 20px">
        <p>我来啦！</p>
        <p>这是抽屉组件的内容区域。</p>
        <p>可以放置任何你想要的内容。</p>
      </div>
    </x-drawer>
  </div>
</div>

```vue
<template>
  <x-button @click="visible = true">打开抽屉</x-button>
  <x-drawer v-model="visible" title="我是标题">
    <p>我来啦！</p>
  </x-drawer>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```

## 不同方向

<div class="demo-block">
  <div class="demo-preview">
    <x-space>
      <x-button @click="drawerVisibleLtr = true">从左到右</x-button>
      <x-button @click="drawerVisibleRtl = true">从右到左</x-button>
      <x-button @click="drawerVisibleTtb = true">从上到下</x-button>
      <x-button @click="drawerVisibleBtt = true">从下到上</x-button>
    </x-space>
    <x-drawer v-model="drawerVisibleLtr" direction="ltr" title="从左到右" size="300px">从左到右打开</x-drawer>
    <x-drawer v-model="drawerVisibleRtl" direction="rtl" title="从右到左" size="300px">从右到左打开</x-drawer>
    <x-drawer v-model="drawerVisibleTtb" direction="ttb" title="从上到下" size="200px">从上到下打开</x-drawer>
    <x-drawer v-model="drawerVisibleBtt" direction="btt" title="从下到上" size="200px">从下到上打开</x-drawer>
  </div>
</div>

```vue
<template>
  <x-button @click="visible = true">从左到右</x-button>
  <x-drawer v-model="visible" direction="ltr">从左到右</x-drawer>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 是否显示抽屉 | `boolean` | `false` |
| title | 抽屉标题 | `string` | — |
| direction | 打开方向 | `'ltr' \| 'rtl' \| 'ttb' \| 'btt'` | `'rtl'` |
| size | 抽屉大小 | `string \| number` | `'30%'` |
| withHeader | 是否显示标题 | `boolean` | `true` |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| closeOnClickModal | 点击遮罩层关闭 | `boolean` | `true` |
| destroyOnClose | 关闭时销毁元素 | `boolean` | `false` |

### Events

| 事件名 | 说明 |
|-------|------|
| update:modelValue | 值改变时触发 |
| open | 打开时触发 |
| close | 关闭时触发 |