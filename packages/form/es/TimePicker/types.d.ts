import { ComponentSize } from '@xto/core';
/**
 * TimePicker 类型
 */
export type TimePickerType = 'time' | 'timerange';
/**
 * TimePicker Props
 */
export interface TimePickerProps {
    /**
     * 绑定值
     */
    modelValue?: Date | string | number | [Date | string | number, Date | string | number] | null;
    /**
     * 选择器类型
     * @default 'time'
     */
    type?: TimePickerType;
    /**
     * 占位符
     * @default '请选择时间'
     */
    placeholder?: string;
    /**
     * 开始时间占位符
     * @default '开始时间'
     */
    startPlaceholder?: string;
    /**
     * 结束时间占位符
     * @default '结束时间'
     */
    endPlaceholder?: string;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否只读
     * @default false
     */
    readonly?: boolean;
    /**
     * 是否可清空
     * @default false
     */
    clearable?: boolean;
    /**
     * 选择器尺寸
     * @default 'default'
     */
    size?: ComponentSize;
    /**
     * 显示格式
     * @default 'HH:mm:ss'
     */
    format?: string;
    /**
     * 值格式
     */
    valueFormat?: string;
    /**
     * 禁用小时函数
     */
    disabledHours?: () => number[];
    /**
     * 禁用分钟函数
     */
    disabledMinutes?: (hour: number) => number[];
    /**
     * 禁用秒函数
     */
    disabledSeconds?: (hour: number, minute: number) => number[];
    /**
     * 小时步长
     * @default 1
     */
    hourStep?: number;
    /**
     * 分钟步长
     * @default 1
     */
    minuteStep?: number;
    /**
     * 秒步长
     * @default 1
     */
    secondStep?: number;
}
/**
 * TimePicker Emits
 */
export interface TimePickerEmits {
    (e: 'update:modelValue', value: Date | string | [Date | string, Date | string] | null): void;
    (e: 'change', value: Date | string | [Date | string, Date | string] | null): void;
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
    (e: 'clear'): void;
}
/**
 * TimePicker Expose
 */
export interface TimePickerExpose {
    /**
     * 获取焦点
     */
    focus: () => void;
    /**
     * 失去焦点
     */
    blur: () => void;
}
/**
 * TimePicker 组件实例类型
 */
export type TimePickerInstance = InstanceType<typeof import('./index.vue').default>;
