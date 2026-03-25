import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Xto UI',
  description: '一个基于 Vue 3 的组件库',
  vite: {
    resolve: {
      alias: {
        '@xto/base': resolve(__dirname, '../../../packages/base/src'),
        '@xto/form': resolve(__dirname, '../../../packages/form/src'),
        '@xto/data': resolve(__dirname, '../../../packages/data/src'),
        '@xto/layout': resolve(__dirname, '../../../packages/layout/src'),
        '@xto/feedback': resolve(__dirname, '../../../packages/feedback/src'),
        '@xto/navigation': resolve(__dirname, '../../../packages/navigation/src'),
        '@xto/business': resolve(__dirname, '../../../packages/business/src'),
        '@xto/core': resolve(__dirname, '../../../packages/core/src'),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['import', 'global-builtin', 'slash-div']
        }
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/base/button' },
      { text: 'API', link: '/api/core' },
      { text: 'GitHub', link: 'https://github.com/xto/xto' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' },
            { text: '使用指南', link: '/guide/quick-start' },
            { text: '主题定制', link: '/guide/theming' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: '按钮 Button', link: '/components/base/button' },
            { text: '图标 Icon', link: '/components/base/icon' },
            { text: '徽标 Badge', link: '/components/base/badge' },
            { text: '间距 Space', link: '/components/base/space' },
            { text: '分割线 Divider', link: '/components/base/divider' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: '表单 Form', link: '/components/form/form' },
            { text: '输入框 Input', link: '/components/form/input' },
            { text: '数字输入框 InputNumber', link: '/components/form/input-number' },
            { text: '文本域 Textarea', link: '/components/form/textarea' },
            { text: '单选框 Radio', link: '/components/form/radio' },
            { text: '多选框 Checkbox', link: '/components/form/checkbox' },
            { text: '开关 Switch', link: '/components/form/switch' },
            { text: '滑块 Slider', link: '/components/form/slider' },
            { text: '上传 Upload', link: '/components/form/upload' },
            { text: '评分 Rate', link: '/components/form/rate' },
            { text: '日期选择器 DatePicker', link: '/components/form/date-picker' },
            { text: '时间选择器 TimePicker', link: '/components/form/time-picker' },
            { text: '选择器 Select', link: '/components/form/select' },
            { text: '穿梭框 Transfer', link: '/components/form/transfer' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: '标签 Tag', link: '/components/data/tag' },
            { text: '卡片 Card', link: '/components/data/card' },
            { text: '进度条 Progress', link: '/components/data/progress' },
            { text: '分页 Pagination', link: '/components/data/pagination' },
            { text: '时间线 Timeline', link: '/components/data/timeline' },
            { text: '走马灯 Carousel', link: '/components/data/carousel' },
            { text: '动态表格 DynamicTable', link: '/components/data/dynamic-table' },
            { text: '树形控件 Tree', link: '/components/data/tree' },
            { text: '空状态 Empty', link: '/components/data/empty' }
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: '容器 Container', link: '/components/layout/container' },
            { text: '栅格 Grid', link: '/components/layout/grid' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: '对话框 Modal', link: '/components/feedback/modal' },
            { text: '抽屉 Drawer', link: '/components/feedback/drawer' },
            { text: '警告 Alert', link: '/components/feedback/alert' },
            { text: '文字提示 Tooltip', link: '/components/feedback/tooltip' },
            { text: '气泡确认框 Popconfirm', link: '/components/feedback/popconfirm' },
            { text: '消息提示 Message', link: '/components/feedback/message' },
            { text: '消息弹框 MessageBox', link: '/components/feedback/message-box' },
            { text: '通知 Notification', link: '/components/feedback/notification' },
            { text: '回到顶部 Backtop', link: '/components/feedback/backtop' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: '标签页 Tabs', link: '/components/navigation/tabs' },
            { text: '菜单 Menu', link: '/components/navigation/menu' },
            { text: '面包屑 Breadcrumb', link: '/components/navigation/breadcrumb' },
            { text: '步骤条 Steps', link: '/components/navigation/steps' },
            { text: '页头 PageHeader', link: '/components/navigation/page-header' }
          ]
        },
        {
          text: '业务组件',
          items: [
            { text: '高级表格 ProTable', link: '/components/business/pro-table' },
            { text: '搜索表单 SearchForm', link: '/components/business/search-form' },
            { text: '统计数值 Statistic', link: '/components/business/statistic' },
            { text: 'Markdown编辑器', link: '/components/business/markdown-editor' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xto-ui' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 Xto UI'
    }
  }
})