type __VLS_Props = {
    modelValue?: boolean | number | string;
    checked?: boolean | number | string;
    disabled?: boolean;
    width?: number | string;
    activeColor?: string;
    inactiveColor?: string;
    activeValue?: boolean | number | string;
    inactiveValue?: boolean | number | string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => any;
    change: (value: string | number | boolean) => any;
    "update:checked": (value: string | number | boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    onChange?: ((value: string | number | boolean) => any) | undefined;
    "onUpdate:checked"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    modelValue: boolean | number | string;
    disabled: boolean;
    checked: boolean | number | string;
    width: number | string;
    activeColor: string;
    inactiveColor: string;
    activeValue: boolean | number | string;
    inactiveValue: boolean | number | string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
