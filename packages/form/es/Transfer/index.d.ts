import { ExtractPropTypes, PropType } from 'vue';
export interface TransferOption {
    key: string | number;
    label: string;
    disabled?: boolean;
}
export declare const transferProps: {
    readonly modelValue: {
        readonly type: PropType<(string | number)[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: PropType<TransferOption[]>;
        readonly default: () => never[];
    };
    readonly titles: {
        readonly type: PropType<[string, string]>;
        readonly default: () => string[];
    };
    readonly buttonTexts: {
        readonly type: PropType<[string, string]>;
        readonly default: () => string[];
    };
    readonly filterable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly filterPlaceholder: {
        readonly type: StringConstructor;
        readonly default: "请输入搜索内容";
    };
    readonly filterMethod: {
        readonly type: PropType<(query: string, option: TransferOption) => boolean>;
        readonly default: undefined;
    };
    readonly targetOrder: {
        readonly type: PropType<"original" | "push" | "unshift">;
        readonly default: "original";
    };
    readonly props: {
        readonly type: PropType<{
            key?: string;
            label?: string;
            disabled?: string;
        }>;
        readonly default: undefined;
    };
    readonly leftDefaultChecked: {
        readonly type: PropType<(string | number)[]>;
        readonly default: () => never[];
    };
    readonly rightDefaultChecked: {
        readonly type: PropType<(string | number)[]>;
        readonly default: () => never[];
    };
};
export type TransferProps = ExtractPropTypes<typeof transferProps>;
export { default as Transfer } from './index.vue';
