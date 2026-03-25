# Grid 栅格

通过 row 和 col 组件，采用 24 分栏布局。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-row style="margin-bottom: 12px">
      <x-col :span="24"><div style="background: #d3dce6; padding: 10px; text-align: center">col-24</div></x-col>
    </x-row>
    <x-row style="margin-bottom: 12px">
      <x-col :span="12"><div style="background: #d3dce6; padding: 10px; text-align: center">col-12</div></x-col>
      <x-col :span="12"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-12</div></x-col>
    </x-row>
    <x-row style="margin-bottom: 12px">
      <x-col :span="8"><div style="background: #d3dce6; padding: 10px; text-align: center">col-8</div></x-col>
      <x-col :span="8"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-8</div></x-col>
      <x-col :span="8"><div style="background: #d3dce6; padding: 10px; text-align: center">col-8</div></x-col>
    </x-row>
    <x-row>
      <x-col :span="6"><div style="background: #d3dce6; padding: 10px; text-align: center">col-6</div></x-col>
      <x-col :span="6"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-6</div></x-col>
      <x-col :span="6"><div style="background: #d3dce6; padding: 10px; text-align: center">col-6</div></x-col>
      <x-col :span="6"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-6</div></x-col>
    </x-row>
  </div>
</div>

```vue
<template>
  <x-row>
    <x-col :span="24"><div>col-24</div></x-col>
  </x-row>
  <x-row>
    <x-col :span="12"><div>col-12</div></x-col>
    <x-col :span="12"><div>col-12</div></x-col>
  </x-row>
  <x-row>
    <x-col :span="8"><div>col-8</div></x-col>
    <x-col :span="8"><div>col-8</div></x-col>
    <x-col :span="8"><div>col-8</div></x-col>
  </x-row>
</template>

<script setup>
import { Row, Col } from '@xto/layout'
</script>
```

## 分栏间隔

使用 `gutter` 属性设置分栏间隔。

<div class="demo-block">
  <div class="demo-preview">
    <x-row :gutter="20">
      <x-col :span="6"><div style="background: #d3dce6; padding: 10px; text-align: center">col-6</div></x-col>
      <x-col :span="6"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-6</div></x-col>
      <x-col :span="6"><div style="background: #d3dce6; padding: 10px; text-align: center">col-6</div></x-col>
      <x-col :span="6"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-6</div></x-col>
    </x-row>
  </div>
</div>

```vue
<template>
  <x-row :gutter="20">
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
  </x-row>
</template>
```

## 混合布局

<div class="demo-block">
  <div class="demo-preview">
    <x-row style="margin-bottom: 12px">
      <x-col :span="16"><div style="background: #d3dce6; padding: 10px; text-align: center">col-16</div></x-col>
      <x-col :span="8"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-8</div></x-col>
    </x-row>
    <x-row>
      <x-col :span="8"><div style="background: #d3dce6; padding: 10px; text-align: center">col-8</div></x-col>
      <x-col :span="8"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-8</div></x-col>
      <x-col :span="4"><div style="background: #d3dce6; padding: 10px; text-align: center">col-4</div></x-col>
      <x-col :span="4"><div style="background: #e5e9f2; padding: 10px; text-align: center">col-4</div></x-col>
    </x-row>
  </div>
</div>

```vue
<template>
  <x-row>
    <x-col :span="16"><div>col-16</div></x-col>
    <x-col :span="8"><div>col-8</div></x-col>
  </x-row>
</template>
```

## API

### Row Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| gutter | 栅格间隔 | `number \| string` | `0` |
| justify | 水平排列方式 | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between'` | `'start'` |
| align | 垂直排列方式 | `'top' \| 'middle' \| 'bottom'` | `'top'` |

### Col Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| span | 栅格占据的列数 | `number` | `24` |
| offset | 栅格左侧的间隔格数 | `number` | `0` |
| push | 栅格向右移动格数 | `number` | `0` |
| pull | 栅格向左移动格数 | `number` | `0` |