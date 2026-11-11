import { ExtractPropTypes, PropType } from 'vue';
export declare const textareaProps: {
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly maxlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly minlength: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
    readonly autosize: {
        readonly type: PropType<boolean | {
            minRows?: number;
            maxRows?: number;
        }>;
        readonly default: false;
    };
    readonly showWordLimit: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly resize: {
        readonly type: PropType<"none" | "both" | "horizontal" | "vertical">;
        readonly default: "vertical";
    };
};
export type TextareaProps = ExtractPropTypes<typeof textareaProps>;
export { default as Textarea } from './index.vue';
