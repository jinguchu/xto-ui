import { ExtractPropTypes, PropType } from 'vue';
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
export declare const formProps: {
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    readonly rules: {
        readonly type: PropType<Record<string, FormRule[]>>;
        readonly default: () => {};
    };
    readonly labelWidth: {
        readonly type: PropType<string | number>;
        readonly default: "100px";
    };
    readonly labelPosition: {
        readonly type: PropType<"left" | "right" | "top">;
        readonly default: "right";
    };
    readonly inline: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<"large" | "default" | "small">;
        readonly default: "default";
    };
};
export declare const formItemProps: {
    readonly prop: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly labelWidth: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly required: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly rules: {
        readonly type: PropType<FormRule[]>;
        readonly default: undefined;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
export { default as Form } from './index.vue';
export { default as FormItem } from './item.vue';
export * from './validators';
