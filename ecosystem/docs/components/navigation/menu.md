# Menu 菜单

收起展开菜单，适合有多级层级关系的菜单展示。

<script setup>
import { ref } from 'vue'
const menuActive1 = ref('1')
const menuActive2 = ref('1')
const menuActive3 = ref('2-1')
const menuActive4 = ref('1')
const isCollapse = ref(false)
const menuActive5 = ref('1')
</script>

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-menu v-model="menuActive1" style="width: 200px">
      <x-menu-item index="1">处理中心</x-menu-item>
      <x-menu-item index="2">我的工作台</x-menu-item>
      <x-menu-item index="3">消息中心</x-menu-item>
      <x-menu-item index="4">订单管理</x-menu-item>
    </x-menu>
  </div>
</div>

```vue
<template>
  <x-menu v-model="activeIndex">
    <x-menu-item index="1">处理中心</x-menu-item>
    <x-menu-item index="2">我的工作台</x-menu-item>
    <x-menu-item index="3">消息中心</x-menu-item>
  </x-menu>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
</script>
```

## 水平菜单

<div class="demo-block">
  <div class="demo-preview">
    <x-menu v-model="menuActive2" mode="horizontal">
      <x-menu-item index="1">处理中心</x-menu-item>
      <x-menu-item index="2">我的工作台</x-menu-item>
      <x-menu-item index="3">消息中心</x-menu-item>
    </x-menu>
  </div>
</div>

```vue
<template>
  <x-menu v-model="activeIndex" mode="horizontal">
    <x-menu-item index="1">处理中心</x-menu-item>
    <x-menu-item index="2">我的工作台</x-menu-item>
  </x-menu>
</template>
```

## 子菜单 SubMenu

使用 `x-sub-menu` 组件实现多级嵌套菜单。

<div class="demo-block">
  <div class="demo-preview">
    <x-menu v-model="menuActive3" style="width: 220px">
      <x-menu-item index="1">处理中心</x-menu-item>
      <x-sub-menu index="2" title="我的工作台">
        <x-menu-item index="2-1">选项1</x-menu-item>
        <x-menu-item index="2-2">选项2</x-menu-item>
        <x-menu-item index="2-3">选项3</x-menu-item>
      </x-sub-menu>
      <x-sub-menu index="3" title="消息中心">
        <x-menu-item index="3-1">系统消息</x-menu-item>
        <x-menu-item index="3-2">用户消息</x-menu-item>
      </x-sub-menu>
      <x-menu-item index="4">订单管理</x-menu-item>
    </x-menu>
  </div>
</div>

```vue
<template>
  <x-menu v-model="activeIndex">
    <x-menu-item index="1">处理中心</x-menu-item>
    <x-sub-menu index="2" title="我的工作台">
      <x-menu-item index="2-1">选项1</x-menu-item>
      <x-menu-item index="2-2">选项2</x-menu-item>
      <x-menu-item index="2-3">选项3</x-menu-item>
    </x-sub-menu>
    <x-sub-menu index="3" title="消息中心">
      <x-menu-item index="3-1">系统消息</x-menu-item>
      <x-menu-item index="3-2">用户消息</x-menu-item>
    </x-sub-menu>
  </x-menu>
</template>
```

## 侧栏菜单

结合布局组件实现完整的侧边栏导航。

### 使用 icon 属性

通过 `icon` 属性直接指定图标名称，组件会自动使用 Icon 组件渲染。

<div class="demo-block">
  <div class="demo-preview" style="height: 400px; display: flex;">
    <x-menu v-model="menuActive4" :collapse="isCollapse" style="height: 100%;">
      <x-menu-item index="1" icon="home">首页</x-menu-item>
      <x-sub-menu index="2" icon="system" title="系统管理">
        <x-menu-item index="2-1">用户管理</x-menu-item>
        <x-menu-item index="2-2">角色管理</x-menu-item>
        <x-menu-item index="2-3">权限管理</x-menu-item>
      </x-sub-menu>
      <x-sub-menu index="3" icon="chart" title="数据中心">
        <x-menu-item index="3-1">数据概览</x-menu-item>
        <x-menu-item index="3-2">报表中心</x-menu-item>
      </x-sub-menu>
      <x-menu-item index="4" icon="log">日志管理</x-menu-item>
    </x-menu>
    <div style="flex: 1; padding: 20px; background: #f5f7fa;">
      <x-button size="small" @click="isCollapse = !isCollapse">
        <x-icon :name="isCollapse ? 'sidebar-expand' : 'sidebar-fold'" :size="16" style="margin-right: 4px;" />
        {{ isCollapse ? '展开' : '收起' }}侧栏
      </x-button>
      <p style="margin-top: 20px; color: #909399;">点击按钮切换侧栏折叠状态</p>
    </div>
  </div>
</div>

```vue
<template>
  <div style="display: flex; height: 100%;">
    <x-menu v-model="activeIndex" :collapse="isCollapse">
      <x-menu-item index="1" icon="home">首页</x-menu-item>
      <x-sub-menu index="2" icon="system" title="系统管理">
        <x-menu-item index="2-1">用户管理</x-menu-item>
        <x-menu-item index="2-2">角色管理</x-menu-item>
        <x-menu-item index="2-3">权限管理</x-menu-item>
      </x-sub-menu>
      <x-sub-menu index="3" icon="chart" title="数据中心">
        <x-menu-item index="3-1">数据概览</x-menu-item>
        <x-menu-item index="3-2">报表中心</x-menu-item>
      </x-sub-menu>
      <x-menu-item index="4" icon="log">日志管理</x-menu-item>
    </x-menu>
    <div style="flex: 1;">内容区域</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const isCollapse = ref(false)
</script>
```

### 自定义图标

如果需要自定义图标样式或使用自定义图标，可以使用 `#icon` 插槽。

<div class="demo-block">
  <div class="demo-preview" style="height: 300px; display: flex;">
    <x-menu v-model="menuActive4" :collapse="isCollapse" style="height: 100%;">
      <x-menu-item index="1">
        <template #icon><x-icon name="home" :size="20" color="#409eff" /></template>
        首页
      </x-menu-item>
      <x-sub-menu index="2">
        <template #icon><x-icon name="system" :size="20" color="#67c23a" /></template>
        <template #title>系统管理</template>
        <x-menu-item index="2-1">用户管理</x-menu-item>
        <x-menu-item index="2-2">角色管理</x-menu-item>
      </x-sub-menu>
      <x-menu-item index="3">
        <template #icon><x-icon name="log" :size="20" color="#e6a23c" /></template>
        日志管理
      </x-menu-item>
    </x-menu>
    <div style="flex: 1; padding: 20px; background: #f5f7fa;">
      <x-button size="small" @click="isCollapse = !isCollapse">
        {{ isCollapse ? '展开' : '收起' }}侧栏
      </x-button>
    </div>
  </div>
</div>

```vue
<template>
  <x-menu v-model="activeIndex" :collapse="isCollapse">
    <x-menu-item index="1">
      <template #icon><x-icon name="home" :size="20" color="#409eff" /></template>
      首页
    </x-menu-item>
    <x-sub-menu index="2">
      <template #icon><x-icon name="system" :size="20" color="#67c23a" /></template>
      <template #title>系统管理</template>
      <x-menu-item index="2-1">用户管理</x-menu-item>
    </x-sub-menu>
  </x-menu>
</template>
```

### 可用菜单图标

以下图标适合用于菜单导航：

| 图标 | 名称 | 适用场景 |
|-----|------|---------|
| <x-icon name="home" :size="20" /> | home | 首页 |
| <x-icon name="dashboard" :size="20" /> | dashboard | 仪表盘 |
| <x-icon name="system" :size="20" /> | system | 系统管理 |
| <x-icon name="user-manage" :size="20" /> | user-manage | 用户管理 |
| <x-icon name="role" :size="20" /> | role | 角色管理 |
| <x-icon name="permission" :size="20" /> | permission | 权限管理 |
| <x-icon name="chart" :size="20" /> | chart | 数据图表 |
| <x-icon name="chart-pie" :size="20" /> | chart-pie | 饼图 |
| <x-icon name="chart-line" :size="20" /> | chart-line | 折线图 |
| <x-icon name="report" :size="20" /> | report | 报表 |
| <x-icon name="analytics" :size="20" /> | analytics | 数据分析 |
| <x-icon name="log" :size="20" /> | log | 日志 |
| <x-icon name="notification" :size="20" /> | notification | 通知 |
| <x-icon name="app" :size="20" /> | app | 应用 |
| <x-icon name="sidebar-fold" :size="20" /> | sidebar-fold | 收起侧栏 |
| <x-icon name="sidebar-expand" :size="20" /> | sidebar-expand | 展开侧栏 |

## 水平菜单 + 子菜单

<div class="demo-block">
  <div class="demo-preview">
    <x-menu v-model="menuActive5" mode="horizontal">
      <x-menu-item index="1">处理中心</x-menu-item>
      <x-sub-menu index="2" title="我的工作台">
        <x-menu-item index="2-1">选项1</x-menu-item>
        <x-menu-item index="2-2">选项2</x-menu-item>
        <x-menu-item index="2-3">选项3</x-menu-item>
      </x-sub-menu>
      <x-menu-item index="3">消息中心</x-menu-item>
      <x-sub-menu index="4" title="订单管理">
        <x-menu-item index="4-1">全部订单</x-menu-item>
        <x-menu-item index="4-2">待付款</x-menu-item>
        <x-menu-item index="4-3">已完成</x-menu-item>
      </x-sub-menu>
    </x-menu>
  </div>
</div>

```vue
<template>
  <x-menu v-model="activeIndex" mode="horizontal">
    <x-menu-item index="1">处理中心</x-menu-item>
    <x-sub-menu index="2" title="我的工作台">
      <x-menu-item index="2-1">选项1</x-menu-item>
      <x-menu-item index="2-2">选项2</x-menu-item>
    </x-sub-menu>
  </x-menu>
</template>
```

## API

### Menu Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue / v-model | 当前激活菜单的 index | `string` | — |
| mode | 模式 | `'horizontal' \| 'vertical'` | `'vertical'` |
| collapse | 是否水平折叠收起菜单 | `boolean` | `false` |
| backgroundColor | 菜单背景色 | `string` | `'#fff'` |
| textColor | 文字颜色 | `string` | `'#303133'` |
| activeTextColor | 激活文字颜色 | `string` | `'#409eff'` |
| defaultOpeneds | 默认展开的 SubMenu 索引数组 | `string[]` | `[]` |
| router | 是否使用 vue-router 模式 | `boolean` | `false` |

### Menu Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| select | 菜单激活时触发 | `(index: string, indexPath: string[])` |
| open | SubMenu 展开时触发 | `(index: string, indexPath: string[])` |
| close | SubMenu 收起时触发 | `(index: string, indexPath: string[])` |

### MenuItem Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| index | 唯一标识 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 图标名称，传入 Icon 组件支持的图标名 | `string` | — |

### MenuItem Slots

| 插槽名 | 说明 |
|-------|------|
| default | 菜单项文字内容 |
| icon | 自定义图标内容，优先级高于 icon 属性 |

### SubMenu Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| index | 唯一标识 | `string` | — |
| title | 子菜单标题 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 图标名称，传入 Icon 组件支持的图标名 | `string` | — |

### SubMenu Slots

| 插槽名 | 说明 |
|-------|------|
| default | 菜单项内容 |
| title | 自定义标题内容 |
| icon | 自定义图标内容，优先级高于 icon 属性 |

### MenuItemGroup Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 分组标题 | `string` | — |