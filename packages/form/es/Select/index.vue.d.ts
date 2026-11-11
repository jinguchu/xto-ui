import { ComponentSize } from '@xto/core';
type SelectType = 'single' | 'multiple' | 'cascader';
interface Option {
    [key: string]: any;
    value: string | number;
    label: string;
    disabled?: boolean;
    children?: Option[];
}
type __VLS_Props = {
    modelValue?: string | number | string[] | number[] | (string | number)[];
    value?: string | number | string[] | number[] | (string | number)[];
    options?: Option[];
    type?: SelectType;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    filterable?: boolean;
    filterMethod?: (query: string, option: Option) => boolean;
    size?: ComponentSize;
    multipleLimit?: number;
    collapseTags?: boolean;
    maxCollapseTags?: number;
    separator?: string;
    valueKey?: string;
    labelKey?: string;
    childrenKey?: string;
    noDataText?: string;
    noMatchText?: string;
    mode?: 'single' | 'multiple';
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        selectRef: HTMLDivElement;
        inputRef: HTMLInputElement;
        popperRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | (string | number)[] | null) => any;
    "update:value": (value: string | number | (string | number)[] | null) => any;
    change: (value: string | number | (string | number)[] | null) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    clear: () => any;
    "visible-change": (visible: boolean) => any;
    "remove-tag": (tag: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | null) => any) | undefined;
    "onUpdate:value"?: ((value: string | number | (string | number)[] | null) => any) | undefined;
    onChange?: ((value: string | number | (string | number)[] | null) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onVisible-change"?: ((visible: boolean) => any) | undefined;
    "onRemove-tag"?: ((tag: string | number) => any) | undefined;
}>, {
    modelValue: string | number | string[] | number[] | (string | number)[];
    value: string | number | string[] | number[] | (string | number)[];
    type: SelectType;
    placeholder: string;
    size: ComponentSize;
    disabled: boolean;
    clearable: boolean;
    separator: string;
    mode: "single" | "multiple";
    options: Option[];
    filterable: boolean;
    multipleLimit: number;
    collapseTags: boolean;
    maxCollapseTags: number;
    valueKey: string;
    labelKey: string;
    childrenKey: string;
    noDataText: string;
    noMatchText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    selectRef: HTMLDivElement;
    inputRef: HTMLInputElement;
    popperRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
