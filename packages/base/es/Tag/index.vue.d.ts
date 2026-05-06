type __VLS_Props = {
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    size?: 'large' | 'default' | 'small';
    effect?: 'dark' | 'light' | 'plain';
    color?: string;
    round?: boolean;
    closable?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: () => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    type: "default" | "primary" | "success" | "warning" | "danger" | "info";
    size: "large" | "default" | "small";
    round: boolean;
    effect: "dark" | "light" | "plain";
    closable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
