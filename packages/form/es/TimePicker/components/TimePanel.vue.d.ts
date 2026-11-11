type __VLS_Props = {
    modelValue?: Date | null;
    format?: string;
    disabledHours?: () => number[];
    disabledMinutes?: (hour: number) => number[];
    disabledSeconds?: (hour: number, minute: number) => number[];
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    cancel: () => any;
    confirm: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    onConfirm?: ((date: Date) => any) | undefined;
}>, {
    modelValue: Date | null;
    format: string;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    hourListRef: HTMLDivElement;
    minuteListRef: HTMLDivElement;
    secondListRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
