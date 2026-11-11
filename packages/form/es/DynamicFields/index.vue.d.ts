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
declare const _default: import('vue').DefineComponent<DynamicFieldsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    sort: (fields: DynamicField[]) => any;
    add: (field: DynamicField) => any;
    remove: (fieldId: string) => any;
    "update:fields": (fields: DynamicField[]) => any;
    update: (fieldId: string, field: DynamicField) => any;
}, string, import('vue').PublicProps, Readonly<DynamicFieldsProps> & Readonly<{
    onSort?: ((fields: DynamicField[]) => any) | undefined;
    onAdd?: ((field: DynamicField) => any) | undefined;
    onRemove?: ((fieldId: string) => any) | undefined;
    "onUpdate:fields"?: ((fields: DynamicField[]) => any) | undefined;
    onUpdate?: ((fieldId: string, field: DynamicField) => any) | undefined;
}>, {
    fields: DynamicField[];
    editable: boolean;
    showSort: boolean;
    maxFields: number;
    availableTypes: Array<{
        label: string;
        value: string;
    }>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
