import { ComponentSize } from '@xto/core';
/**
 * Rate Props
 */
export interface RateProps {
    /**
     * 绑定值
     */
    modelValue?: number;
    /**
     * 最大分值
     * @default 5
     */
    max?: number;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否允许半选
     * @default false
     */
    allowHalf?: boolean;
    /**
     * 是否显示分数
     * @default false
     */
    showScore?: boolean;
    /**
     * 是否显示辅助文字
     * @default false
     */
    showText?: boolean;
    /**
     * 评分尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 辅助文字数组
     */
    texts?: string[];
    /**
     * 辅助文字颜色
     */
    textColor?: string;
    /**
     * 选中颜色
     */
    activeColor?: string;
    /**
     * 未选中颜色
     */
    voidColor?: string;
    /**
     * 禁用颜色
     */
    disabledVoidColor?: string;
}
/**
 * Rate Emits
 */
export interface RateEmits {
    (e: 'update:modelValue', value: number): void;
    (e: 'change', value: number): void;
}
/**
 * Rate 组件实例类型
 */
export type RateInstance = InstanceType<typeof import('./index.vue').default>;
