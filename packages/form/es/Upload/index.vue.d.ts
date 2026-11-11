export interface UploadFile {
    name: string;
    size?: number;
    url?: string;
    status?: 'ready' | 'uploading' | 'success' | 'error';
    percentage?: number;
    uid?: number | string;
    raw?: File;
    response?: any;
    thumbUrl?: string;
}
type __VLS_Props = {
    action?: string;
    headers?: Record<string, string>;
    data?: Record<string, any>;
    multiple?: boolean;
    accept?: string;
    limit?: number;
    disabled?: boolean;
    drag?: boolean;
    listType?: 'text' | 'picture' | 'picture-card';
    autoUpload?: boolean;
    fileList?: UploadFile[];
    showFileList?: boolean;
    withCredentials?: boolean;
    name?: string;
    httpRequest?: (options: any) => Promise<any>;
    beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<boolean>;
    beforeRemove?: (file: UploadFile, fileList: UploadFile[]) => boolean;
    onSuccess?: (response: any, file: UploadFile, fileList: UploadFile[]) => void;
    onError?: (error: Error, file: UploadFile, fileList: UploadFile[]) => void;
    onProgress?: (event: {
        percent: number;
    }, file: UploadFile, fileList: UploadFile[]) => void;
    onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
    onRemove?: (file: UploadFile, fileList: UploadFile[]) => void;
    onExceed?: (files: File[], fileList: UploadFile[]) => void;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        drag?(_: {}): any;
        trigger?(_: {}): any;
        trigger?(_: {}): any;
        default?(_: {}): any;
        tip?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    submit: () => void;
    clearFiles: () => void;
    uploadFiles: import('vue').Ref<{
        name: string;
        size?: number | undefined;
        url?: string | undefined;
        status?: "ready" | "uploading" | "success" | "error" | undefined;
        percentage?: number | undefined;
        uid?: number | string | undefined;
        raw?: {
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            bytes: () => Promise<Uint8Array<ArrayBuffer>>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array<ArrayBuffer>>;
            text: () => Promise<string>;
        } | undefined;
        response?: any;
        thumbUrl?: string | undefined;
    }[], UploadFile[] | {
        name: string;
        size?: number | undefined;
        url?: string | undefined;
        status?: "ready" | "uploading" | "success" | "error" | undefined;
        percentage?: number | undefined;
        uid?: number | string | undefined;
        raw?: {
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            bytes: () => Promise<Uint8Array<ArrayBuffer>>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array<ArrayBuffer>>;
            text: () => Promise<string>;
        } | undefined;
        response?: any;
        thumbUrl?: string | undefined;
    }[]>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (file: UploadFile, fileList: UploadFile[]) => any;
    progress: (event: {
        percent: number;
    }, file: UploadFile, fileList: UploadFile[]) => any;
    exceed: (files: File[], fileList: UploadFile[]) => any;
    error: (error: Error, file: UploadFile, fileList: UploadFile[]) => any;
    success: (response: any, file: UploadFile, fileList: UploadFile[]) => any;
    "update:fileList": (fileList: UploadFile[]) => any;
    remove: (file: UploadFile, fileList: UploadFile[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((file: UploadFile, fileList: UploadFile[]) => any) | undefined;
    onProgress?: ((event: {
        percent: number;
    }, file: UploadFile, fileList: UploadFile[]) => any) | undefined;
    onExceed?: ((files: File[], fileList: UploadFile[]) => any) | undefined;
    onError?: ((error: Error, file: UploadFile, fileList: UploadFile[]) => any) | undefined;
    onSuccess?: ((response: any, file: UploadFile, fileList: UploadFile[]) => any) | undefined;
    "onUpdate:fileList"?: ((fileList: UploadFile[]) => any) | undefined;
    onRemove?: ((file: UploadFile, fileList: UploadFile[]) => any) | undefined;
}>, {
    name: string;
    disabled: boolean;
    drag: boolean;
    multiple: boolean;
    action: string;
    listType: "text" | "picture" | "picture-card";
    autoUpload: boolean;
    fileList: UploadFile[];
    showFileList: boolean;
    withCredentials: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
