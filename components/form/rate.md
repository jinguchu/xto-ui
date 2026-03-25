# Rate 评分

评分组件。

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(3.5)
const value5 = ref(0)
const value6 = ref(4)
const value7 = ref(3)
const value8 = ref(0)
</script>

## 基础用法

默认评分。

<div class="demo-block">
  <div class="demo-preview">
    <x-rate v-model="value1" />
    <span style="margin-left: 12px;">当前评分: {{ value1 }}</span>
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>
```

## 半星

设置 `allow-half` 允许选择半星。

<div class="demo-block">
  <div class="demo-preview">
    <x-rate v-model="value4" allow-half />
    <span style="margin-left: 12px;">当前评分: {{ value4 }}</span>
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" allow-half />
</template>
```

## 自定义颜色

使用 `colors` 属性自定义不同分数段的颜色。

<div class="demo-block">
  <div class="demo-preview">
    <x-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" />
    <span style="margin-left: 12px;">当前评分: {{ value2 }}</span>
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" />
</template>
```

## 辅助文字

设置 `show-text` 显示辅助文字，使用 `texts` 自定义文字内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-rate v-model="value3" show-text :texts="['极差', '失望', '一般', '满意', '惊喜']" />
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" show-text :texts="['极差', '失望', '一般', '满意', '惊喜']" />
</template>
```

## 显示分数

设置 `show-score` 显示当前分数。

<div class="demo-block">
  <div class="demo-preview">
    <x-rate v-model="value5" show-score />
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" show-score />
</template>
```

## 只读

设置 `readonly` 属性使评分组件只读。

<div class="demo-block">
  <div class="demo-preview">
    <x-rate v-model="value6" readonly show-score />
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" readonly show-score />
</template>
```

## 禁用

设置 `disabled` 属性禁用评分组件。

<div class="demo-block">
  <div class="demo-preview">
    <x-rate v-model="value7" disabled show-score />
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" disabled show-score />
</template>
```

## 不同尺寸

<div class="demo-block">
  <div class="demo-preview">
    <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
      <x-rate v-model="value8" size="large" />
      <x-rate v-model="value8" />
      <x-rate v-model="value8" size="small" />
    </div>
  </div>
</div>

```vue
<template>
  <x-rate v-model="value" size="large" />
  <x-rate v-model="value" />
  <x-rate v-model="value" size="small" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `number` | `0` |
| max | 最大分值 | `number` | `5` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| lowThreshold | 低分和中等分数的界限值 | `number` | `2` |
| highThreshold | 高分和中等分数的界限值 | `number` | `4` |
| colors | 自定义颜色数组，依次为低分、中等、高分颜色 | `string[]` | `['#F7BA2A', '#F7BA2A', '#F7BA2A']` |
| voidColor | 未选中时的颜色 | `string` | `'#C6D1DE'` |
| disabledVoidColor | 禁用时的颜色 | `string` | `'#EFF2F7'` |
| icon | 选中时的图标 | `string` | `'★'` |
| voidIcon | 未选中时的图标 | `string` | `'★'` |
| disabledVoidIcon | 禁用时的图标 | `string` | `'★'` |
| showText | 是否显示辅助文字 | `boolean` | `false` |
| showScore | 是否显示当前分数 | `boolean` | `false` |
| textColor | 辅助文字颜色 | `string` | `'#1F2D3D'` |
| texts | 辅助文字数组 | `string[]` | `['极差', '失望', '一般', '满意', '惊喜']` |
| scoreTemplate | 分数显示模板，`{value}` 会被替换为当前分值 | `string` | `'{value}'` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值改变时触发 | `(value: number)` |
| change | 值改变时触发 | `(value: number)` |