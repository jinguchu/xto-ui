# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` 属性来定义按钮的样式。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-button>默认按钮</x-button>
      <x-button type="primary">主要按钮</x-button>
      <x-button type="success">成功按钮</x-button>
      <x-button type="warning">警告按钮</x-button>
      <x-button type="danger">危险按钮</x-button>
      <x-button type="info">信息按钮</x-button>
    </div>
  </div>
</div>

```vue
<template>
  <x-button>默认按钮</x-button>
  <x-button type="primary">主要按钮</x-button>
  <x-button type="success">成功按钮</x-button>
  <x-button type="warning">警告按钮</x-button>
  <x-button type="danger">危险按钮</x-button>
  <x-button type="info">信息按钮</x-button>
</template>
```

## 禁用状态

使用 `disabled` 属性来控制按钮是否禁用。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-button disabled>默认按钮</x-button>
      <x-button type="primary" disabled>主要按钮</x-button>
      <x-button type="success" disabled>成功按钮</x-button>
    </div>
  </div>
</div>

```vue
<template>
  <x-button disabled>默认按钮</x-button>
  <x-button type="primary" disabled>主要按钮</x-button>
  <x-button type="success" disabled>成功按钮</x-button>
</template>
```

## 不同尺寸

提供三种不同尺寸的按钮。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-button size="small">小型按钮</x-button>
      <x-button>默认按钮</x-button>
      <x-button size="large">大型按钮</x-button>
    </div>
  </div>
</div>

```vue
<template>
  <x-button size="small">小型按钮</x-button>
  <x-button>默认按钮</x-button>
  <x-button size="large">大型按钮</x-button>
</template>
```

## 加载状态

通过 `loading` 属性设置按钮加载状态。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-button type="primary" :loading="true">加载中</x-button>
    </div>
  </div>
</div>

```vue
<template>
  <x-button type="primary" :loading="true">加载中</x-button>
</template>
```

## 朴素按钮

通过 `plain` 属性设置朴素按钮。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-button type="primary" plain>主要按钮</x-button>
      <x-button type="success" plain>成功按钮</x-button>
      <x-button type="warning" plain>警告按钮</x-button>
      <x-button type="danger" plain>危险按钮</x-button>
    </div>
  </div>
</div>

```vue
<template>
  <x-button type="primary" plain>主要按钮</x-button>
  <x-button type="success" plain>成功按钮</x-button>
  <x-button type="warning" plain>警告按钮</x-button>
  <x-button type="danger" plain>危险按钮</x-button>
</template>
```

## 圆角按钮

通过 `round` 属性设置圆角按钮。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-button type="primary" round>主要按钮</x-button>
      <x-button type="success" round>成功按钮</x-button>
    </div>
  </div>
</div>

```vue
<template>
  <x-button type="primary" round>主要按钮</x-button>
  <x-button type="success" round>成功按钮</x-button>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| type | 按钮类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | `'default'` |
| size | 按钮尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| plain | 是否朴素按钮 | `boolean` | `false` |
| round | 是否圆角按钮 | `boolean` | `false` |
| circle | 是否圆形按钮 | `boolean` | `false` |
| icon | 图标 | `string` | — |
| nativeType | 原生 type 属性 | `'button' \| 'submit' \| 'reset'` | `'button'` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|----------|
| click | 点击按钮时触发 | `(event: MouseEvent) => void` |

### Slots

| 插槽名 | 说明 |
|-------|------|
| default | 按钮内容 |
| icon | 自定义图标 |