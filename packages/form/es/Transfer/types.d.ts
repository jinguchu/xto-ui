/**
 * Transfer 组件类型定义
 */
/**
 * Transfer 选项
 */
export interface TransferOption {
    /**
     * 选项键值
     */
    key: string | number;
    /**
     * 选项标签
     */
    label: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
}
/**
 * Transfer 目标排序方式
 */
export type TransferTargetOrder = 'original' | 'push' | 'unshift';
/**
 * Transfer Props 映射
 */
export interface TransferPropsAlias {
    /**
     * 键字段名
     */
    key?: string;
    /**
     * 标签字段名
     */
    label?: string;
    /**
     * 禁用字段名
     */
    disabled?: string;
}
/**
 * Transfer Props
 */
export interface TransferProps {
    /**
     * 绑定值（目标列表的键数组）
     */
    modelValue?: (string | number)[];
    /**
     * 数据源
     */
    data?: TransferOption[];
    /**
     * 面板标题
     * @default ['列表1', '列表2']
     */
    titles?: [string, string];
    /**
     * 按钮文字
     * @default ['', '']
     */
    buttonTexts?: [string, string];
    /**
     * 是否可搜索
     * @default false
     */
    filterable?: boolean;
    /**
     * 搜索框占位符
     * @default '请输入搜索内容'
     */
    filterPlaceholder?: string;
    /**
     * 自定义搜索方法
     */
    filterMethod?: (query: string, option: TransferOption) => boolean;
    /**
     * 目标列表排序方式
     * @default 'original'
     */
    targetOrder?: TransferTargetOrder;
    /**
     * 字段别名
     */
    props?: TransferPropsAlias;
    /**
     * 左侧默认选中项
     */
    leftDefaultChecked?: (string | number)[];
    /**
     * 右侧默认选中项
     */
    rightDefaultChecked?: (string | number)[];
}
/**
 * Transfer Emits
 */
export interface TransferEmits {
    (e: 'update:modelValue', value: (string | number)[]): void;
    (e: 'change', value: (string | number)[], direction: 'left' | 'right', movedKeys: (string | number)[]): void;
    (e: 'left-check-change', checkedKeys: (string | number)[]): void;
    (e: 'right-check-change', checkedKeys: (string | number)[]): void;
}
/**
 * Transfer Expose
 */
export interface TransferExpose {
    /**
     * 清除搜索关键词
     */
    clearQuery: (direction: 'left' | 'right') => void;
}
/**
 * Transfer 组件实例类型
 */
export type TransferInstance = InstanceType<typeof import('./index.vue').default>;
