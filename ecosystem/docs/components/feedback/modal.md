# Modal 对话框

在保留当前页面状态的情况下，弹出对话框。

<script setup>
import { ref } from 'vue'
const modalVisible1 = ref(false)
const modalVisible2 = ref(false)
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-button type="primary" @click="modalVisible1 = true">打开对话框</x-button>
    <x-modal v-model="modalVisible1" title="提示" width="400px">
      <p>这是一段内容，对话框可以包含任何内容。</p>
    </x-modal>
  </div>
</div>

```vue
<template>
  <x-button @click="visible = true">打开对话框</x-button>
  <x-modal v-model="visible" title="提示">
    <p>这是一段内容</p>
  </x-modal>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```

## 自定义内容

对话框的内容可以是任何组件或内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-button type="success" @click="modalVisible2 = true">打开表单对话框</x-button>
    <x-modal v-model="modalVisible2" title="用户信息" width="500px">
      <div style="padding: 20px 0">
        <div style="margin-bottom: 16px;">
          <label style="display: inline-block; width: 80px;">姓名：</label>
          <x-input placeholder="请输入姓名" style="width: 200px" />
        </div>
        <div style="margin-bottom: 16px;">
          <label style="display: inline-block; width: 80px;">邮箱：</label>
          <x-input placeholder="请输入邮箱" style="width: 200px" />
        </div>
      </div>
    </x-modal>
  </div>
</div>

```vue
<template>
  <x-modal v-model="visible" title="表单">
    <x-input v-model="form.name" placeholder="请输入姓名" />
  </x-modal>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 是否显示对话框 | `boolean` | `false` |
| title | 对话框标题 | `string` | — |
| width | 对话框宽度 | `string \| number` | `'50%'` |
| top | 对话框 CSS 中的 top 值 | `string` | `'15vh'` |
| modal | 是否显示遮罩层 | `boolean` | `true` |
| closeOnClickModal | 是否可以通过点击遮罩层关闭对话框 | `boolean` | `true` |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭对话框 | `boolean` | `true` |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| center | 是否对齐标题和底部居中 | `boolean` | `false` |
| destroyOnClose | 关闭时销毁元素 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值改变时触发 | `(value: boolean)` |
| open | 打开时触发 | — |
| close | 关闭时触发 | — |