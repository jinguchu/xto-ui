import { default as Cascader } from './index.vue';
export { Cascader };
export default Cascader;
export type CascaderOption = {
    value: string | number;
    label: string;
    children?: CascaderOption[];
    disabled?: boolean;
};
export type CascaderProps = {
    multiple?: boolean;
    checkStrictly?: boolean;
    emitPath?: boolean;
    label?: string;
    value?: string;
    children?: string;
    disabled?: string;
};
export type CascaderComponentProps = {
    /** 绑定值 */
    modelValue?: string | number | (string | number)[] | (string | number)[][];
    /** 选项数据 */
    options?: CascaderOption[];
    /** 占位符 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否可清空 */
    clearable?: boolean;
    /** 是否显示全部层级 */
    showAllLevels?: boolean;
    /** 是否可搜索 */
    filterable?: boolean;
    /** 自定义字段配置 */
    props?: CascaderProps;
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
    /** 分隔符 */
    separator?: string;
};
