import { default as AutoComplete } from './index.vue';
export { AutoComplete };
export default AutoComplete;
export type AutoCompleteSuggestion = {
    value: string;
    [key: string]: any;
};
export type AutoCompleteProps = {
    /** 绑定值 */
    modelValue?: string;
    /** 占位符 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否可清空 */
    clearable?: boolean;
    /** 获取建议的方法 */
    fetchSuggestions?: (query: string, cb: (suggestions: AutoCompleteSuggestion[]) => void) => void;
    /** 静态建议列表 */
    suggestions?: AutoCompleteSuggestion[];
    /** 建议项显示字段 */
    valueKey?: string;
    /** 是否在输入时触发 */
    triggerOnFocus?: boolean;
    /** 防抖延迟 */
    debounce?: number;
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
};
