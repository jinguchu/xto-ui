import { ComponentSize } from '@xto/core';
type __VLS_Props = {
    modelValue?: number;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    stepStrictly?: boolean;
    precision?: number;
    size?: ComponentSize;
    disabled?: boolean;
    controls?: boolean;
    controlsPosition?: '' | 'right';
    placeholder?: string;
    valueOnClear?: number | null;
};
declare function increase(): void;
declare function decrease(): void;
declare function clear(): void;
declare function focus(): void;
declare function blur(): void;
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    focus: typeof focus;
    blur: typeof blur;
    clear: typeof clear;
    increase: typeof increase;
    decrease: typeof decrease;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number | undefined) => any;
    "update:value": (value: number | undefined) => any;
    change: (currentValue: number | undefined, oldValue: number | undefined) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
    "onUpdate:value"?: ((value: number | undefined) => any) | undefined;
    onChange?: ((currentValue: number | undefined, oldValue: number | undefined) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    modelValue: number;
    value: number;
    placeholder: string;
    size: ComponentSize;
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    stepStrictly: boolean;
    precision: number;
    controls: boolean;
    controlsPosition: "" | "right";
    valueOnClear: number | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
