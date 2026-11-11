export interface TransferOption {
    key: string | number;
    label: string;
    disabled?: boolean;
}
type __VLS_Props = {
    modelValue?: (string | number)[];
    data?: TransferOption[];
    titles?: [string, string];
    buttonTexts?: [string, string];
    filterable?: boolean;
    filterPlaceholder?: string;
    filterMethod?: (query: string, option: TransferOption) => boolean;
    targetOrder?: 'original' | 'push' | 'unshift';
    props?: {
        key?: string;
        label?: string;
        disabled?: string;
    };
    leftDefaultChecked?: (string | number)[];
    rightDefaultChecked?: (string | number)[];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'left-empty'?(_: {}): any;
        'right-empty'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    clearQuery: (direction: "left" | "right") => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: (string | number)[]) => any;
    change: (value: (string | number)[], direction: "right" | "left", movedKeys: (string | number)[]) => any;
    "left-check-change": (checkedKeys: (string | number)[]) => any;
    "right-check-change": (checkedKeys: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: (string | number)[]) => any) | undefined;
    onChange?: ((value: (string | number)[], direction: "right" | "left", movedKeys: (string | number)[]) => any) | undefined;
    "onLeft-check-change"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onRight-check-change"?: ((checkedKeys: (string | number)[]) => any) | undefined;
}>, {
    modelValue: (string | number)[];
    data: TransferOption[];
    filterable: boolean;
    titles: [string, string];
    buttonTexts: [string, string];
    filterPlaceholder: string;
    targetOrder: "original" | "push" | "unshift";
    leftDefaultChecked: (string | number)[];
    rightDefaultChecked: (string | number)[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
