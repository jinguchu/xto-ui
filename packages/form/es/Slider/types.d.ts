import { ComponentSize } from '@xto/core';
/**
 * Slider Props
 */
export interface SliderProps {
    /**
     * 绑定值
     */
    modelValue?: number | [number, number];
    /**
     * 最小值
     * @default 0
     */
    min?: number;
    /**
     * 最大值
     * @default 100
     */
    max?: number;
    /**
     * 步长
     * @default 1
     */
    step?: number;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 滑块尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 是否显示输入框
     * @default false
     */
    showInput?: boolean;
    /**
     * 是否显示断点
     * @default false
     */
    showStops?: boolean;
    /**
     * 是否显示 Tooltip
     * @default true
     */
    showTooltip?: boolean;
    /**
     * 是否范围选择
     * @default false
     */
    range?: boolean;
    /**
     * 是否竖向模式
     * @default false
     */
    vertical?: boolean;
    /**
     * 滑块高度（竖向模式）
     * @default '200px'
     */
    height?: string;
}
/**
 * Slider Emits
 */
export interface SliderEmits {
    (e: 'update:modelValue', value: number | [number, number]): void;
    (e: 'change', value: number | [number, number]): void;
    (e: 'input', value: number | [number, number]): void;
}
/**
 * Slider 组件实例类型
 */
export type SliderInstance = InstanceType<typeof import('./index.vue').default>;
