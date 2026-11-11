import { ComponentSize } from '@xto/core';
export type TimePickerType = 'time' | 'timerange';
export interface TimePickerProps {
    /** 绑定值 */
    modelValue?: Date | string | number | [Date | string | number, Date | string | number] | null;
    /** 选择类型 */
    type?: TimePickerType;
    /** 占位文本 */
    placeholder?: string;
    /** 开始时间占位（范围选择） */
    startPlaceholder?: string;
    /** 结束时间占位（范围选择） */
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
    /** 禁用小时 */
    disabledHours?: () => number[];
    /** 禁用分钟 */
    disabledMinutes?: (hour: number) => number[];
    /** 禁用秒 */
    disabledSeconds?: (hour: number, minute: number) => number[];
    /** 小时步长 */
    hourStep?: number;
    /** 分钟步长 */
    minuteStep?: number;
    /** 秒步长 */
    secondStep?: number;
}
export { default as TimePicker } from './index.vue';
