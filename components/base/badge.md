# Badge 徽标

出现在图标或文字右上角的徽标。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-badge :value="12">
        <x-button>消息</x-button>
      </x-badge>
      <x-badge :value="3">
        <x-button>评论</x-button>
      </x-badge>
      <x-badge :value="1" type="primary">
        <x-button>回复</x-button>
      </x-badge>
    </div>
  </div>
</div>

```vue
<template>
  <x-badge :value="12">
    <x-button>消息</x-button>
  </x-badge>
</template>

<script setup>
import { Badge, Button } from '@xto/base'
</script>
```

## 最大值

使用 `max` 属性设置最大值，超过最大值会显示 `{max}+`。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-badge :value="200" :max="99">
        <x-button>消息</x-button>
      </x-badge>
      <x-badge :value="100" :max="10">
        <x-button>评论</x-button>
      </x-badge>
    </div>
  </div>
</div>

```vue
<template>
  <x-badge :value="200" :max="99">
    <x-button>消息</x-button>
  </x-badge>
</template>
```

## 小红点

使用 `dot` 属性显示小红点。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-badge dot>
        <x-button>通知</x-button>
      </x-badge>
      <x-badge dot type="warning">
        <x-button>提醒</x-button>
      </x-badge>
    </div>
  </div>
</div>

```vue
<template>
  <x-badge dot>
    <x-button>通知</x-button>
  </x-badge>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| value | 徽标值 | `number \| string` | — |
| max | 最大值 | `number` | — |
| dot | 是否显示小红点 | `boolean` | `false` |
| hidden | 是否隐藏徽标 | `boolean` | `false` |
| type | 徽标类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'danger'` |