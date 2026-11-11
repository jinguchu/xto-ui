import { ComponentSize } from '@xto/core';
/**
 * InputNumber Props
 */
export interface InputNumberProps {
    /**
     * 绑定值
     */
    modelValue?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 步长
     * @default 1
     */
    step?: number;
    /**
     * 步长精度
     */
    precision?: number;
    /**
     * 输入框尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否只读
     * @default false
     */
    readonly?: boolean;
    /**
     * 是否可清空
     * @default false
     */
    clearable?: boolean;
    /**
     * 是否显示控制按钮
     * @default true
     */
    controls?: boolean;
    /**
     * 控制按钮位置
     * @default 'right'
     */
    controlsPosition?: 'left' | 'right';
    /**
     * 占位文本
     */
    placeholder?: string;
}
/**
 * InputNumber Emits
 */
export interface InputNumberEmits {
    (e: 'update:modelValue', value: number): void;
    (e: 'change', value: number): void;
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
}
/**
 * InputNumber Expose
 */
export interface InputNumberExpose {
    focus: () => void;
    blur: () => void;
    increase: () => void;
    decrease: () => void;
}
/**
 * InputNumber 组件实例类型
 */
export type InputNumberInstance = InstanceType<typeof import('./index.vue').default>;
