import { default as Segmented } from './index.vue';
export { Segmented };
export default Segmented;
export type SegmentedOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
};
export type SegmentedProps = {
    /** 绑定值 */
    modelValue?: string | number;
    /** 选项数据 */
    options?: (string | number | SegmentedOption)[];
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否块级 */
    block?: boolean;
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
};
