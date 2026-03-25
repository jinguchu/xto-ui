# Icon 图标

语义化的矢量图标，内置 80+ 常用图标。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-icon name="edit" :size="24" />
      <x-icon name="delete" :size="24" />
      <x-icon name="search" :size="24" />
      <x-icon name="setting" :size="24" />
      <x-icon name="user" :size="24" />
    </div>
  </div>
</div>

```vue
<template>
  <x-icon name="edit" />
  <x-icon name="delete" />
  <x-icon name="search" />
</template>

<script setup>
import { Icon } from '@xto/base'
</script>
```

## 图标尺寸

使用 `size` 属性设置图标尺寸。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-icon name="edit" :size="16" />
      <x-icon name="edit" :size="24" />
      <x-icon name="edit" :size="32" />
      <x-icon name="edit" :size="48" />
    </div>
  </div>
</div>

```vue
<template>
  <x-icon name="edit" :size="16" />
  <x-icon name="edit" :size="24" />
  <x-icon name="edit" :size="32" />
</template>
```

## 图标颜色

使用 `color` 属性设置图标颜色。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-icon name="edit" :size="32" color="#409eff" />
      <x-icon name="edit" :size="32" color="#67c23a" />
      <x-icon name="edit" :size="32" color="#e6a23c" />
      <x-icon name="edit" :size="32" color="#f56c6c" />
    </div>
  </div>
</div>

```vue
<template>
  <x-icon name="edit" color="#409eff" />
  <x-icon name="edit" color="#67c23a" />
  <x-icon name="edit" color="#f56c6c" />
</template>
```

## 旋转动画

使用 `spin` 属性使图标旋转。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-icon name="loading" :size="24" spin />
      <x-icon name="refresh" :size="24" spin color="#409eff" />
    </div>
  </div>
</div>

```vue
<template>
  <x-icon name="loading" spin />
  <x-icon name="refresh" spin />
</template>
```

## 线条粗细

使用 `stroke-width` 属性设置线条粗细。

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-icon name="heart" :size="32" :stroke-width="1" />
      <x-icon name="heart" :size="32" :stroke-width="2" />
      <x-icon name="heart" :size="32" :stroke-width="3" />
    </div>
  </div>
</div>

```vue
<template>
  <x-icon name="heart" :stroke-width="1" />
  <x-icon name="heart" :stroke-width="2" />
  <x-icon name="heart" :stroke-width="3" />
</template>
```

## 内置图标列表

### 箭头类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="arrow-up" :size="24" /><span>arrow-up</span></div>
      <div class="icon-item"><x-icon name="arrow-down" :size="24" /><span>arrow-down</span></div>
      <div class="icon-item"><x-icon name="arrow-left" :size="24" /><span>arrow-left</span></div>
      <div class="icon-item"><x-icon name="arrow-right" :size="24" /><span>arrow-right</span></div>
      <div class="icon-item"><x-icon name="arrow-up-bold" :size="24" /><span>arrow-up-bold</span></div>
      <div class="icon-item"><x-icon name="arrow-down-bold" :size="24" /><span>arrow-down-bold</span></div>
      <div class="icon-item"><x-icon name="arrow-left-bold" :size="24" /><span>arrow-left-bold</span></div>
      <div class="icon-item"><x-icon name="arrow-right-bold" :size="24" /><span>arrow-right-bold</span></div>
    </div>
  </div>
</div>

### 操作类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="plus" :size="24" /><span>plus</span></div>
      <div class="icon-item"><x-icon name="minus" :size="24" /><span>minus</span></div>
      <div class="icon-item"><x-icon name="close" :size="24" /><span>close</span></div>
      <div class="icon-item"><x-icon name="check" :size="24" /><span>check</span></div>
      <div class="icon-item"><x-icon name="check-bold" :size="24" /><span>check-bold</span></div>
      <div class="icon-item"><x-icon name="edit" :size="24" /><span>edit</span></div>
      <div class="icon-item"><x-icon name="delete" :size="24" /><span>delete</span></div>
      <div class="icon-item"><x-icon name="copy" :size="24" /><span>copy</span></div>
      <div class="icon-item"><x-icon name="download" :size="24" /><span>download</span></div>
      <div class="icon-item"><x-icon name="upload" :size="24" /><span>upload</span></div>
      <div class="icon-item"><x-icon name="refresh" :size="24" /><span>refresh</span></div>
      <div class="icon-item"><x-icon name="search" :size="24" /><span>search</span></div>
      <div class="icon-item"><x-icon name="filter" :size="24" /><span>filter</span></div>
      <div class="icon-item"><x-icon name="more" :size="24" /><span>more</span></div>
      <div class="icon-item"><x-icon name="more-h" :size="24" /><span>more-h</span></div>
      <div class="icon-item"><x-icon name="setting" :size="24" /><span>setting</span></div>
      <div class="icon-item"><x-icon name="share" :size="24" /><span>share</span></div>
    </div>
  </div>
</div>

### 状态类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="loading" :size="24" /><span>loading</span></div>
      <div class="icon-item"><x-icon name="info" :size="24" /><span>info</span></div>
      <div class="icon-item"><x-icon name="success" :size="24" /><span>success</span></div>
      <div class="icon-item"><x-icon name="warning" :size="24" /><span>warning</span></div>
      <div class="icon-item"><x-icon name="error" :size="24" /><span>error</span></div>
      <div class="icon-item"><x-icon name="question" :size="24" /><span>question</span></div>
    </div>
  </div>
</div>

### 用户类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="user" :size="24" /><span>user</span></div>
      <div class="icon-item"><x-icon name="user-add" :size="24" /><span>user-add</span></div>
      <div class="icon-item"><x-icon name="user-group" :size="24" /><span>user-group</span></div>
      <div class="icon-item"><x-icon name="logout" :size="24" /><span>logout</span></div>
      <div class="icon-item"><x-icon name="login" :size="24" /><span>login</span></div>
    </div>
  </div>
</div>

### 文件类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="file" :size="24" /><span>file</span></div>
      <div class="icon-item"><x-icon name="folder" :size="24" /><span>folder</span></div>
      <div class="icon-item"><x-icon name="folder-open" :size="24" /><span>folder-open</span></div>
      <div class="icon-item"><x-icon name="document" :size="24" /><span>document</span></div>
    </div>
  </div>
</div>

### 媒体类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="image" :size="24" /><span>image</span></div>
      <div class="icon-item"><x-icon name="video" :size="24" /><span>video</span></div>
      <div class="icon-item"><x-icon name="music" :size="24" /><span>music</span></div>
      <div class="icon-item"><x-icon name="camera" :size="24" /><span>camera</span></div>
    </div>
  </div>
</div>

### 通信类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="mail" :size="24" /><span>mail</span></div>
      <div class="icon-item"><x-icon name="phone" :size="24" /><span>phone</span></div>
      <div class="icon-item"><x-icon name="chat" :size="24" /><span>chat</span></div>
      <div class="icon-item"><x-icon name="bell" :size="24" /><span>bell</span></div>
      <div class="icon-item"><x-icon name="message" :size="24" /><span>message</span></div>
    </div>
  </div>
</div>

### 视图类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="eye" :size="24" /><span>eye</span></div>
      <div class="icon-item"><x-icon name="eye-off" :size="24" /><span>eye-off</span></div>
    </div>
  </div>
</div>

### 时间类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="calendar" :size="24" /><span>calendar</span></div>
      <div class="icon-item"><x-icon name="clock" :size="24" /><span>clock</span></div>
      <div class="icon-item"><x-icon name="history" :size="24" /><span>history</span></div>
      <div class="icon-item"><x-icon name="timer" :size="24" /><span>timer</span></div>
    </div>
  </div>
</div>

### 位置类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="location" :size="24" /><span>location</span></div>
      <div class="icon-item"><x-icon name="map" :size="24" /><span>map</span></div>
      <div class="icon-item"><x-icon name="globe" :size="24" /><span>globe</span></div>
    </div>
  </div>
</div>

### 其他图标

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="star" :size="24" /><span>star</span></div>
      <div class="icon-item"><x-icon name="heart" :size="24" /><span>heart</span></div>
      <div class="icon-item"><x-icon name="thumb-up" :size="24" /><span>thumb-up</span></div>
      <div class="icon-item"><x-icon name="link" :size="24" /><span>link</span></div>
      <div class="icon-item"><x-icon name="external-link" :size="24" /><span>external-link</span></div>
      <div class="icon-item"><x-icon name="lock" :size="24" /><span>lock</span></div>
      <div class="icon-item"><x-icon name="unlock" :size="24" /><span>unlock</span></div>
      <div class="icon-item"><x-icon name="key" :size="24" /><span>key</span></div>
      <div class="icon-item"><x-icon name="home" :size="24" /><span>home</span></div>
      <div class="icon-item"><x-icon name="menu" :size="24" /><span>menu</span></div>
      <div class="icon-item"><x-icon name="list" :size="24" /><span>list</span></div>
      <div class="icon-item"><x-icon name="grid" :size="24" /><span>grid</span></div>
      <div class="icon-item"><x-icon name="fullscreen" :size="24" /><span>fullscreen</span></div>
      <div class="icon-item"><x-icon name="fullscreen-exit" :size="24" /><span>fullscreen-exit</span></div>
      <div class="icon-item"><x-icon name="zoom-in" :size="24" /><span>zoom-in</span></div>
      <div class="icon-item"><x-icon name="zoom-out" :size="24" /><span>zoom-out</span></div>
      <div class="icon-item"><x-icon name="print" :size="24" /><span>print</span></div>
      <div class="icon-item"><x-icon name="bookmark" :size="24" /><span>bookmark</span></div>
      <div class="icon-item"><x-icon name="tag" :size="24" /><span>tag</span></div>
      <div class="icon-item"><x-icon name="code" :size="24" /><span>code</span></div>
      <div class="icon-item"><x-icon name="terminal" :size="24" /><span>terminal</span></div>
      <div class="icon-item"><x-icon name="database" :size="24" /><span>database</span></div>
      <div class="icon-item"><x-icon name="server" :size="24" /><span>server</span></div>
      <div class="icon-item"><x-icon name="cloud" :size="24" /><span>cloud</span></div>
      <div class="icon-item"><x-icon name="gift" :size="24" /><span>gift</span></div>
    </div>
  </div>
</div>

### 主题类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="moon" :size="24" /><span>moon</span></div>
      <div class="icon-item"><x-icon name="sun" :size="24" /><span>sun</span></div>
      <div class="icon-item"><x-icon name="theme" :size="24" /><span>theme</span></div>
      <div class="icon-item"><x-icon name="skin" :size="24" /><span>skin</span></div>
    </div>
  </div>
</div>

### 菜单导航类

<div class="demo-block">
  <div class="demo-preview">
    <div class="icon-grid">
      <div class="icon-item"><x-icon name="menu" :size="24" /><span>menu</span></div>
      <div class="icon-item"><x-icon name="menu-fold" :size="24" /><span>menu-fold</span></div>
      <div class="icon-item"><x-icon name="menu-unfold" :size="24" /><span>menu-unfold</span></div>
      <div class="icon-item"><x-icon name="sidebar-fold" :size="24" /><span>sidebar-fold</span></div>
      <div class="icon-item"><x-icon name="sidebar-expand" :size="24" /><span>sidebar-expand</span></div>
      <div class="icon-item"><x-icon name="dashboard" :size="24" /><span>dashboard</span></div>
      <div class="icon-item"><x-icon name="chart" :size="24" /><span>chart</span></div>
      <div class="icon-item"><x-icon name="chart-pie" :size="24" /><span>chart-pie</span></div>
      <div class="icon-item"><x-icon name="chart-line" :size="24" /><span>chart-line</span></div>
      <div class="icon-item"><x-icon name="report" :size="24" /><span>report</span></div>
      <div class="icon-item"><x-icon name="analytics" :size="24" /><span>analytics</span></div>
      <div class="icon-item"><x-icon name="system" :size="24" /><span>system</span></div>
      <div class="icon-item"><x-icon name="permission" :size="24" /><span>permission</span></div>
      <div class="icon-item"><x-icon name="role" :size="24" /><span>role</span></div>
      <div class="icon-item"><x-icon name="user-manage" :size="24" /><span>user-manage</span></div>
      <div class="icon-item"><x-icon name="log" :size="24" /><span>log</span></div>
      <div class="icon-item"><x-icon name="notification" :size="24" /><span>notification</span></div>
      <div class="icon-item"><x-icon name="app" :size="24" /><span>app</span></div>
    </div>
  </div>
</div>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| name | 图标名称 | `string` | — |
| size | 图标尺寸 | `number \| string` | `24` |
| color | 图标颜色 | `string` | — |
| spin | 是否旋转 | `boolean` | `false` |
| stroke-width | 线条粗细 | `number` | `2` |

<style>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: background 0.2s;
}

.icon-item:hover {
  background: var(--vp-c-bg);
}

.icon-item span {
  margin-top: 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
</style>