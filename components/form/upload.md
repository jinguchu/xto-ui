# Upload 上传

通过点击或者拖拽上传文件。

<script setup>
import { ref } from 'vue'

const fileList1 = ref([])
const fileList2 = ref([])
const fileList3 = ref([])
const fileList4 = ref([])
const fileList5 = ref([])
const fileList6 = ref([])
const fileList7 = ref([])
const uploadRef = ref()

const handleExceed = (files) => {
  alert(`最多只能上传3个文件，当前选择了${files.length}个文件`)
}

const beforeUpload = (file) => {
  const isImage = file.type.startsWith('image/')
  if (!isImage) {
    alert('只能上传图片文件!')
    return false
  }
  return true
}

const handleSuccess = (response, file) => {
  console.log('上传成功:', file.name)
}

const handleError = (error, file) => {
  console.log('上传失败:', file.name)
}
</script>

## 点击上传

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      v-model:file-list="fileList1"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :on-success="handleSuccess"
    >
      <template #trigger>
        <x-button type="primary">点击上传</x-button>
      </template>
      <template #tip>
        只能上传 jpg/png 文件，且不超过 500kb
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    v-model:file-list="fileList"
    action="/upload"
  >
    <template #trigger>
      <x-button type="primary">点击上传</x-button>
    </template>
    <template #tip>
      只能上传 jpg/png 文件，且不超过 500kb
    </template>
  </x-upload>
</template>
```

## 头像上传

使用 `list-type="picture"` 显示图片缩略图。

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      v-model:file-list="fileList2"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture"
      :before-upload="beforeUpload"
    >
      <template #trigger>
        <x-button type="primary">点击上传头像</x-button>
      </template>
      <template #tip>
        只能上传 jpg/png 文件
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    v-model:file-list="fileList"
    action="/upload"
    list-type="picture"
  >
    <template #trigger>
      <x-button type="primary">点击上传头像</x-button>
    </template>
  </x-upload>
</template>
```

## 照片墙

使用 `list-type="picture-card"` 显示照片墙样式。

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      v-model:file-list="fileList3"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture-card"
      :before-upload="beforeUpload"
    >
      <template #tip>
        只能上传 jpg/png 文件
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    v-model:file-list="fileList"
    action="/upload"
    list-type="picture-card"
  />
</template>
```

## 文件缩略图

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      v-model:file-list="fileList4"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture"
      multiple
    >
      <template #trigger>
        <x-button type="primary">点击上传</x-button>
      </template>
      <template #tip>
        支持多文件上传
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    v-model:file-list="fileList"
    action="/upload"
    list-type="picture"
    multiple
  />
</template>
```

## 图片列表缩略图

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      v-model:file-list="fileList5"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture-card"
      :limit="3"
      :on-exceed="handleExceed"
    >
      <template #tip>
        最多上传3个文件
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    v-model:file-list="fileList"
    action="/upload"
    list-type="picture-card"
    :limit="3"
    :on-exceed="handleExceed"
  />
</template>
```

## 上传文件列表控制

通过 `limit` 和 `on-exceed` 限制上传文件数量。

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      v-model:file-list="fileList6"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :limit="3"
      :on-exceed="handleExceed"
      multiple
    >
      <template #trigger>
        <x-button type="primary">点击上传（最多3个）</x-button>
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    v-model:file-list="fileList"
    action="/upload"
    :limit="3"
    :on-exceed="handleExceed"
    multiple
  />
</template>

<script setup>
const handleExceed = (files) => {
  alert(`最多只能上传3个文件`)
}
</script>
```

## 拖拽上传

设置 `drag` 属性启用拖拽上传。

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      v-model:file-list="fileList7"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      drag
      multiple
    >
      <template #tip>
        将文件拖到此处，或点击上传
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    v-model:file-list="fileList"
    action="/upload"
    drag
    multiple
  />
</template>
```

## 手动上传

设置 `auto-upload="false"` 禁用自动上传，通过 `submit` 方法手动触发上传。

<div class="demo-block">
  <div class="demo-preview">
    <x-upload
      ref="uploadRef"
      v-model:file-list="fileList6"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :auto-upload="false"
    >
      <template #trigger>
        <x-button type="primary">选取文件</x-button>
      </template>
      <x-button style="margin-left: 12px;" @click="uploadRef?.submit()">开始上传</x-button>
      <template #tip>
        只有点击"开始上传"后才会真正上传
      </template>
    </x-upload>
  </div>
</div>

```vue
<template>
  <x-upload
    ref="uploadRef"
    v-model:file-list="fileList"
    action="/upload"
    :auto-upload="false"
  >
    <template #trigger>
      <x-button type="primary">选取文件</x-button>
    </template>
    <x-button @click="uploadRef?.submit()">开始上传</x-button>
  </x-upload>
</template>

<script setup>
import { ref } from 'vue'

const uploadRef = ref()
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| action | 上传的地址 | `string` | `'#'` |
| headers | 设置上传的请求头部 | `Record<string, string>` | — |
| data | 上传时附带的额外参数 | `Record<string, any>` | — |
| multiple | 是否支持多选文件 | `boolean` | `false` |
| accept | 接受上传的文件类型 | `string` | — |
| limit | 最大允许上传个数 | `number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| drag | 是否启用拖拽上传 | `boolean` | `false` |
| listType | 文件列表的类型 | `'text' \| 'picture' \| 'picture-card'` | `'text'` |
| autoUpload | 是否在选取文件后立即进行上传 | `boolean` | `true` |
| fileList | 上传的文件列表 | `UploadFile[]` | `[]` |
| showFileList | 是否显示文件列表 | `boolean` | `true` |
| withCredentials | 支持发送 cookie 凭证信息 | `boolean` | `false` |
| name | 上传的文件字段名 | `string` | `'file'` |
| httpRequest | 覆盖默认的上传行为 | `(options) => Promise` | — |
| beforeUpload | 上传文件之前的钩子 | `(file, fileList) => boolean \| Promise` | — |
| beforeRemove | 删除文件之前的钩子 | `(file, fileList) => boolean` | — |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| success | 文件上传成功时的钩子 | `(response, file, fileList)` |
| error | 文件上传失败时的钩子 | `(error, file, fileList)` |
| progress | 文件上传时的钩子 | `(event, file, fileList)` |
| change | 文件状态改变时的钩子 | `(file, fileList)` |
| remove | 文件列表移除文件时的钩子 | `(file, fileList)` |
| exceed | 文件超出个数限制时的钩子 | `(files, fileList)` |

### Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| submit | 手动上传文件列表 | — |
| clearFiles | 清空已上传的文件列表 | — |

### Slots

| 插槽名 | 说明 |
|-------|------|
| trigger | 触发文件选择框的内容 |
| tip | 提示说明文字 |
| drag | 拖拽区域内容 |

### UploadFile 数据结构

| 字段 | 说明 | 类型 |
|-----|------|------|
| name | 文件名 | `string` |
| size | 文件大小 | `number` |
| url | 文件地址 | `string` |
| status | 文件状态 | `'ready' \| 'uploading' \| 'success' \| 'error'` |
| percentage | 上传进度 | `number` |
| uid | 文件唯一标识 | `number \| string` |
| raw | 原始文件对象 | `File` |
| response | 服务器响应 | `any` |
| thumbUrl | 缩略图地址 | `string` |