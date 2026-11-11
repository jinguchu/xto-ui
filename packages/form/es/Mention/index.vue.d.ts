interface MentionOption {
    value: string;
    label?: string;
    avatar?: string;
    disabled?: boolean;
}
type __VLS_Props = {
    /** 绑定值 */
    modelValue?: string;
    /** 提及选项 */
    options?: MentionOption[];
    /** 触发字符 */
    prefix?: string;
    /** 占位符 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否可清空 */
    clearable?: boolean;
    /** 分隔符 */
    split?: string;
    /** 尺寸 */
    size?: 'large' | 'default' | 'small';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
    select: (option: MentionOption, prefix: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onSelect?: ((option: MentionOption, prefix: string) => any) | undefined;
}>, {
    modelValue: string;
    placeholder: string;
    size: "large" | "default" | "small";
    disabled: boolean;
    clearable: boolean;
    split: string;
    prefix: string;
    options: MentionOption[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
