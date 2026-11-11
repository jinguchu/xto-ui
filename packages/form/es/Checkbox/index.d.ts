import { ExtractPropTypes, PropType } from 'vue';
export declare const checkboxProps: {
    readonly modelValue: {
        readonly type: PropType<boolean | string | number | boolean[] | string[] | number[]>;
        readonly default: false;
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
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare const checkboxGroupProps: {
    readonly modelValue: {
        readonly type: PropType<(string | number)[]>;
        readonly default: () => never[];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
};
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export { default as Checkbox } from './index.vue';
export { default as CheckboxGroup } from './group.vue';
