interface SegmentedOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
type __VLS_Props = {
    /** 绑定值 */
    modelValue?: string | number;
    /** 选项数据 */
    options?: (string | number | SegmentedOption)[];
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否块级 */
    block?: boolean;
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            option: SegmentedOption;
        }): any;
    };
    refs: {
        containerRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    change: (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
}>, {
    modelValue: string | number;
    size: "large" | "default" | "small";
    disabled: boolean;
    options: (string | number | SegmentedOption)[];
    block: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
