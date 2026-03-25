# MarkdownEditor Markdown 编辑器

Markdown 编辑器组件，支持编辑和预览两种模式，通过工具栏图标快捷插入格式。

> 注意：编辑器仅支持文字编辑，不支持插入图片。

<script setup>
import { ref } from 'vue'

const content1 = ref(`# 标题一

这是一段普通文本。

## 标题二

### 标题三

**粗体文本** 和 *斜体文本* 以及 ~~删除线~~

#### 列表

- 无序列表项 1
- 无序列表项 2
- 无序列表项 3

1. 有序列表项 1
2. 有序列表项 2
3. 有序列表项 3

#### 代码

行内代码 \`const a = 1\`

\`\`\`javascript
function hello() {
  console.log('Hello World!')
}
\`\`\`

#### 引用

> 这是一段引用文本
> 可以多行显示

#### 链接

[链接文本](https://example.com)

#### 表格

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| A1  | B1  | C1  |
| A2  | B2  | C2  |

---

水平分割线
`)

const content2 = ref(`# 快速开始

输入 **Markdown** 内容，使用工具栏快捷操作。

## 功能特点

- 支持常用 Markdown 语法
- 工具栏快捷操作
- 纯文字编辑
`)

const content3 = ref('# 禁用状态\n\n此编辑器已被禁用，无法编辑。')
</script>

## 基础用法

支持编辑和预览两种模式，通过工具栏切换。

<div class="demo-block">
  <div class="demo-preview">
    <x-markdown-editor v-model="content1" :height="400" />
  </div>
</div>

```vue
<template>
  <x-markdown-editor v-model="content" :height="400" />
</template>

<script setup>
import { ref } from 'vue'

const content = ref(`# 标题

这是 Markdown 内容。
`)
</script>
```

## 纯编辑模式

设置 `mode="edit"` 只显示编辑区域。

<div class="demo-block">
  <div class="demo-preview">
    <x-markdown-editor v-model="content2" mode="edit" :height="300" />
  </div>
</div>

```vue
<template>
  <x-markdown-editor v-model="content" mode="edit" />
</template>
```

## 纯预览模式

设置 `mode="preview"` 只显示预览区域。

<div class="demo-block">
  <div class="demo-preview">
    <x-markdown-editor v-model="content2" mode="preview" :height="300" />
  </div>
</div>

```vue
<template>
  <x-markdown-editor v-model="content" mode="preview" />
</template>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-markdown-editor v-model="content3" disabled :height="200" />
  </div>
</div>

```vue
<template>
  <x-markdown-editor v-model="content" disabled />
</template>
```

## 隐藏工具栏

设置 `show-toolbar="false"` 隐藏工具栏。

<div class="demo-block">
  <div class="demo-preview">
    <x-markdown-editor v-model="content2" :show-toolbar="false" :height="200" />
  </div>
</div>

```vue
<template>
  <x-markdown-editor v-model="content" :show-toolbar="false" />
</template>
```

## 工具栏图标操作

工具栏提供以下图标操作，用于快速插入 Markdown 格式：

| 图标 | 功能 | 语法 |
|-----|------|------|
| H1 | 一级标题 | `# 标题` |
| H2 | 二级标题 | `## 标题` |
| H3 | 三级标题 | `### 标题` |
| B | 粗体 | `**文本**` |
| I | 斜体 | `*文本*` |
| S | 删除线 | `~~文本~~` |
| • | 无序列表 | `- 列表项` |
| 1. | 有序列表 | `1. 列表项` |
| 🔗 | 链接 | `[文本](url)` |
| </> | 行内代码 | `` `代码` `` |
| — | 分割线 | `---` |
| □ | 引用 | `> 文本` |
| ``` | 代码块 | ` ```代码块``` ` |

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue / v-model | 绑定值 | `string` | `''` |
| placeholder | 占位文本 | `string` | `'请输入 Markdown 内容...'` |
| height | 高度 | `string \| number` | `400` |
| mode | 模式 | `'edit' \| 'preview'` | `'edit'` |
| showToolbar | 是否显示工具栏 | `boolean` | `true` |
| showToc | 是否显示目录 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值变化时触发 | `(value: string)` |
| change | 值变化时触发 | `(value: string)` |

### 支持的 Markdown 语法

| 语法 | 说明 |
|-----|------|
| `# H1` ~ `###### H6` | 标题 |
| `**粗体**` | 粗体 |
| `*斜体*` | 斜体 |
| `~~删除线~~` | 删除线 |
| `` `代码` `` | 行内代码 |
| ` ``` ` 代码块 ` ``` ` | 代码块 |
| `[链接](url)` | 链接 |
| `- 列表` | 无序列表 |
| `1. 列表` | 有序列表 |
| `> 引用` | 引用块 |
| `---` | 水平分割线 |
| `| 表格 |` | 表格 |