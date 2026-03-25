# Backtop 回到顶部

返回页面顶部的操作按钮。滑动页面即可看到右下方的按钮，显示区域固定为 40px × 40px。

## 基础用法

滑动页面即可看到右下方的按钮。

<div class="demo-block">
  <div class="demo-preview">
    <p style="color: #606266;">向下滚动页面，当滚动距离超过 200px 时，右下角会出现回到顶部按钮。</p>
  </div>
</div>

```vue
<template>
  <x-backtop />
</template>

<script setup>
import { Backtop } from '@xto/feedback'
</script>
```

## 自定义显示高度

通过 `visibility-height` 设置显示按钮的滚动高度阈值。

<div class="demo-block">
  <div class="demo-preview">
    <p style="color: #606266;">设置滚动 100px 后显示按钮。</p>
  </div>
</div>

```vue
<template>
  <x-backtop :visibility-height="100" />
</template>
```

## 自定义位置

通过 `right` 和 `bottom` 设置按钮的位置。

<div class="demo-block">
  <div class="demo-preview">
    <p style="color: #606266;">设置按钮距离右侧 100px，距离底部 100px。</p>
  </div>
</div>

```vue
<template>
  <x-backtop :right="100" :bottom="100" />
</template>
```

## 自定义内容

通过默认插槽自定义按钮内容，显示区域固定为 40px × 40px。

<div class="demo-block">
  <div class="demo-preview">
    <p style="color: #606266;">使用自定义图标或文字。</p>
  </div>
</div>

```vue
<template>
  <x-backtop>
    <span style="font-size: 14px; color: #409eff;">顶部</span>
  </x-backtop>
</template>
```

## 点击事件

点击按钮时触发 `click` 事件。

```vue
<template>
  <x-backtop @click="handleClick" />
</template>

<script setup>
import { Backtop } from '@xto/feedback'

const handleClick = (e) => {
  console.log('点击回到顶部', e)
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| visibilityHeight | 滚动高度达到此参数值才显示 | `number` | `200` |
| right | 距离页面右侧的距离（px） | `number` | `40` |
| bottom | 距离页面底部的距离（px） | `number` | `40` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| click | 点击按钮时触发 | `(event: MouseEvent)` |

### Slots

| 插槽名 | 说明 |
|-------|------|
| default | 自定义默认内容 |