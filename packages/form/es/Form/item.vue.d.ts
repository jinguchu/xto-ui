import { FormRule } from './index.vue';
type __VLS_Props = {
    prop?: string;
    label?: string;
    labelWidth?: string | number;
    required?: boolean;
    rules?: FormRule[];
    showMessage?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    validate: (trigger?: string) => Promise<boolean>;
    resetField: () => void;
    clearValidate: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    showMessage: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
