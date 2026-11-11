type __VLS_Props = {
    /** 编辑器内容 (HTML 格式) */
    modelValue?: string;
    /** 占位符 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 编辑器高度 */
    height?: number | string;
    /** 工具栏配置 */
    toolbar?: string[] | boolean;
    /** 模式: default 或 simple */
    mode?: 'default' | 'simple';
    /** 自动聚焦 */
    autoFocus?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    getEditor: () => any;
    getText: () => any;
    setHtml: (html: string) => void;
    clear: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
    focus: (editor: any) => any;
    blur: (editor: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onFocus?: ((editor: any) => any) | undefined;
    onBlur?: ((editor: any) => any) | undefined;
}>, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    height: number | string;
    mode: "default" | "simple";
    toolbar: string[] | boolean;
    autoFocus: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
