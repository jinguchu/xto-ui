import { default as ColorPicker } from './index.vue';
export { ColorPicker };
export default ColorPicker;
export type ColorPickerProps = {
    /** 绑定值 (hex 格式) */
    modelValue?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否显示透明度 */
    showAlpha?: boolean;
    /** 预定义颜色 */
    predefine?: string[];
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
};
