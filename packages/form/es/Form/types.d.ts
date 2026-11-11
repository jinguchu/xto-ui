import { Ref } from 'vue';
import { ComponentSize } from '@xto/core';
/**
 * 表单验证规则
 */
export interface FormRule {
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     * 错误提示信息
     */
    message?: string;
    /**
     * 触发方式
     */
    trigger?: 'blur' | 'change';
    /**
     * 最小长度
     */
    min?: number;
    /**
     * 最大长度
     */
    max?: number;
    /**
     * 正则表达式
     */
    pattern?: RegExp;
    /**
     * 自定义验证函数
     */
    validator?: (rule: FormRule, value: any, callback: (error?: Error) => void) => void;
}
/**
 * 表单规则映射
 */
export type FormRules = Record<string, FormRule[]>;
/**
 * 表单项上下文
 */
export interface FormItemContext {
    /**
     * 字段名
     */
    prop: string;
    /**
     * 验证方法
     */
    validate: (trigger?: string) => Promise<boolean>;
    /**
     * 重置字段
     */
    resetField: () => void;
    /**
     * 清除验证
     */
    clearValidate: () => void;
}
/**
 * 表单上下文（注入到子组件）
 */
export interface FormContext {
    /**
     * 表单数据模型
     */
    model: Ref<Record<string, any>>;
    /**
     * 验证规则
     */
    rules: FormRules;
    /**
     * 标签宽度
     */
    labelWidth: string | number;
    /**
     * 标签位置
     */
    labelPosition: string;
    /**
     * 是否禁用
     */
    disabled: boolean;
    /**
     * 组件尺寸
     */
    size: string;
    /**
     * 标签样式
     */
    labelStyle: Ref<Record<string, string>>;
    /**
     * 添加字段
     */
    addField: (field: FormItemContext) => void;
    /**
     * 移除字段
     */
    removeField: (field: FormItemContext) => void;
    /**
     * 触发事件
     */
    emit: (event: string, prop: string, valid: boolean, message: string) => void;
}
/**
 * Form Props
 */
export interface FormProps {
    /**
     * 表单数据对象
     */
    model?: Record<string, any>;
    /**
     * 表单验证规则
     */
    rules?: FormRules;
    /**
     * 标签宽度
     * @default '100px'
     */
    labelWidth?: string | number;
    /**
     * 标签位置
     * @default 'right'
     */
    labelPosition?: 'left' | 'right' | 'top';
    /**
     * 表单布局
     * @default 'horizontal'
     */
    layout?: 'inline' | 'horizontal' | 'vertical';
    /**
     * 是否内联表单
     * @default false
     */
    inline?: boolean;
    /**
     * 是否禁用所有表单项
     * @default false
     */
    disabled?: boolean;
    /**
     * 组件尺寸
     * @default 'default'
     */
    size?: ComponentSize;
}
/**
 * Form Emits
 */
export interface FormEmits {
    /**
     * 验证事件
     */
    (e: 'validate', prop: string, valid: boolean, message: string): void;
    /**
     * 提交事件
     */
    (e: 'submit'): void;
    /**
     * 重置事件
     */
    (e: 'reset'): void;
}
/**
 * Form Expose
 */
export interface FormExpose {
    /**
     * 验证整个表单
     */
    validate: () => Promise<boolean>;
    /**
     * 验证指定字段
     */
    validateField: (props: string | string[]) => Promise<boolean>;
    /**
     * 重置表单
     */
    resetFields: () => void;
    /**
     * 清除验证
     */
    clearValidate: (props?: string | string[]) => void;
}
/**
 * Form 组件实例类型
 */
export type FormInstance = InstanceType<typeof import('./index.vue').default>;
/**
 * FormItem Props
 */
export interface FormItemProps {
    /**
     * 字段名
     */
    prop?: string;
    /**
     * 标签文本
     */
    label?: string;
    /**
     * 标签宽度
     */
    labelWidth?: string | number;
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     * 验证规则
     */
    rules?: FormRule[];
    /**
     * 是否显示错误信息
     */
    showMessage?: boolean;
}
/**
 * FormItem Expose
 */
export interface FormItemExpose {
    /**
     * 验证方法
     */
    validate: (trigger?: string) => Promise<boolean>;
    /**
     * 重置字段
     */
    resetField: () => void;
    /**
     * 清除验证
     */
    clearValidate: () => void;
}
/**
 * FormItem 组件实例类型
 */
export type FormItemInstance = InstanceType<typeof import('./item.vue').default>;
