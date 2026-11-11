import { ComponentSize } from '@xto/core';
export interface InputProps {
    /** Input value */
    modelValue?: string | number;
    /** Input type */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    /** Placeholder text */
    placeholder?: string;
    /** Input size */
    size?: ComponentSize;
    /** Whether input is disabled */
    disabled?: boolean;
    /** Whether input is readonly */
    readonly?: boolean;
    /** Maximum input length */
    maxlength?: number | string;
    /** Minimum input length */
    minlength?: number | string;
    /** Whether to show word count */
    showWordLimit?: boolean;
    /** Whether input is clearable */
    clearable?: boolean;
    /** Whether to show password toggle */
    showPassword?: boolean;
    /** Prefix icon */
    prefixIcon?: string;
    /** Suffix icon */
    suffixIcon?: string;
}
