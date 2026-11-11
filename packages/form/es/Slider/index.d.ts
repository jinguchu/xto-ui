import { ExtractPropTypes, PropType } from 'vue';
export declare const sliderProps: {
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTooltip: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly formatTooltip: {
        readonly type: PropType<(value: number) => string | number>;
        readonly default: undefined;
    };
    readonly showStops: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: "200px";
    };
    readonly marks: {
        readonly type: PropType<Record<number, string | {
            style?: Record<string, string>;
            label?: string;
        }>>;
        readonly default: undefined;
    };
};
export type SliderProps = ExtractPropTypes<typeof sliderProps>;
export { default as Slider } from './index.vue';
