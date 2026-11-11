import { ComponentSize } from '@xto/core';
/**
 * Radio Props
 */
export interface RadioProps {
    /**
     * 绑定值
     */
    modelValue?: string | number | boolean;
    /**
     * 选项值
     */
    value?: string | number | boolean;
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
     * 单选框尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 原生 name 属性
     */
    name?: string;
}
/**
 * Radio Emits
 */
export interface RadioEmits {
    (e: 'update:modelValue', value: string | number | boolean): void;
    (e: 'change', value: string | number | boolean): void;
}
/**
 * Radio 组件实例类型
 */
export type RadioInstance = InstanceType<typeof import('./index.vue').default>;
/**
 * RadioGroup Props
 */
export interface RadioGroupProps {
    /**
     * 绑定值
     */
    modelValue?: string | number | boolean;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 单选框尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 是否显示边框
     * @default false
     */
    border?: boolean;
    /**
     * 原生 name 属性
     */
    name?: string;
}
/**
 * RadioGroup Emits
 */
export interface RadioGroupEmits {
    (e: 'update:modelValue', value: string | number | boolean): void;
    (e: 'change', value: string | number | boolean): void;
}
/**
 * RadioGroup 组件实例类型
 */
export type RadioGroupInstance = InstanceType<typeof import('./group.vue').default>;
