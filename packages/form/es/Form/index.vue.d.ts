export interface FormRule {
    required?: boolean;
    message?: string;
    trigger?: 'blur' | 'change';
    min?: number;
    max?: number;
    pattern?: RegExp;
    validator?: (rule: FormRule, value: any, callback: (error?: Error) => void) => void;
}
export interface FormItemContext {
    prop: string;
    validate: (trigger?: string) => Promise<boolean>;
    resetField: () => void;
    clearValidate: () => void;
}
type __VLS_Props = {
    model?: Record<string, any>;
    rules?: Record<string, FormRule[]>;
    labelWidth?: string | number;
    labelPosition?: 'left' | 'right' | 'top';
    layout?: 'inline' | 'horizontal' | 'vertical';
    inline?: boolean;
    disabled?: boolean;
    size?: 'large' | 'default' | 'small';
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLFormElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    validate: () => Promise<boolean>;
    validateField: (props: string | string[]) => Promise<boolean>;
    resetFields: () => void;
    clearValidate: (props?: string | string[]) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    reset: () => any;
    submit: () => any;
    validate: (prop: string, valid: boolean, message: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onReset?: (() => any) | undefined;
    onSubmit?: (() => any) | undefined;
    onValidate?: ((prop: string, valid: boolean, message: string) => any) | undefined;
}>, {
    size: "large" | "default" | "small";
    disabled: boolean;
    inline: boolean;
    model: Record<string, any>;
    rules: Record<string, FormRule[]>;
    labelWidth: string | number;
    labelPosition: "left" | "right" | "top";
    layout: "inline" | "horizontal" | "vertical";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLFormElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
