type __VLS_Props = {
    modelValue?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: number;
    minlength?: number;
    rows?: number;
    autosize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    showWordLimit?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    focus: () => void;
    blur: () => void;
    textareaRef: import('vue').Ref<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    "update:value": (value: string) => any;
    input: (value: string) => any;
    change: (value: string) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    modelValue: string;
    value: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    rows: number;
    autosize: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    resize: "none" | "both" | "horizontal" | "vertical";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    textareaRef: HTMLTextAreaElement;
}, HTMLDivElement>;
export default _default;
