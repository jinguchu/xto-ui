import { ComponentSize } from '@xto/core';
export type DatePickerType = 'date' | 'daterange' | 'month' | 'year';
export interface DatePickerProps {
    /** 绑定值 */
    modelValue?: Date | string | number | [Date | string | number, Date | string | number] | null;
    /** 选择类型 */
    type?: DatePickerType;
    /** 占位文本 */
    placeholder?: string;
    /** 开始日期占位（范围选择） */
    startPlaceholder?: string;
    /** 结束日期占位（范围选择） */
    endPlaceholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readonly?: boolean;
    /** 是否可清空 */
    clearable?: boolean;
    /** 输入框尺寸 */
    size?: ComponentSize;
    /** 显示格式 */
    format?: string;
    /** 绑定值格式 */
    valueFormat?: string;
    /** 禁用日期函数 */
    disabledDate?: (date: Date) => boolean;
    /** 最小日期 */
    minDate?: Date | string | null;
    /** 最大日期 */
    maxDate?: Date | string | null;
    /** 是否显示时间选择 */
    showTime?: boolean;
}
export { default as DatePicker } from './index.vue';
