import { ComponentSize } from '@xto/core';
/**
 * Checkbox Props
 */
export interface CheckboxProps {
    /**
     * 绑定值
     */
    modelValue?: boolean | string | number | (string | number)[];
    /**
     * 选项值
     */
    value?: string | number;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否显示边框
     * @default false
     */
    border?: boolean;
    /**
     * 复选框尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 是否不确定状态
     * @default false
     */
    indeterminate?: boolean;
    /**
     * 原生 name 属性
     */
    name?: string;
    /**
     * 选中时的值
     * @default true
     */
    trueValue?: string | number | boolean;
    /**
     * 未选中时的值
     * @default false
     */
    falseValue?: string | number | boolean;
}
/**
 * Checkbox Emits
 */
export interface CheckboxEmits {
    (e: 'update:modelValue', value: boolean | string | number | (string | number)[]): void;
    (e: 'change', value: boolean | string | number | (string | number)[]): void;
}
/**
 * Checkbox 组件实例类型
 */
export type CheckboxInstance = InstanceType<typeof import('./index.vue').default>;
/**
 * CheckboxGroup Props
 */
export interface CheckboxGroupProps {
    /**
     * 绑定值
     */
    modelValue?: (string | number)[];
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 复选框尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 是否显示边框
     * @default false
     */
    border?: boolean;
    /**
     * 可被勾选的最小数量
     */
    min?: number;
    /**
     * 可被勾选的最大数量
     */
    max?: number;
    /**
     * 原生 name 属性
     */
    name?: string;
}
/**
 * CheckboxGroup Emits
 */
export interface CheckboxGroupEmits {
    (e: 'update:modelValue', value: (string | number)[]): void;
    (e: 'change', value: (string | number)[]): void;
}
/**
 * CheckboxGroup 组件实例类型
 */
export type CheckboxGroupInstance = InstanceType<typeof import('./group.vue').default>;
