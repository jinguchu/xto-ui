# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

## 基础用法

结合使用 `x-carousel` 和 `x-carousel-item` 标签即可得到一个走马灯。

<div class="demo-block">
  <div class="demo-preview">
    <x-carousel height="200px">
      <x-carousel-item v-for="i in 4" :key="i">
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #fff;" :style="{ backgroundColor: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c'][i - 1] }">
          第 {{ i }} 页
        </div>
      </x-carousel-item>
    </x-carousel>
  </div>
</div>

```vue
<template>
  <x-carousel height="200px">
    <x-carousel-item v-for="i in 4" :key="i">
      <div class="carousel-content" :style="{ backgroundColor: colors[i - 1] }">
        第 {{ i }} 页
      </div>
    </x-carousel-item>
  </x-carousel>
</template>

<script setup>
import { Carousel, CarouselItem } from '@xto/data'

const colors = ['#409eff', '#67c23a', '#e6a23c', '#f56c6c']
</script>

<style scoped>
.carousel-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
}
</style>
```

## 指示器

通过 `indicator-position` 设置指示器位置，可选 `inside`（内部）、`outside`（外部）或 `none`（不显示）。

<div class="demo-block">
  <div class="demo-preview">
    <x-carousel height="200px" indicator-position="outside">
      <x-carousel-item v-for="i in 4" :key="i">
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #fff;" :style="{ backgroundColor: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c'][i - 1] }">
          第 {{ i }} 页
        </div>
      </x-carousel-item>
    </x-carousel>
  </div>
</div>

```vue
<template>
  <x-carousel height="200px" indicator-position="outside">
    <x-carousel-item v-for="i in 4" :key="i">
      <!-- 内容 -->
    </x-carousel-item>
  </x-carousel>
</template>
```

## 切换箭头

通过 `arrow` 设置箭头显示时机，可选 `always`（一直显示）、`hover`（悬停显示）或 `never`（不显示）。

<div class="demo-block">
  <div class="demo-preview">
    <x-carousel height="200px" arrow="always">
      <x-carousel-item v-for="i in 4" :key="i">
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #fff;" :style="{ backgroundColor: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c'][i - 1] }">
          第 {{ i }} 页
        </div>
      </x-carousel-item>
    </x-carousel>
  </div>
</div>

```vue
<template>
  <x-carousel height="200px" arrow="always">
    <x-carousel-item v-for="i in 4" :key="i">
      <!-- 内容 -->
    </x-carousel-item>
  </x-carousel>
</template>
```

## 自动切换

通过 `autoplay` 控制是否自动切换，`interval` 设置切换间隔时间（毫秒）。

<div class="demo-block">
  <div class="demo-preview">
    <x-carousel height="200px" :interval="2000">
      <x-carousel-item v-for="i in 4" :key="i">
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #fff;" :style="{ backgroundColor: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c'][i - 1] }">
          第 {{ i }} 页
        </div>
      </x-carousel-item>
    </x-carousel>
  </div>
</div>

```vue
<template>
  <x-carousel height="200px" :interval="2000">
    <x-carousel-item v-for="i in 4" :key="i">
      <!-- 内容 -->
    </x-carousel-item>
  </x-carousel>
</template>
```

## 手动控制

通过 `v-model:active-index` 或 `change` 事件获取当前激活的幻灯片索引。

<div class="demo-block">
  <div class="demo-preview">
    <p>当前页: {{ activeIndex + 1 }}</p>
    <x-carousel height="200px" v-model:active-index="activeIndex">
      <x-carousel-item v-for="i in 4" :key="i">
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #fff;" :style="{ backgroundColor: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c'][i - 1] }">
          第 {{ i }} 页
        </div>
      </x-carousel-item>
    </x-carousel>
  </div>
</div>

```vue
<template>
  <p>当前页: {{ activeIndex + 1 }}</p>
  <x-carousel height="200px" v-model:active-index="activeIndex">
    <x-carousel-item v-for="i in 4" :key="i">
      <!-- 内容 -->
    </x-carousel-item>
  </x-carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, CarouselItem } from '@xto/data'

const activeIndex = ref(0)
</script>
```

## API

### Carousel Props

| 属性 | 说明 | 类型 | 默认值 |
|-----|------|------|-------|
| activeIndex | 当前激活的幻灯片索引 | `number` | `0` |
| autoplay | 是否自动切换 | `boolean` | `true` |
| interval | 自动切换的时间间隔（毫秒） | `number` | `3000` |
| indicatorPosition | 指示器的位置 | `'inside' \| 'outside' \| 'none'` | `'inside'` |
| trigger | 指示器的触发方式 | `'hover' \| 'click'` | `'hover'` |
| arrow | 箭头显示时机 | `'always' \| 'hover' \| 'never'` | `'hover'` |
| loop | 是否循环显示 | `boolean` | `true` |
| height | 走马灯的高度 | `string \| number` | `300` |

### Carousel Events

| 事件名 | 说明 | 回调参数 |
|-------|------|---------|
| update:activeIndex | 当前激活索引改变时触发 | `(index: number)` |
| change | 幻灯片切换时触发 | `(current: number, prev: number)` |

### Carousel Methods

| 方法名 | 说明 | 参数 |
|-------|------|------|
| prev | 切换至上一张幻灯片 | — |
| next | 切换至下一张幻灯片 | — |
| setActiveItem | 切换到指定幻灯片 | `(index: number)` |