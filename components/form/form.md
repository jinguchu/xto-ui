# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref()

const form = reactive({
  name: '',
  email: '',
  age: '',
  gender: '',
  remark: ''
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: 'change' }
  ]
}

const genderOptions = [
  { value: 'male', label: '男' },
  { value: 'female', label: '女' }
]

const handleSubmit = async () => {
  const valid = await formRef.value?.validate()
  if (valid) {
    console.log('提交表单:', form)
    alert('提交成功!')
  }
}

const handleReset = () => {
  formRef.value?.resetFields()
}
</script>

## 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

<div class="demo-block">
  <div class="demo-preview">
    <x-form ref="formRef" :model="form" :rules="rules" label-width="80px">
      <x-form-item label="姓名" prop="name">
        <x-input v-model="form.name" placeholder="请输入姓名" />
      </x-form-item>
      <x-form-item label="邮箱" prop="email">
        <x-input v-model="form.email" placeholder="请输入邮箱" />
      </x-form-item>
      <x-form-item label="年龄" prop="age">
        <x-input-number v-model="form.age" placeholder="请输入年龄" style="width: 100%;" />
      </x-form-item>
      <x-form-item label="性别" prop="gender">
        <x-radio-group v-model="form.gender">
          <x-radio value="male">男</x-radio>
          <x-radio value="female">女</x-radio>
        </x-radio-group>
      </x-form-item>
      <x-form-item label="备注" prop="remark">
        <x-textarea v-model="form.remark" placeholder="请输入备注" />
      </x-form-item>
      <x-form-item>
        <x-button type="primary" @click="handleSubmit">提交</x-button>
        <x-button @click="handleReset" style="margin-left: 12px;">重置</x-button>
      </x-form-item>
    </x-form>
  </div>
</div>

```vue
<template>
  <x-form ref="formRef" :model="form" :rules="rules" label-width="80px">
    <x-form-item label="姓名" prop="name">
      <x-input v-model="form.name" placeholder="请输入姓名" />
    </x-form-item>
    <x-form-item label="邮箱" prop="email">
      <x-input v-model="form.email" placeholder="请输入邮箱" />
    </x-form-item>
    <x-form-item>
      <x-button type="primary" @click="handleSubmit">提交</x-button>
      <x-button @click="handleReset">重置</x-button>
    </x-form-item>
  </x-form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref()

const form = reactive({
  name: '',
  email: ''
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  const valid = await formRef.value?.validate()
  if (valid) {
    console.log('提交表单:', form)
  }
}

const handleReset = () => {
  formRef.value?.resetFields()
}
</script>
```

## 行内表单

设置 `inline` 属性让表单域成为行内的表单域。

<div class="demo-block">
  <div class="demo-preview">
    <x-form :model="form" inline>
      <x-form-item label="姓名">
        <x-input v-model="form.name" placeholder="请输入姓名" />
      </x-form-item>
      <x-form-item label="邮箱">
        <x-input v-model="form.email" placeholder="请输入邮箱" />
      </x-form-item>
      <x-form-item>
        <x-button type="primary">查询</x-button>
      </x-form-item>
    </x-form>
  </div>
</div>

```vue
<template>
  <x-form :model="form" inline>
    <x-form-item label="姓名">
      <x-input v-model="form.name" placeholder="请输入姓名" />
    </x-form-item>
    <x-form-item label="邮箱">
      <x-input v-model="form.email" placeholder="请输入邮箱" />
    </x-form-item>
    <x-form-item>
      <x-button type="primary">查询</x-button>
    </x-form-item>
  </x-form>
</template>
```

## 对齐方式

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`、`right`。

<div class="demo-block">
  <div class="demo-preview">
    <x-form :model="form" label-position="top" label-width="100px">
      <x-form-item label="姓名">
        <x-input v-model="form.name" placeholder="请输入姓名" />
      </x-form-item>
      <x-form-item label="邮箱">
        <x-input v-model="form.email" placeholder="请输入邮箱" />
      </x-form-item>
    </x-form>
  </div>
</div>

```vue
<template>
  <x-form :model="form" label-position="top">
    <x-form-item label="姓名">
      <x-input v-model="form.name" placeholder="请输入姓名" />
    </x-form-item>
    <x-form-item label="邮箱">
      <x-input v-model="form.email" placeholder="请输入邮箱" />
    </x-form-item>
  </x-form>
</template>
```

## 表单校验

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则。

<div class="demo-block">
  <div class="demo-preview">
    <x-form :model="form" :rules="rules" label-width="100px">
      <x-form-item label="用户名" prop="name">
        <x-input v-model="form.name" placeholder="请输入用户名" />
      </x-form-item>
      <x-form-item label="密码" prop="password">
        <x-input v-model="form.password" type="password" placeholder="请输入密码" />
      </x-form-item>
    </x-form>
  </div>
</div>

```vue
<template>
  <x-form :model="form" :rules="rules" label-width="100px">
    <x-form-item label="用户名" prop="name">
      <x-input v-model="form.name" placeholder="请输入用户名" />
    </x-form-item>
    <x-form-item label="密码" prop="password">
      <x-input v-model="form.password" type="password" placeholder="请输入密码" />
    </x-form-item>
  </x-form>
</template>

<script setup>
const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ]
}
</script>
```

## API

### Form Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| model | 表单数据对象 | `Record<string, any>` | `{}` |
| rules | 表单验证规则 | `Record<string, FormRule[]>` | `{}` |
| labelWidth | 标签宽度 | `string \| number` | `'100px'` |
| labelPosition | 标签位置 | `'left' \| 'right' \| 'top'` | `'right'` |
| inline | 是否行内表单 | `boolean` | `false` |
| disabled | 是否禁用所有表单项 | `boolean` | `false` |
| size | 组件尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |

### Form Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| validate | 验证整个表单 | — |
| validateField | 验证指定字段 | `(props: string \| string[])` |
| resetFields | 重置表单 | — |
| clearValidate | 清除验证结果 | `(props?: string \| string[])` |

### Form Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| validate | 任意表单项被校验后触发 | `(prop: string, valid: boolean, message: string)` |

### FormItem Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| prop | 字段名 | `string` | — |
| label | 标签文本 | `string` | — |
| labelWidth | 标签宽度 | `string \| number` | — |
| required | 是否必填 | `boolean` | `false` |
| rules | 验证规则 | `FormRule[]` | — |
| showMessage | 是否显示错误信息 | `boolean` | `true` |

### FormRule 规则

| 属性 | 说明 | 类型 |
|-----|------|------|
| required | 是否必填 | `boolean` |
| message | 错误信息 | `string` |
| trigger | 触发方式 | `'blur' \| 'change'` |
| min | 最小长度 | `number` |
| max | 最大长度 | `number` |
| pattern | 正则表达式 | `RegExp` |
| validator | 自定义验证函数 | `(rule, value, callback) => void` |