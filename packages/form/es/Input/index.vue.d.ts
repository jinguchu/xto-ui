import { ComponentSize } from '@xto/core';
type __VLS_Props = {
    modelValue?: string | number;
    value?: string | number;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    placeholder?: string;
    size?: ComponentSize;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: number | string;
    minlength?: number | string;
    showWordLimit?: boolean;
    clearable?: boolean;
    showPassword?: boolean;
    prefixIcon?: string;
    suffixIcon?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    focus: () => void;
    blur: () => void;
    inputRef: import('vue').Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    "update:value": (value: string | number) => any;
    input: (value: string | number) => any;
    change: (value: string | number) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    clear: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    "onUpdate:value"?: ((value: string | number) => any) | undefined;
    onInput?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    modelValue: string | number;
    value: string | number;
    type: "text" | "password" | "email" | "number" | "tel" | "url";
    placeholder: string;
    size: ComponentSize;
    disabled: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    clearable: boolean;
    showPassword: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
