type __VLS_Props = {
    modelValue?: Date | null;
    viewedYear?: number;
    disabledDate?: (date: Date) => boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    pick: (year: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onPick?: ((year: number) => any) | undefined;
}>, {
    modelValue: Date | null;
    viewedYear: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLTableElement>;
export default _default;
