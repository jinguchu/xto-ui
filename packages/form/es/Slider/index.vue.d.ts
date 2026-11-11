type __VLS_Props = {
    modelValue?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    showTooltip?: boolean;
    formatTooltip?: (value: number) => string | number;
    showStops?: boolean;
    vertical?: boolean;
    height?: string | number;
    marks?: Record<number, string | {
        style?: Record<string, string>;
        label?: string;
    }>;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    input: (value: number) => any;
    change: (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onInput?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {
    modelValue: number;
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    vertical: boolean;
    height: string | number;
    showTooltip: boolean;
    showStops: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    sliderRef: HTMLDivElement;
    buttonRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
