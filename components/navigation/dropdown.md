# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

移动到下拉菜单上，展开更多操作。

```vue
<template>
  <x-dropdown>
    <x-button type="primary">
      下拉菜单
    </x-button>
    <template #dropdown>
      <x-dropdown-menu>
        <x-dropdown-item>黄金糕</x-dropdown-item>
        <x-dropdown-item>狮子头</x-dropdown-item>
        <x-dropdown-item>螺蛳粉</x-dropdown-item>
        <x-dropdown-item>双皮奶</x-dropdown-item>
      </x-dropdown-menu>
    </template>
  </x-dropdown>
</template>

<script setup>
import { Dropdown, DropdownMenu, DropdownItem } from '@xto/navigation'
import { Button } from '@xto/base'
</script>
```

## 触发方式

可以配置 click 激活或者 hover 激活。

```vue
<template>
  <x-dropdown trigger="click">
    <x-button>点击触发</x-button>
    <template #dropdown>
      <x-dropdown-menu>
        <x-dropdown-item>黄金糕</x-dropdown-item>
        <x-dropdown-item>狮子头</x-dropdown-item>
      </x-dropdown-menu>
    </template>
  </x-dropdown>
</template>
```

## 带有分隔线和禁用项

```vue
<template>
  <x-dropdown>
    <x-button type="primary">下拉菜单</x-button>
    <template #dropdown>
      <x-dropdown-menu>
        <x-dropdown-item>黄金糕</x-dropdown-item>
        <x-dropdown-item divided>狮子头</x-dropdown-item>
        <x-dropdown-item disabled>螺蛳粉</x-dropdown-item>
        <x-dropdown-item>双皮奶</x-dropdown-item>
      </x-dropdown-menu>
    </template>
  </x-dropdown>
</template>
```

## API

### Dropdown Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| trigger | 触发方式 | `'hover' \| 'click'` | `'hover'` |
| placement | 菜单弹出位置 | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'` | `'bottom'` |
| disabled | 是否禁用 | `boolean` | `false` |
| hideOnClick | 点击菜单项后是否隐藏 | `boolean` | `true` |

### Dropdown Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| visible-change | 下拉框出现/隐藏时触发 | `(visible: boolean)` |
| click | 点击菜单项后触发 | `(command: string \| number \| object)` |
| command | 点击菜单项后触发 | `(command: string \| number \| object)` |

### DropdownItem Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| command | 点击菜单项后触发的命令 | `string \| number \| object` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| divided | 是否显示分隔线 | `boolean` | `false` |
| icon | 图标 | `string` | — |

### Dropdown Slots

| 插槽名 | 说明 |
|-------|------|
| default | 触发下拉菜单的元素 |
| dropdown | 下拉菜单内容 |