import { ComponentSize } from '@xto/core';
/**
 * Switch Props
 */
export interface SwitchProps {
    /**
     * 绑定值
     */
    modelValue?: boolean | string | number;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 开关尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 打开时的值
     * @default true
     */
    activeValue?: boolean | string | number;
    /**
     * 关闭时的值
     * @default false
     */
    inactiveValue?: boolean | string | number;
    /**
     * 打开时的文字描述
     */
    activeText?: string;
    /**
     * 关闭时的文字描述
     */
    inactiveText?: string;
    /**
     * 打开时的背景色
     */
    activeColor?: string;
    /**
     * 关闭时的背景色
     */
    inactiveColor?: string;
    /**
     * 是否显示加载中
     * @default false
     */
    loading?: boolean;
}
/**
 * Switch Emits
 */
export interface SwitchEmits {
    (e: 'update:modelValue', value: boolean | string | number): void;
    (e: 'change', value: boolean | string | number): void;
}
/**
 * Switch Expose
 */
export interface SwitchExpose {
    focus: () => void;
    blur: () => void;
}
/**
 * Switch 组件实例类型
 */
export type SwitchInstance = InstanceType<typeof import('./index.vue').default>;
