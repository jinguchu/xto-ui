import { ComponentSize } from '@xto/core';
/**
 * Textarea Props
 */
export interface TextareaProps {
    /**
     * 绑定值
     */
    modelValue?: string;
    /**
     * 占位文本
     */
    placeholder?: string;
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
    maxlength?: number;
    /**
     * 最小输入长度
     */
    minlength?: number;
    /**
     * 是否显示字数统计
     * @default false
     */
    showWordLimit?: boolean;
    /**
     * 文本域行数
     * @default 2
     */
    rows?: number;
    /**
     * 文本域最小行数
     */
    minRows?: number;
    /**
     * 文本域最大行数
     */
    maxRows?: number;
    /**
     * 是否自动调整高度
     * @default false
     */
    autosize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    /**
     * 是否可清空
     * @default false
     */
    clearable?: boolean;
    /**
     * 输入框尺寸
     * @default 'default'
     */
    size?: ComponentSize;
}
/**
 * Textarea Emits
 */
export interface TextareaEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'input', value: string): void;
    (e: 'change', value: string): void;
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
    (e: 'clear'): void;
}
/**
 * Textarea Expose
 */
export interface TextareaExpose {
    focus: () => void;
    blur: () => void;
    textareaRef: HTMLTextAreaElement | undefined;
}
/**
 * Textarea 组件实例类型
 */
export type TextareaInstance = InstanceType<typeof import('./index.vue').default>;
