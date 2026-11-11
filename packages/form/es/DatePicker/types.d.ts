import { ComponentSize } from '@xto/core';
/**
 * DatePicker 类型
 */
export type DatePickerType = 'date' | 'daterange' | 'month' | 'year';
/**
 * DatePicker Props
 */
export interface DatePickerProps {
    /**
     * 绑定值
     */
    modelValue?: Date | string | number | [Date | string | number, Date | string | number] | null;
    /**
     * 绑定值（备用）
     */
    value?: Date | string | number | [Date | string | number, Date | string | number] | null;
    /**
     * 选择器类型
     * @default 'date'
     */
    type?: DatePickerType;
    /**
     * 占位符
     * @default '请选择日期'
     */
    placeholder?: string;
    /**
     * 开始日期占位符
     * @default '开始日期'
     */
    startPlaceholder?: string;
    /**
     * 结束日期占位符
     * @default '结束日期'
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
     * @default 'YYYY-MM-DD'
     */
    format?: string;
    /**
     * 值格式
     */
    valueFormat?: string;
    /**
     * 禁用日期函数
     */
    disabledDate?: (date: Date) => boolean;
    /**
     * 最小日期
     */
    minDate?: Date | string | null;
    /**
     * 最大日期
     */
    maxDate?: Date | string | null;
    /**
     * 是否显示时间选择
     * @default false
     */
    showTime?: boolean;
}
/**
 * DatePicker Emits
 */
export interface DatePickerEmits {
    (e: 'update:modelValue', value: Date | string | number | [Date | string | number, Date | string | number] | null): void;
    (e: 'update:value', value: Date | string | number | [Date | string | number, Date | string | number] | null): void;
    (e: 'change', value: Date | string | number | [Date | string | number, Date | string | number] | null): void;
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
    (e: 'clear'): void;
}
/**
 * DatePicker Expose
 */
export interface DatePickerExpose {
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
 * DatePicker 组件实例类型
 */
export type DatePickerInstance = InstanceType<typeof import('./index.vue').default>;
