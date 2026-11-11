import { default as RichEditor } from './index.vue';
export { RichEditor };
export default RichEditor;
export type RichEditorProps = {
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
