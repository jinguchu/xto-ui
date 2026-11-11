import { ComponentSize } from '@xto/core';
export type SelectType = 'single' | 'multiple' | 'cascader';
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
    children?: SelectOption[];
}
export interface SelectProps {
    /** 绑定值 */
    modelValue?: string | number | (string | number)[];
    /** 选项数据 */
    options?: SelectOption[];
    /** 选择类型 */
    type?: SelectType;
    /** 占位文本 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否可清空 */
    clearable?: boolean;
    /** 是否可搜索 */
    filterable?: boolean;
    /** 自定义搜索方法 */
    filterMethod?: (query: string, option: SelectOption) => boolean;
    /** 输入框尺寸 */
    size?: ComponentSize;
    /** 多选限制数量 */
    multipleLimit?: number;
    /** 是否折叠标签 */
    collapseTags?: boolean;
    /** 折叠标签最大数量 */
    maxCollapseTags?: number;
    /** 级联分隔符 */
    separator?: string;
    /** 值字段名 */
    valueKey?: string;
    /** 标签字段名 */
    labelKey?: string;
    /** 子节点字段名 */
    childrenKey?: string;
    /** 无数据提示 */
    noDataText?: string;
    /** 无匹配提示 */
    noMatchText?: string;
}
export { default as Select } from './index.vue';
export declare const SelectOption: import('vue').DefineComponent<{
    value: string | number;
    label: string;
    disabled?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    value: string | number;
    label: string;
    disabled?: boolean;
}> & Readonly<{}>, {
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
