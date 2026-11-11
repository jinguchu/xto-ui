interface CascaderOption {
    value: string | number;
    label: string;
    children?: CascaderOption[];
    disabled?: boolean;
}
interface CascaderProps {
    multiple?: boolean;
    checkStrictly?: boolean;
    emitPath?: boolean;
    label?: string;
    value?: string;
    children?: string;
    disabled?: string;
}
type __VLS_Props = {
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
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | (string | number)[] | (string | number)[][]) => any;
    change: (value: string | number | (string | number)[] | (string | number)[][]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | (string | number)[][]) => any) | undefined;
    onChange?: ((value: string | number | (string | number)[] | (string | number)[][]) => any) | undefined;
}>, {
    modelValue: string | number | (string | number)[] | (string | number)[][];
    placeholder: string;
    size: "large" | "default" | "small";
    disabled: boolean;
    clearable: boolean;
    props: CascaderProps;
    separator: string;
    options: CascaderOption[];
    filterable: boolean;
    showAllLevels: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    menuRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
