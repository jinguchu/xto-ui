export interface RateProps {
    /** 绑定值 */
    modelValue?: number;
    /** 最大分值 */
    max?: number;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readonly?: boolean;
    /** 是否允许半选 */
    allowHalf?: boolean;
    /** 低分和中等分数的界限值 */
    lowThreshold?: number;
    /** 高分和中等分数的界限值 */
    highThreshold?: number;
    /** 自定义颜色数组 */
    colors?: string[];
    /** 未选中时的颜色 */
    voidColor?: string;
    /** 禁用时的颜色 */
    disabledVoidColor?: string;
    /** 选中时的图标 */
    icon?: string;
    /** 未选中时的图标 */
    voidIcon?: string;
    /** 禁用时的图标 */
    disabledVoidIcon?: string;
    /** 是否显示辅助文字 */
    showText?: boolean;
    /** 是否显示当前分数 */
    showScore?: boolean;
    /** 辅助文字颜色 */
    textColor?: string;
    /** 辅助文字数组 */
    texts?: string[];
    /** 分数显示模板 */
    scoreTemplate?: string;
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
}
export { default as Rate } from './index.vue';
