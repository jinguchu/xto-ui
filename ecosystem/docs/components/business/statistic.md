# Statistic 统计数值

展示统计数值。

## 基础用法

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-statistic title="用户总数" :value="12345" style="margin-right: 40px" />
      <x-statistic title="订单总数" :value="8846" style="margin-right: 40px" />
      <x-statistic title="访问量" :value="923456" />
    </div>
  </div>
</div>

```vue
<template>
  <x-statistic title="用户总数" :value="12345" />
</template>

<script setup>
import { Statistic } from '@xto/business'
</script>
```

## 带前缀和后缀

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-statistic title="收入" :value="98765" prefix="¥" suffix="元" style="margin-right: 40px" />
      <x-statistic title="增长率" :value="12.5" suffix="%" style="margin-right: 40px" />
      <x-statistic title="完成率" :value="88.6" suffix="%" />
    </div>
  </div>
</div>

```vue
<template>
  <x-statistic title="收入" :value="98765" prefix="¥" suffix="元" />
</template>
```

## 带趋势

<div class="demo-block">
  <div class="demo-preview">
    <div class="demo-row">
      <x-statistic
        title="增长率"
        :value="12.5"
        suffix="%"
        trend="up"
        trendValue="2.3%"
        style="margin-right: 40px"
      />
      <x-statistic
        title="下降率"
        :value="5.8"
        suffix="%"
        trend="down"
        trendValue="1.2%"
      />
    </div>
  </div>
</div>

```vue
<template>
  <x-statistic
    title="增长率"
    :value="12.5"
    suffix="%"
    trend="up"
    trendValue="2.3%"
  />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| title | 标题 | `string` | — |
| value | 数值 | `number \| string` | `0` |
| prefix | 前缀 | `string` | — |
| suffix | 后缀 | `string` | — |
| precision | 小数精度 | `number` | `0` |
| trend | 趋势方向 | `'up' \| 'down'` | — |
| trendValue | 趋势值 | `string` | — |
| valueColor | 数值颜色 | `string` | — |