# Select 选择器

下拉选择组件。

<script setup>
import { ref } from 'vue'

const singleValue = ref('')
const multipleValue = ref([])
const cascaderValue = ref([])
const searchValue = ref('')

const options = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
  { value: 'option4', label: '选项四' },
  { value: 'option5', label: '选项五' }
]

const cascaderOptions = [
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'jianggan', label: '江干区' }
        ]
      },
      {
        value: 'ningbo',
        label: '宁波市',
        children: [
          { value: 'haishu', label: '海曙区' },
          { value: 'jiangbei', label: '江北区' }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: '江苏省',
    children: [
      {
        value: 'nanjing',
        label: '南京市',
        children: [
          { value: 'xuanwu', label: '玄武区' },
          { value: 'gulou', label: '鼓楼区' }
        ]
      },
      {
        value: 'suzhou',
        label: '苏州市',
        children: [
          { value: 'gusu', label: '姑苏区' },
          { value: 'wujiang', label: '吴江区' }
        ]
      }
    ]
  }
]

const searchOptions = [
  { value: 'beijing', label: '北京市' },
  { value: 'shanghai', label: '上海市' },
  { value: 'guangzhou', label: '广州市' },
  { value: 'shenzhen', label: '深圳市' },
  { value: 'hangzhou', label: '杭州市' },
  { value: 'nanjing', label: '南京市' },
  { value: 'chengdu', label: '成都市' },
  { value: 'wuhan', label: '武汉市' }
]
</script>

## 基础用法

适用广泛的基础单选。

<div class="demo-block">
  <div class="demo-preview">
    <x-select v-model="singleValue" :options="options" placeholder="请选择" style="width: 240px" />
    <span style="margin-left: 12px;">选中值: {{ singleValue }}</span>
  </div>
</div>

```vue
<template>
  <x-select v-model="value" :options="options" placeholder="请选择" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' }
]
</script>
```

## 禁用状态

<div class="demo-block">
  <div class="demo-preview">
    <x-select disabled :options="options" placeholder="禁用状态" style="width: 240px" />
  </div>
</div>

```vue
<template>
  <x-select disabled :options="options" placeholder="禁用状态" />
</template>
```

## 可清空

<div class="demo-block">
  <div class="demo-preview">
    <x-select v-model="singleValue" :options="options" clearable placeholder="可清空" style="width: 240px" />
  </div>
</div>

```vue
<template>
  <x-select v-model="value" :options="options" clearable placeholder="可清空" />
</template>
```

## 多选

设置 `type="multiple"` 启用多选模式。

<div class="demo-block">
  <div class="demo-preview">
    <x-select v-model="multipleValue" :options="options" type="multiple" placeholder="请选择" style="width: 320px" />
    <span style="margin-left: 12px;">选中值: {{ multipleValue }}</span>
  </div>
</div>

```vue
<template>
  <x-select v-model="value" :options="options" type="multiple" placeholder="请选择" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref([])
</script>
```

## 多选限制数量

使用 `multiple-limit` 限制多选数量。

<div class="demo-block">
  <div class="demo-preview">
    <x-select v-model="multipleValue" :options="options" type="multiple" :multiple-limit="3" placeholder="最多选择3个" style="width: 320px" />
  </div>
</div>

```vue
<template>
  <x-select v-model="value" :options="options" type="multiple" :multiple-limit="3" placeholder="最多选择3个" />
</template>
```

## 级联选择

设置 `type="cascader"` 启用级联选择模式，适用于省市区、分类等层级数据。

<div class="demo-block">
  <div class="demo-preview">
    <x-select v-model="cascaderValue" :options="cascaderOptions" type="cascader" placeholder="请选择地区" style="width: 240px" />
    <span style="margin-left: 12px;">选中值: {{ cascaderValue }}</span>
  </div>
</div>

```vue
<template>
  <x-select v-model="value" :options="options" type="cascader" placeholder="请选择地区" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = [
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'jianggan', label: '江干区' }
        ]
      }
    ]
  }
]
</script>
```

## 可搜索

设置 `filterable` 启用搜索功能。

<div class="demo-block">
  <div class="demo-preview">
    <x-select v-model="searchValue" :options="searchOptions" filterable placeholder="请输入关键字搜索" style="width: 240px" />
  </div>
</div>

```vue
<template>
  <x-select v-model="value" :options="options" filterable placeholder="请输入关键字搜索" />
</template>
```

## 不同尺寸

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row" style="flex-direction: column; align-items: flex-start; gap: 12px;">
      <x-select size="large" :options="options" placeholder="大型" style="width: 240px" />
      <x-select :options="options" placeholder="默认" style="width: 240px" />
      <x-select size="small" :options="options" placeholder="小型" style="width: 240px" />
    </div>
  </div>
</div>

```vue
<template>
  <x-select size="large" :options="options" placeholder="大型" />
  <x-select :options="options" placeholder="默认" />
  <x-select size="small" :options="options" placeholder="小型" />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| modelValue | 绑定值 | `string \| number \| (string \| number)[]` | — |
| options | 选项数据 | `SelectOption[]` | `[]` |
| type | 选择类型 | `'single' \| 'multiple' \| 'cascader'` | `'single'` |
| placeholder | 占位文本 | `string` | `'请选择'` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| filterable | 是否可搜索 | `boolean` | `false` |
| filterMethod | 自定义搜索方法 | `(query: string, option: SelectOption) => boolean` | — |
| size | 输入框尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| multipleLimit | 多选限制数量 | `number` | `0` |
| collapseTags | 是否折叠标签 | `boolean` | `true` |
| maxCollapseTags | 折叠标签最大数量 | `number` | `1` |
| separator | 级联分隔符 | `string` | `' / '` |
| valueKey | 值字段名 | `string` | `'value'` |
| labelKey | 标签字段名 | `string` | `'label'` |
| childrenKey | 子节点字段名 | `string` | `'children'` |
| noDataText | 无数据提示 | `string` | `'暂无数据'` |
| noMatchText | 无匹配提示 | `string` | `'无匹配数据'` |

### SelectOption 数据结构

| 字段 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| value | 选项值 | `string \| number` | — |
| label | 选项标签 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| children | 子选项（级联时使用） | `SelectOption[]` | — |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:modelValue | 值改变时触发 | `(value: string \| number \| (string \| number)[])` |
| change | 值改变时触发 | `(value: string \| number \| (string \| number)[])` |
| clear | 清空时触发 | — |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| visible-change | 下拉框显示状态改变时触发 | `(visible: boolean)` |
| remove-tag | 多选模式下移除标签时触发 | `(tag: string \| number)` |