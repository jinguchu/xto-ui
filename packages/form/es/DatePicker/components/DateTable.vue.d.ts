type __VLS_Props = {
    modelValue?: Date | null;
    viewedMonth?: Date;
    minDate?: Date | null;
    maxDate?: Date | null;
    disabledDate?: (date: Date) => boolean;
    rangeState?: {
        selecting: boolean;
        startDate: Date | null;
        endDate: Date | null;
    };
    selectionMode?: 'single' | 'range';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    pick: (date: Date) => any;
    "range-select": (date: Date) => any;
    "range-move": (date: Date) => any;
    "update:viewedMonth": (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onPick?: ((date: Date) => any) | undefined;
    "onRange-select"?: ((date: Date) => any) | undefined;
    "onRange-move"?: ((date: Date) => any) | undefined;
    "onUpdate:viewedMonth"?: ((date: Date) => any) | undefined;
}>, {
    modelValue: Date | null;
    viewedMonth: Date;
    minDate: Date | null;
    maxDate: Date | null;
    rangeState: {
        selecting: boolean;
        startDate: Date | null;
        endDate: Date | null;
    };
    selectionMode: "single" | "range";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLTableElement>;
export default _default;
