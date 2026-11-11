import { ComponentSize } from '@xto/core';
/**
 * Select 类型
 */
export type SelectType = 'single' | 'multiple' | 'cascader';
/**
 * Select 选项
 */
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
    children?: SelectOption[];
}
/**
 * Select Props
 */
export interface SelectProps {
    /**
     * 绑定值
     */
    modelValue?: string | number | string[] | number[] | (string | number)[];
    /**
     * 绑定值（别名）
     */
    value?: string | number | string[] | number[] | (string | number)[];
    /**
     * 选项数据
     */
    options?: SelectOption[];
    /**
     * 选择器类型
     * @default 'single'
     */
    type?: SelectType;
    /**
     * 占位文本
     * @default '请选择'
     */
    placeholder?: string;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否可清空
     * @default false
     */
    clearable?: boolean;
    /**
     * 是否可搜索
     * @default false
     */
    filterable?: boolean;
    /**
     * 自定义搜索方法
     */
    filterMethod?: (query: string, option: SelectOption) => boolean;
    /**
     * 输入框尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 多选时最大选择数量
     * @default 0
     */
    multipleLimit?: number;
    /**
     * 多选时是否折叠标签
     * @default true
     */
    collapseTags?: boolean;
    /**
     * 显示的折叠标签数量
     * @default 1
     */
    maxCollapseTags?: number;
    /**
     * 级联选择分隔符
     * @default ' / '
     */
    separator?: string;
    /**
     * 选项值字段名
     * @default 'value'
     */
    valueKey?: string;
    /**
     * 选项标签字段名
     * @default 'label'
     */
    labelKey?: string;
    /**
     * 子选项字段名
     * @default 'children'
     */
    childrenKey?: string;
    /**
     * 无数据时的文本
     * @default '暂无数据'
     */
    noDataText?: string;
    /**
     * 无匹配数据时的文本
     * @default '无匹配数据'
     */
    noMatchText?: string;
}
/**
 * Select Emits
 */
export interface SelectEmits {
    (e: 'update:modelValue', value: string | number | (string | number)[] | null): void;
    (e: 'update:value', value: string | number | (string | number)[] | null): void;
    (e: 'change', value: string | number | (string | number)[] | null): void;
    (e: 'clear'): void;
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
    (e: 'visible-change', visible: boolean): void;
    (e: 'remove-tag', tag: string | number): void;
}
/**
 * Select Expose
 */
export interface SelectExpose {
    visible: boolean;
    selectedValues: (string | number)[];
    showPopper: () => void;
    hidePopper: () => void;
    handleClear: () => void;
}
/**
 * Select 组件实例类型
 */
export type SelectInstance = InstanceType<typeof import('./index.vue').default>;
