interface SuggestionItem {
    value: string;
    [key: string]: any;
}
type __VLS_Props = {
    /** 绑定值 */
    modelValue?: string;
    /** 占位符 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否可清空 */
    clearable?: boolean;
    /** 获取建议的方法 */
    fetchSuggestions?: (query: string, cb: (suggestions: SuggestionItem[]) => void) => void;
    /** 静态建议列表 */
    suggestions?: SuggestionItem[];
    /** 建议项显示字段 */
    valueKey?: string;
    /** 是否在输入时触发 */
    triggerOnFocus?: boolean;
    /** 防抖延迟 */
    debounce?: number;
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: {
                [x: string]: any;
                value: string;
            };
        }): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    clear: () => any;
    select: (item: SuggestionItem) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
    onSelect?: ((item: SuggestionItem) => any) | undefined;
}>, {
    modelValue: string;
    placeholder: string;
    size: "large" | "default" | "small";
    disabled: boolean;
    clearable: boolean;
    valueKey: string;
    suggestions: SuggestionItem[];
    triggerOnFocus: boolean;
    debounce: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
