import { ExtractPropTypes, PropType } from 'vue';
export declare const radioProps: {
    readonly modelValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: "";
    };
    readonly value: {
        readonly type: PropType<string | number | boolean>;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
};
export declare const radioGroupProps: {
    readonly modelValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
};
export declare const radioButtonProps: {
    readonly value: {
        readonly type: PropType<string | number | boolean>;
        readonly default: undefined;
    };
    readonly label: {
        readonly type: PropType<string | number>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
};
export type RadioProps = ExtractPropTypes<typeof radioProps>;
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>;
export { default as Radio } from './index.vue';
export { default as RadioGroup } from './group.vue';
export { default as RadioButton } from './button.vue';
