type __VLS_Props = {
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
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    modelValue: string;
    size: "large" | "default" | "small";
    disabled: boolean;
    showAlpha: boolean;
    predefine: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    panelRef: HTMLDivElement;
    sliderRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
