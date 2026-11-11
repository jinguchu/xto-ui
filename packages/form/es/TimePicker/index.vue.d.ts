import { ComponentSize } from '@xto/core';
type TimePickerType = 'time' | 'timerange';
type __VLS_Props = {
    modelValue?: Date | string | number | [Date | string | number, Date | string | number] | null;
    type?: TimePickerType;
    placeholder?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    size?: ComponentSize;
    format?: string;
    valueFormat?: string;
    disabledHours?: () => number[];
    disabledMinutes?: (hour: number) => number[];
    disabledSeconds?: (hour: number, minute: number) => number[];
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | Date | [string | Date, string | Date] | null) => any;
    change: (value: string | Date | [string | Date, string | Date] | null) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    clear: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | Date | [string | Date, string | Date] | null) => any) | undefined;
    onChange?: ((value: string | Date | [string | Date, string | Date] | null) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    modelValue: Date | string | number | [Date | string | number, Date | string | number] | null;
    type: TimePickerType;
    placeholder: string;
    size: ComponentSize;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
    format: string;
    valueFormat: string;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    pickerRef: HTMLDivElement;
    inputRef: HTMLInputElement;
    popperRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
