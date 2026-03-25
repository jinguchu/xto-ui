# Progress 进度条

用于展示操作进度。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-progress :percentage="50" style="margin-bottom: 12px" />
    <x-progress :percentage="75" style="margin-bottom: 12px" />
    <x-progress :percentage="100" />
  </div>
</div>

```vue
<template>
  <x-progress :percentage="50" />
</template>

<script setup>
import { Progress } from '@xto/data'
</script>
```

## 不同状态

<div class="demo-block">
  <div class="demo-preview">
    <x-progress :percentage="100" status="success" style="margin-bottom: 12px" />
    <x-progress :percentage="80" status="warning" style="margin-bottom: 12px" />
    <x-progress :percentage="30" status="exception" />
  </div>
</div>

```vue
<template>
  <x-progress :percentage="100" status="success" />
  <x-progress :percentage="80" status="warning" />
  <x-progress :percentage="30" status="exception" />
</template>
```

## 环形进度条

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-progress type="circle" :percentage="75" />
      <x-progress type="circle" :percentage="100" status="success" />
    </div>
  </div>
</div>

```vue
<template>
  <x-progress type="circle" :percentage="75" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| percentage | 百分比 | `number` | `0` |
| type | 类型 | `'line' \| 'circle' \| 'dashboard'` | `'line'` |
| status | 状态 | `'' \| 'success' \| 'warning' \| 'exception'` | `''` |
| strokeWidth | 进度条的宽度 | `number` | `6` |
| color | 进度条背景色 | `string \| string[] \| Function` | `'#409eff'` |
| width | 环形进度条画布宽度 | `number` | `126` |
| showText | 是否显示进度条文字内容 | `boolean` | `true` |