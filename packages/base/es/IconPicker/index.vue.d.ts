type __VLS_Props = {
    modelValue?: string;
    background?: string;
    size?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    "update:background": (value: string) => any;
    change: (icon: string, background: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:background"?: ((value: string) => any) | undefined;
    onChange?: ((icon: string, background: string) => any) | undefined;
}>, {
    size: number;
    modelValue: string;
    background: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
