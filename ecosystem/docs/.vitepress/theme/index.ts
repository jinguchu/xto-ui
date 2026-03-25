import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h, defineComponent } from 'vue'
import './custom.css'

// Import components using aliases configured in vite
import { Button, Loading, Icon, Badge, Space, Divider } from '@xto/base'
import { Input, InputNumber, Textarea, Switch, Radio, RadioGroup, RadioButton, Checkbox, CheckboxGroup, Form, FormItem, DatePicker, TimePicker, Select, Transfer, Slider, Upload, Rate } from '@xto/form'
import { Tag, Card, Progress, Pagination, DynamicTable, Tree, Empty, Timeline, TimelineItem, Carousel, CarouselItem } from '@xto/data'
import { Container, Header, Aside, Main, Footer, Row, Col } from '@xto/layout'
import { Modal, Drawer, Alert, Tooltip, Popconfirm, Backtop, Message, MessageBox, Notification } from '@xto/feedback'
import { Tabs, TabPane, Menu, MenuItem, MenuItemGroup, SubMenu, Breadcrumb, BreadcrumbItem, Steps, Step, PageHeader } from '@xto/navigation'
import { ProTable, SearchForm, Statistic, MarkdownEditor } from '@xto/business'

// Demo wrapper component
const DemoBlock = (_, { slots }) => h('div', { class: 'demo-block' }, [
  h('div', { class: 'demo-preview' }, slots.default?.()),
  slots.code ? h('div', { class: 'demo-code' }, slots.code()) : null
])

// Backtop wrapper - 确保组件正确渲染
const BacktopWrapper = defineComponent({
  setup() {
    return () => h(Backtop)
  }
})

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'layout-bottom': () => h(BacktopWrapper)
  }),
  enhanceApp({ app }) {
    // Register base components
    app.component('XButton', Button)
    app.component('XLoading', Loading)
    app.component('XIcon', Icon)
    app.component('XBadge', Badge)
    app.component('XSpace', Space)
    app.component('XDivider', Divider)

    // Register form components
    app.component('XInput', Input)
    app.component('XInputNumber', InputNumber)
    app.component('XTextarea', Textarea)
    app.component('XSwitch', Switch)
    app.component('XRadio', Radio)
    app.component('XRadioGroup', RadioGroup)
    app.component('XRadioButton', RadioButton)
    app.component('XCheckbox', Checkbox)
    app.component('XCheckboxGroup', CheckboxGroup)
    app.component('XForm', Form)
    app.component('XFormItem', FormItem)
    app.component('XDatePicker', DatePicker)
    app.component('XTimePicker', TimePicker)
    app.component('XSelect', Select)
    app.component('XTransfer', Transfer)
    app.component('XSlider', Slider)
    app.component('XUpload', Upload)
    app.component('XRate', Rate)

    // Register data components
    app.component('XTag', Tag)
    app.component('XCard', Card)
    app.component('XProgress', Progress)
    app.component('XPagination', Pagination)
    app.component('XDynamicTable', DynamicTable)
    app.component('XTree', Tree)
    app.component('XEmpty', Empty)
    app.component('XTimeline', Timeline)
    app.component('XTimelineItem', TimelineItem)
    app.component('XCarousel', Carousel)
    app.component('XCarouselItem', CarouselItem)

    // Register layout components
    app.component('XContainer', Container)
    app.component('XHeader', Header)
    app.component('XAside', Aside)
    app.component('XMain', Main)
    app.component('XFooter', Footer)
    app.component('XRow', Row)
    app.component('XCol', Col)

    // Register feedback components
    app.component('XModal', Modal)
    app.component('XDrawer', Drawer)
    app.component('XAlert', Alert)
    app.component('XTooltip', Tooltip)
    app.component('XPopconfirm', Popconfirm)
    app.component('XBacktop', Backtop)

    // Register Message service globally
    app.config.globalProperties.Message = Message
    app.provide('Message', Message)

    // Register MessageBox service globally
    app.config.globalProperties.MessageBox = MessageBox
    app.provide('MessageBox', MessageBox)

    // Register Notification service globally
    app.config.globalProperties.Notification = Notification
    app.provide('Notification', Notification)

    // Register navigation components
    app.component('XTabs', Tabs)
    app.component('XTabPane', TabPane)
    app.component('XMenu', Menu)
    app.component('XMenuItem', MenuItem)
    app.component('XMenuItemGroup', MenuItemGroup)
    app.component('XSubMenu', SubMenu)
    app.component('XBreadcrumb', Breadcrumb)
    app.component('XBreadcrumbItem', BreadcrumbItem)
    app.component('XSteps', Steps)
    app.component('XStep', Step)
    app.component('XPageHeader', PageHeader)

    // Register business components
    app.component('XProTable', ProTable)
    app.component('XSearchForm', SearchForm)
    app.component('XStatistic', Statistic)
    app.component('XMarkdownEditor', MarkdownEditor)

    // Register demo block
    app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme