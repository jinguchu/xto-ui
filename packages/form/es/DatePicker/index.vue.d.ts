import { ComponentSize } from '@xto/core';
type DatePickerType = 'date' | 'daterange' | 'month' | 'year';
type __VLS_Props = {
    modelValue?: Date | string | number | [Date | string | number, Date | string | number] | null;
    value?: Date | string | number | [Date | string | number, Date | string | number] | null;
    type?: DatePickerType;
    placeholder?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    size?: ComponentSize;
    format?: string;
    valueFormat?: string;
    disabledDate?: (date: Date) => boolean;
    minDate?: Date | string | null;
    maxDate?: Date | string | null;
    showTime?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | Date | [string | number | Date, string | number | Date] | null) => any;
    "update:value": (value: string | number | Date | [string | number | Date, string | number | Date] | null) => any;
    change: (value: string | number | Date | [string | number | Date, string | number | Date] | null) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    clear: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | Date | [string | number | Date, string | number | Date] | null) => any) | undefined;
    "onUpdate:value"?: ((value: string | number | Date | [string | number | Date, string | number | Date] | null) => any) | undefined;
    onChange?: ((value: string | number | Date | [string | number | Date, string | number | Date] | null) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    modelValue: Date | string | number | [Date | string | number, Date | string | number] | null;
    value: Date | string | number | [Date | string | number, Date | string | number] | null;
    type: DatePickerType;
    placeholder: string;
    size: ComponentSize;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
    format: string;
    valueFormat: string;
    showTime: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    pickerRef: HTMLDivElement;
    inputRef: HTMLInputElement;
    popperRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
