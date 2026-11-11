/**
 * 内置验证规则
 * 提供常用的表单验证规则
 */
export type ValidatorRule = {
    required?: boolean;
    message?: string;
    trigger?: 'blur' | 'change';
    min?: number;
    max?: number;
    pattern?: RegExp;
    validator?: (rule: any, value: any, callback: (error?: Error) => void) => void;
};
export declare const required: (message?: string) => ValidatorRule;
export declare const email: (message?: string) => ValidatorRule;
export declare const phone: (message?: string) => ValidatorRule;
export declare const idCard: (message?: string) => ValidatorRule;
export declare const url: (message?: string) => ValidatorRule;
export declare const number: (message?: string) => ValidatorRule;
export declare const integer: (message?: string) => ValidatorRule;
export declare const positiveInteger: (message?: string) => ValidatorRule;
export declare const letter: (message?: string) => ValidatorRule;
export declare const alphanumeric: (message?: string) => ValidatorRule;
export declare const chinese: (message?: string) => ValidatorRule;
export declare const range: (min: number, max: number, message?: string) => ValidatorRule;
export declare const minLength: (min: number, message?: string) => ValidatorRule;
export declare const maxLength: (max: number, message?: string) => ValidatorRule;
export declare const password: (message?: string) => ValidatorRule;
export declare const strongPassword: (message?: string) => ValidatorRule;
export declare const ip: (message?: string) => ValidatorRule;
export declare const port: (message?: string) => ValidatorRule;
export declare const bankCard: (message?: string) => ValidatorRule;
export declare const carNumber: (message?: string) => ValidatorRule;
export declare const pattern: (regexp: RegExp, message: string) => ValidatorRule;
export declare const validator: (validateFn: (value: any) => boolean | string | Promise<boolean | string>, message?: string) => ValidatorRule;
export declare const validators: {
    required: (message?: string) => ValidatorRule;
    email: (message?: string) => ValidatorRule;
    phone: (message?: string) => ValidatorRule;
    idCard: (message?: string) => ValidatorRule;
    url: (message?: string) => ValidatorRule;
    number: (message?: string) => ValidatorRule;
    integer: (message?: string) => ValidatorRule;
    positiveInteger: (message?: string) => ValidatorRule;
    letter: (message?: string) => ValidatorRule;
    alphanumeric: (message?: string) => ValidatorRule;
    chinese: (message?: string) => ValidatorRule;
    range: (min: number, max: number, message?: string) => ValidatorRule;
    minLength: (min: number, message?: string) => ValidatorRule;
    maxLength: (max: number, message?: string) => ValidatorRule;
    password: (message?: string) => ValidatorRule;
    strongPassword: (message?: string) => ValidatorRule;
    ip: (message?: string) => ValidatorRule;
    port: (message?: string) => ValidatorRule;
    bankCard: (message?: string) => ValidatorRule;
    carNumber: (message?: string) => ValidatorRule;
    pattern: (regexp: RegExp, message: string) => ValidatorRule;
    validator: (validateFn: (value: any) => boolean | string | Promise<boolean | string>, message?: string) => ValidatorRule;
};
export default validators;
