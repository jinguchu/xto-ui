import { ComponentSize } from '@xto/core';
/**
 * Input 类型
 */
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
/**
 * Input Props
 */
export interface InputProps {
    /**
     * 绑定值
     */
    modelValue?: string | number;
    /**
     * 绑定值（别名）
     */
    value?: string | number;
    /**
     * 输入框类型
     * @default 'text'
     */
    type?: InputType;
    /**
     * 占位文本
     */
    placeholder?: string;
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
     * 最大输入长度
     */
    maxlength?: number | string;
    /**
     * 最小输入长度
     */
    minlength?: number | string;
    /**
     * 是否显示字数统计
     * @default false
     */
    showWordLimit?: boolean;
    /**
     * 是否可清空
     * @default false
     */
    clearable?: boolean;
    /**
     * 是否显示密码切换按钮
     * @default false
     */
    showPassword?: boolean;
    /**
     * 前缀图标
     */
    prefixIcon?: string;
    /**
     * 后缀图标
     */
    suffixIcon?: string;
}
/**
 * Input Emits
 */
export interface InputEmits {
    (e: 'update:modelValue', value: string | number): void;
    (e: 'update:value', value: string | number): void;
    (e: 'input', value: string | number): void;
    (e: 'change', value: string | number): void;
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
    (e: 'clear'): void;
}
/**
 * Input Expose
 */
export interface InputExpose {
    focus: () => void;
    blur: () => void;
    inputRef: HTMLInputElement | undefined;
}
/**
 * Input 组件实例类型
 */
export type InputInstance = InstanceType<typeof import('./index.vue').default>;
