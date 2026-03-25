# Empty 空状态

空状态时的占位提示。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <x-empty />
  </div>
</div>

```vue
<template>
  <x-empty />
</template>
```

## 自定义描述

设置 `description` 属性自定义描述文字。

<div class="demo-block">
  <div class="demo-preview">
    <x-empty description="没有找到相关数据" />
  </div>
</div>

```vue
<template>
  <x-empty description="没有找到相关数据" />
</template>
```

## 自定义图片

通过 `image` 属性设置图片地址，通过 `image-size` 属性设置图片大小。

<div class="demo-block">
  <div class="demo-preview">
    <x-empty
      image="https://empty-demo.png"
      :image-size="100"
      description="自定义图片"
    />
  </div>
</div>

```vue
<template>
  <x-empty
    image="https://empty-demo.png"
    :image-size="100"
    description="自定义图片"
  />
</template>
```

## 自定义底部内容

使用默认插槽在底部插入内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-empty description="暂无数据">
      <x-button type="primary" size="small">添加数据</x-button>
    </x-empty>
  </div>
</div>

```vue
<template>
  <x-empty description="暂无数据">
    <x-button type="primary" size="small">添加数据</x-button>
  </x-empty>
</template>
```

## 自定义图片插槽

使用 `image` 插槽自定义图片内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-empty>
      <template #image>
        <div style="font-size: 60px; color: #c0c4cc;">📭</div>
      </template>
      <template #description>
        <span style="color: #909399;">没有消息通知</span>
      </template>
    </x-empty>
  </div>
</div>

```vue
<template>
  <x-empty>
    <template #image>
      <div style="font-size: 60px; color: #c0c4cc;">📭</div>
    </template>
    <template #description>
      <span style="color: #909399;">没有消息通知</span>
    </template>
  </x-empty>
</template>
```

## 不同尺寸

通过 `size` 属性设置组件尺寸。

<div class="demo-block">
  <div class="demo-preview">
    <div style="display: flex; gap: 40px; align-items: flex-start;">
      <div>
        <p style="margin-bottom: 8px; color: #909399; font-size: 12px;">small</p>
        <x-empty size="small" description="小尺寸" />
      </div>
      <div>
        <p style="margin-bottom: 8px; color: #909399; font-size: 12px;">default</p>
        <x-empty description="默认尺寸" />
      </div>
      <div>
        <p style="margin-bottom: 8px; color: #909399; font-size: 12px;">large</p>
        <x-empty size="large" description="大尺寸" />
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <x-empty size="small" description="小尺寸" />
  <x-empty description="默认尺寸" />
  <x-empty size="large" description="大尺寸" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| image | 图片地址 | `string` | 默认空状态图片 |
| image-size | 图片尺寸 | `number` | — |
| description | 描述文字 | `string` | `'暂无数据'` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |

### Slots

| 插槽名 | 说明 | 参数 |
|-------|------|-----|
| default | 自定义底部内容 | — |
| image | 自定义图片 | — |
| description | 自定义描述 | — |