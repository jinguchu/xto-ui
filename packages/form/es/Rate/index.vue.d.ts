type __VLS_Props = {
    modelValue?: number;
    max?: number;
    disabled?: boolean;
    readonly?: boolean;
    allowHalf?: boolean;
    lowThreshold?: number;
    highThreshold?: number;
    colors?: string[];
    voidColor?: string;
    disabledVoidColor?: string;
    icon?: string;
    voidIcon?: string;
    disabledVoidIcon?: string;
    showText?: boolean;
    showScore?: boolean;
    textColor?: string;
    texts?: string[];
    scoreTemplate?: string;
    size?: 'large' | 'default' | 'small';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    change: (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {
    modelValue: number;
    size: "large" | "default" | "small";
    disabled: boolean;
    readonly: boolean;
    icon: string;
    max: number;
    allowHalf: boolean;
    lowThreshold: number;
    highThreshold: number;
    colors: string[];
    voidColor: string;
    disabledVoidColor: string;
    voidIcon: string;
    disabledVoidIcon: string;
    showText: boolean;
    showScore: boolean;
    textColor: string;
    texts: string[];
    scoreTemplate: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
