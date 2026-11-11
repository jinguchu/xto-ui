import { default as Mention } from './index.vue';
export { Mention };
export default Mention;
export type MentionOption = {
    value: string;
    label?: string;
    avatar?: string;
    disabled?: boolean;
};
export type MentionProps = {
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
