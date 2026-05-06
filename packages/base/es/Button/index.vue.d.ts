import { ComponentSize } from '@xto/core';
type __VLS_Props = {
    /** Button type */
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'text';
    /** Button size */
    size?: ComponentSize;
    /** Whether button is disabled */
    disabled?: boolean;
    /** Whether button is loading */
    loading?: boolean;
    /** Whether button is plain */
    plain?: boolean;
    /** Whether button is round */
    round?: boolean;
    /** Whether button is circle */
    circle?: boolean;
    /** Button icon */
    icon?: string;
    /** Native button type */
    nativeType?: 'button' | 'submit' | 'reset';
    /** Native button type (alias for nativeType) */
    htmlType?: 'button' | 'submit' | 'reset';
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    type: "primary" | "success" | "warning" | "danger" | "info" | "default" | "text";
    size: ComponentSize;
    disabled: boolean;
    loading: boolean;
    plain: boolean;
    round: boolean;
    circle: boolean;
    nativeType: "button" | "submit" | "reset";
    htmlType: "button" | "submit" | "reset";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
