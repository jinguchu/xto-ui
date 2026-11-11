export interface DynamicField {
    id: string;
    name: string;
    label: string;
    type: 'input' | 'textarea' | 'select' | 'number' | 'switch' | 'date' | 'file';
    required?: boolean;
    defaultValue?: any;
    placeholder?: string;
    options?: Array<{
        label: string;
        value: any;
    }>;
    order?: number;
}
export interface DynamicFieldsProps {
    /** 字段列表 */
    fields?: DynamicField[];
    /** 是否可编辑 */
    editable?: boolean;
    /** 是否显示排序按钮 */
    showSort?: boolean;
    /** 最大字段数 */
    maxFields?: number;
    /** 可用的字段类型 */
    availableTypes?: Array<{
        label: string;
        value: string;
    }>;
}
export interface DynamicFieldsEmits {
    'update:fields': [fields: DynamicField[]];
    'add': [field: DynamicField];
    'remove': [fieldId: string];
    'sort': [fields: DynamicField[]];
    'update': [fieldId: string, field: DynamicField];
}
