# Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

基础的树形结构展示。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="basicData" />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" />
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    value: 1,
    label: '一级 1',
    children: [
      {
        value: 4,
        label: '二级 1-1',
        children: [
          { value: 9, label: '三级 1-1-1' },
          { value: 10, label: '三级 1-1-2' }
        ]
      }
    ]
  },
  {
    value: 2,
    label: '一级 2',
    children: [
      { value: 5, label: '二级 2-1' },
      { value: 6, label: '二级 2-2' }
    ]
  },
  {
    value: 3,
    label: '一级 3',
    children: [
      { value: 7, label: '二级 3-1' },
      { value: 8, label: '二级 3-2' }
    ]
  }
])
</script>
```

## 可选择

适用于需要选择层级时使用。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="selectableData" selectable highlight-current />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" selectable highlight-current />
</template>
```

## 复选框

适用于需要勾选节点时使用，默认父子节点联动。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="checkboxData" show-checkbox />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" show-checkbox />
</template>
```

## 复选框不联动

设置 `check-strictly` 属性后父子节点不再关联。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="strictData" show-checkbox check-strictly />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" show-checkbox check-strictly />
</template>
```

## 懒加载

通过 `lazy` 属性开启懒加载模式，通过 `load` 方法加载子节点数据。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="lazyData" lazy :load="loadNode" />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" lazy :load="loadNode" />
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  { value: 1, label: '一级 1' },
  { value: 2, label: '一级 2' },
  { value: 3, label: '一级 3' }
])

const loadNode = (node, resolve) => {
  if (node.level === 0) return

  setTimeout(() => {
    const data = [
      { value: `${node.value}-1`, label: `${node.label}-子节点1`, isLeaf: true },
      { value: `${node.value}-2`, label: `${node.label}-子节点2`, isLeaf: true }
    ]
    resolve(data)
  }, 1000)
}
</script>
```

## 默认展开和默认选中

使用 `default-expanded-keys` 和 `default-selected-keys` 设置默认展开和默认选中的节点。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree
      :data="defaultData"
      :default-expanded-keys="[2, 5]"
      :default-selected-keys="[5]"
      highlight-current
    />
  </div>
</div>

```vue
<template>
  <x-tree
    :data="data"
    :default-expanded-keys="[2, 5]"
    :default-selected-keys="[5]"
    highlight-current
  />
</template>
```

## 默认勾选

使用 `default-checked-keys` 设置默认勾选的节点。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree
      :data="defaultCheckData"
      show-checkbox
      :default-expanded-keys="[1, 4]"
      :default-checked-keys="[9]"
    />
  </div>
</div>

```vue
<template>
  <x-tree
    :data="data"
    show-checkbox
    :default-expanded-keys="[1, 4]"
    :default-checked-keys="[9]"
  />
</template>
```

## 禁用状态

通过节点的 `disabled` 属性禁用节点。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="disabledData" show-checkbox />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" show-checkbox />
</template>

<script setup>
const data = [
  {
    value: 1,
    label: '一级 1',
    disabled: true,
    children: [
      { value: 4, label: '二级 1-1' }
    ]
  },
  {
    value: 2,
    label: '一级 2',
    children: [
      { value: 5, label: '二级 2-1', disabled: true },
      { value: 6, label: '二级 2-2' }
    ]
  }
]
</script>
```

## 自定义节点内容

使用默认插槽自定义节点内容。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="customData" class="custom-tree">
      <template #default="{ node }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <button class="tree-btn" @click.stop>编辑</button>
            <button class="tree-btn" @click.stop>删除</button>
          </span>
        </span>
      </template>
    </x-tree>
  </div>
</div>

```vue
<template>
  <x-tree :data="data">
    <template #default="{ node }">
      <span class="custom-tree-node">
        <span>{{ node.label }}</span>
        <span>
          <button size="small" @click.stop>编辑</button>
          <button size="small" @click.stop>删除</button>
        </span>
      </span>
    </template>
  </x-tree>
</template>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
```

## 节点过滤

通过 `filter` 方法过滤树节点。

<div class="demo-block">
  <div class="demo-preview">
    <input v-model="filterText" placeholder="输入关键字过滤" style="margin-bottom: 20px; padding: 8px; width: 200px;" />
    <x-tree ref="treeRef" :data="filterData" :filter-node-method="filterNode" />
  </div>
</div>

```vue
<template>
  <input v-model="filterText" placeholder="输入关键字过滤" />
  <x-tree ref="treeRef" :data="data" :filter-node-method="filterNode" />
</template>

<script setup>
import { ref, watch } from 'vue'

const filterText = ref('')
const treeRef = ref()

const filterNode = (value, data, node) => {
  if (!value) return true
  return data.label.includes(value)
}

watch(filterText, (val) => {
  treeRef.value?.filter(val)
})
</script>
```

## 手风琴模式

通过 `accordion` 属性开启手风琴模式，同一级节点只能展开一个。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="accordionData" accordion />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" accordion />
</template>
```

## 可拖拽节点

通过 `draggable` 属性开启节点拖拽功能。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree
      :data="draggableData"
      draggable
      @node-drag-start="handleDragStart"
      @node-drop="handleDrop"
    />
  </div>
</div>

```vue
<template>
  <x-tree
    :data="data"
    draggable
    @node-drag-start="handleDragStart"
    @node-drop="handleDrop"
  />
</template>

<script setup>
const handleDragStart = (node, event) => {
  console.log('开始拖拽:', node.label)
}

const handleDrop = (dragNode, dropNode, dropType, event) => {
  console.log('拖拽完成:', dragNode.label, '->', dropNode.label, dropType)
}
</script>
```

## 属性配置

使用 `props` 属性可以自定义节点字段名。

<div class="demo-block">
  <div class="demo-preview">
    <x-tree :data="customFieldData" :props="customProps" />
  </div>
</div>

```vue
<template>
  <x-tree :data="data" :props="props" />
</template>

<script setup>
const props = {
  label: 'name',
  children: 'zones'
}

const data = [
  {
    value: 1,
    name: '一级 1',
    zones: [
      { value: 4, name: '二级 1-1' }
    ]
  }
]
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| data | 树节点数据 | `TreeNodeData[]` | `[]` |
| empty-text | 空数据提示文本 | `string` | `'暂无数据'` |
| node-key | 节点唯一标识字段名 | `string` | `'value'` |
| props | 字段映射配置 | `object` | `{}` |
| render-after-expand | 是否展开后渲染子节点 | `boolean` | `true` |
| load | 懒加载方法 | `Function` | — |
| highlight-current | 是否高亮当前节点 | `boolean` | `false` |
| check-on-click-node | 点击节点时是否勾选 | `boolean` | `false` |
| auto-expand-parent | 展开节点时是否自动展开父节点 | `boolean` | `true` |
| default-expanded-keys | 默认展开的节点 key | `array` | `[]` |
| default-checked-keys | 默认勾选的节点 key | `array` | `[]` |
| default-selected-keys | 默认选中的节点 key | `array` | `[]` |
| expanded-keys | 展开的节点 key（受控） | `array` | — |
| checked-keys | 勾选的节点 key（受控） | `array` | — |
| selected-keys | 选中的节点 key（受控） | `array` | — |
| check-strictly | 父子节点是否不关联 | `boolean` | `false` |
| lazy | 是否懒加载 | `boolean` | `false` |
| draggable | 是否可拖拽 | `boolean` | `false` |
| allow-drag | 是否允许拖拽判断函数 | `Function` | — |
| allow-drop | 是否允许放置判断函数 | `Function` | — |
| accordion | 是否手风琴模式 | `boolean` | `false` |
| indent | 缩进 | `number` | `16` |
| icon | 自定义图标 | `string` | — |
| expand-on-click-node | 点击节点是否展开 | `boolean` | `true` |
| show-line | 是否显示连接线 | `boolean` | `false` |
| show-checkbox | 是否显示复选框 | `boolean` | `false` |
| selectable | 是否可选择 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |

### Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| node-click | 节点点击时触发 | `(data, node, instance)` |
| node-contextmenu | 右键点击时触发 | `(event, data, node)` |
| check-change | 勾选变化时触发 | `(data, checked, indeterminate)` |
| check | 勾选时触发 | `(data, { checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys })` |
| current-change | 当前节点变化时触发 | `(data, node)` |
| node-expand | 节点展开时触发 | `(data, node, instance)` |
| node-collapse | 节点收起时触发 | `(data, node, instance)` |
| node-drag-start | 拖拽开始时触发 | `(node, event)` |
| node-drag-enter | 拖拽进入节点时触发 | `(node, event)` |
| node-drag-leave | 拖拽离开节点时触发 | `(node, event)` |
| node-drag-over | 拖拽悬停时触发 | `(node, event)` |
| node-drag-end | 拖拽结束时触发 | `(node, event)` |
| node-drop | 拖拽放置时触发 | `(dragNode, dropNode, dropType, event)` |

### Methods

| 方法名 | 说明 | 参数 |
|-------|------|-----|
| filter | 过滤节点 | `(value: string)` |
| getNode | 获取节点实例 | `(key)` |
| setCurrentKey | 设置当前节点 | `(key)` |
| getCurrentKey | 获取当前节点 key | — |
| getCurrentNode | 获取当前节点 | — |
| getCheckedNodes | 获取勾选的节点 | `(leafOnly)` |
| getCheckedKeys | 获取勾选的 keys | `(leafOnly)` |
| setCheckedKeys | 设置勾选的 keys | `(keys)` |
| setChecked | 设置节点勾选状态 | `(key, checked, deep)` |
| getHalfCheckedNodes | 获取半选节点 | — |
| getHalfCheckedKeys | 获取半选 keys | — |
| getSelectedNodes | 获取选中节点 | — |
| setSelectedKeys | 设置选中的 keys | `(keys)` |
| expandAll | 展开所有节点 | — |
| collapseAll | 收起所有节点 | — |
| updateKeyChildren | 更新子节点 | `(key, data)` |
| remove | 删除节点 | `(key)` |
| append | 追加节点 | `(data, parentKey)` |
| insertBefore | 在节点前插入 | `(data, key)` |
| insertAfter | 在节点后插入 | `(data, key)` |

### Slots

| 插槽名 | 说明 | 参数 |
|-------|------|-----|
| default | 自定义节点内容 | `{ node, data }` |
| empty | 无数据时的内容 | — |

### TreeNodeData

| 属性 | 说明 | 类型 |
|-----|------|------|
| value | 节点唯一标识 | `string \| number` |
| label | 节点标签 | `string` |
| children | 子节点 | `TreeNodeData[]` |
| disabled | 是否禁用 | `boolean` |
| isLeaf | 是否为叶子节点 | `boolean` |

<script setup>
import { ref, watch } from 'vue'

// 基础用法数据
const basicData = ref([
  {
    value: 1,
    label: '一级 1',
    children: [
      {
        value: 4,
        label: '二级 1-1',
        children: [
          { value: 9, label: '三级 1-1-1' },
          { value: 10, label: '三级 1-1-2' }
        ]
      }
    ]
  },
  {
    value: 2,
    label: '一级 2',
    children: [
      { value: 5, label: '二级 2-1' },
      { value: 6, label: '二级 2-2' }
    ]
  },
  {
    value: 3,
    label: '一级 3',
    children: [
      { value: 7, label: '二级 3-1' },
      { value: 8, label: '二级 3-2' }
    ]
  }
])

// 可选择数据
const selectableData = ref(JSON.parse(JSON.stringify(basicData.value)))

// 复选框数据
const checkboxData = ref(JSON.parse(JSON.stringify(basicData.value)))

// 不联动数据
const strictData = ref(JSON.parse(JSON.stringify(basicData.value)))

// 懒加载数据
const lazyData = ref([
  { value: 1, label: '一级 1' },
  { value: 2, label: '一级 2' },
  { value: 3, label: '一级 3' }
])

const loadNode = (node, resolve) => {
  if (!node.value) {
    return
  }
  setTimeout(() => {
    resolve([
      { value: `${node.value}-1`, label: `${node.label}-子节点1`, isLeaf: true },
      { value: `${node.value}-2`, label: `${node.label}-子节点2`, isLeaf: true }
    ])
  }, 1000)
}

// 默认展开/选中数据
const defaultData = ref(JSON.parse(JSON.stringify(basicData.value)))

// 默认勾选数据
const defaultCheckData = ref(JSON.parse(JSON.stringify(basicData.value)))

// 禁用状态数据
const disabledData = ref([
  {
    value: 1,
    label: '一级 1 (禁用)',
    disabled: true,
    children: [
      { value: 4, label: '二级 1-1' }
    ]
  },
  {
    value: 2,
    label: '一级 2',
    children: [
      { value: 5, label: '二级 2-1 (禁用)', disabled: true },
      { value: 6, label: '二级 2-2' }
    ]
  }
])

// 自定义节点数据
const customData = ref(JSON.parse(JSON.stringify(basicData.value)))

// 过滤数据
const filterData = ref(JSON.parse(JSON.stringify(basicData.value)))
const filterText = ref('')
const treeRef = ref()

const filterNode = (value, data, node) => {
  if (!value) return true
  return data.label.includes(value)
}

watch(filterText, (val) => {
  treeRef.value?.filter(val)
})

// 手风琴数据
const accordionData = ref(JSON.parse(JSON.stringify(basicData.value)))

// 可拖拽数据
const draggableData = ref(JSON.parse(JSON.stringify(basicData.value)))

const handleDragStart = (node) => {
  console.log('开始拖拽:', node.label)
}

const handleDrop = (dragNode, dropNode, dropType) => {
  console.log('拖拽完成:', dragNode.label, '->', dropNode.label, dropType)
}

// 自定义字段数据
const customProps = {
  label: 'name',
  children: 'zones'
}

const customFieldData = ref([
  {
    value: 1,
    name: '一级 1',
    zones: [
      { value: 4, name: '二级 1-1' }
    ]
  },
  {
    value: 2,
    name: '一级 2',
    zones: [
      { value: 5, name: '二级 2-1' }
    ]
  }
])
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.tree-btn {
  margin-left: 8px;
  padding: 2px 8px;
  font-size: 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.tree-btn:hover {
  color: #409eff;
  border-color: #409eff;
}
</style>