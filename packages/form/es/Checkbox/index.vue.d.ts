type __VLS_Props = {
    modelValue?: boolean | string | number | boolean[] | string[] | number[];
    value?: string | number | boolean;
    label?: string | number;
    disabled?: boolean;
    name?: string;
    indeterminate?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean | string[] | number[] | boolean[]) => any;
    change: (value: string | number | boolean | string[] | number[] | boolean[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | boolean | string[] | number[] | boolean[]) => any) | undefined;
    onChange?: ((value: string | number | boolean | string[] | number[] | boolean[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
