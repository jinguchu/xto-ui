/**
 * Upload 组件类型定义
 */
/**
 * Upload 文件状态
 */
export type UploadStatus = 'ready' | 'uploading' | 'success' | 'error';
/**
 * Upload 文件列表类型
 */
export type UploadListType = 'text' | 'picture' | 'picture-card';
/**
 * Upload 文件对象
 */
export interface UploadFile {
    /**
     * 文件名
     */
    name: string;
    /**
     * 文件大小
     */
    size?: number;
    /**
     * 文件 URL
     */
    url?: string;
    /**
     * 上传状态
     */
    status?: UploadStatus;
    /**
     * 上传进度
     */
    percentage?: number;
    /**
     * 文件唯一标识
     */
    uid?: number | string;
    /**
     * 原始文件对象
     */
    raw?: File;
    /**
     * 上传响应
     */
    response?: any;
    /**
     * 缩略图 URL
     */
    thumbUrl?: string;
}
/**
 * Upload HTTP 请求选项
 */
export interface UploadRequestOptions {
    /**
     * 上传地址
     */
    action: string;
    /**
     * 请求头
     */
    headers?: Record<string, string>;
    /**
     * 附带数据
     */
    data?: Record<string, any>;
    /**
     * 文件对象
     */
    file: File;
    /**
     * 文件字段名
     */
    name: string;
    /**
     * 是否携带凭证
     */
    withCredentials?: boolean;
    /**
     * 进度回调
     */
    onProgress?: (e: {
        percent: number;
    }) => void;
    /**
     * 成功回调
     */
    onSuccess?: (response: any) => void;
    /**
     * 错误回调
     */
    onError?: (error: Error) => void;
}
/**
 * Upload Props
 */
export interface UploadProps {
    /**
     * 上传地址
     * @default '#'
     */
    action?: string;
    /**
     * 请求头
     */
    headers?: Record<string, string>;
    /**
     * 附带数据
     */
    data?: Record<string, any>;
    /**
     * 是否支持多选
     * @default false
     */
    multiple?: boolean;
    /**
     * 接受的文件类型
     */
    accept?: string;
    /**
     * 最大上传数量
     */
    limit?: number;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否拖拽上传
     * @default false
     */
    drag?: boolean;
    /**
     * 文件列表类型
     * @default 'text'
     */
    listType?: UploadListType;
    /**
     * 是否自动上传
     * @default true
     */
    autoUpload?: boolean;
    /**
     * 默认文件列表
     */
    fileList?: UploadFile[];
    /**
     * 是否显示文件列表
     * @default true
     */
    showFileList?: boolean;
    /**
     * 是否携带凭证
     * @default false
     */
    withCredentials?: boolean;
    /**
     * 文件字段名
     * @default 'file'
     */
    name?: string;
    /**
     * 自定义上传方法
     */
    httpRequest?: (options: UploadRequestOptions) => Promise<any>;
    /**
     * 上传前钩子
     */
    beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<boolean>;
    /**
     * 删除前钩子
     */
    beforeRemove?: (file: UploadFile, fileList: UploadFile[]) => boolean;
    /**
     * 上传成功钩子
     */
    onSuccess?: (response: any, file: UploadFile, fileList: UploadFile[]) => void;
    /**
     * 上传失败钩子
     */
    onError?: (error: Error, file: UploadFile, fileList: UploadFile[]) => void;
    /**
     * 上传进度钩子
     */
    onProgress?: (event: {
        percent: number;
    }, file: UploadFile, fileList: UploadFile[]) => void;
    /**
     * 文件状态改变钩子
     */
    onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
    /**
     * 文件删除钩子
     */
    onRemove?: (file: UploadFile, fileList: UploadFile[]) => void;
    /**
     * 超出限制钩子
     */
    onExceed?: (files: File[], fileList: UploadFile[]) => void;
}
/**
 * Upload Emits
 */
export interface UploadEmits {
    (e: 'update:fileList', fileList: UploadFile[]): void;
    (e: 'success', response: any, file: UploadFile, fileList: UploadFile[]): void;
    (e: 'error', error: Error, file: UploadFile, fileList: UploadFile[]): void;
    (e: 'progress', event: {
        percent: number;
    }, file: UploadFile, fileList: UploadFile[]): void;
    (e: 'change', file: UploadFile, fileList: UploadFile[]): void;
    (e: 'remove', file: UploadFile, fileList: UploadFile[]): void;
    (e: 'exceed', files: File[], fileList: UploadFile[]): void;
}
/**
 * Upload Expose
 */
export interface UploadExpose {
    /**
     * 手动上传
     */
    submit: () => void;
    /**
     * 清空文件列表
     */
    clearFiles: () => void;
    /**
     * 文件列表
     */
    uploadFiles: UploadFile[];
}
/**
 * Upload 组件实例类型
 */
export type UploadInstance = InstanceType<typeof import('./index.vue').default>;
