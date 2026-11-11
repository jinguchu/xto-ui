import { ExtractPropTypes, PropType } from 'vue';
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
export declare const uploadProps: {
    readonly action: {
        readonly type: StringConstructor;
        readonly default: "#";
    };
    readonly headers: {
        readonly type: PropType<Record<string, string>>;
        readonly default: undefined;
    };
    readonly data: {
        readonly type: PropType<Record<string, any>>;
        readonly default: undefined;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly limit: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly drag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly listType: {
        readonly type: PropType<"text" | "picture" | "picture-card">;
        readonly default: "text";
    };
    readonly autoUpload: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fileList: {
        readonly type: PropType<UploadFile[]>;
        readonly default: () => never[];
    };
    readonly showFileList: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly withCredentials: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "file";
    };
    readonly httpRequest: {
        readonly type: PropType<(options: any) => Promise<any>>;
        readonly default: undefined;
    };
    readonly beforeUpload: {
        readonly type: PropType<(file: File, fileList: File[]) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly beforeRemove: {
        readonly type: PropType<(file: UploadFile, fileList: UploadFile[]) => boolean>;
        readonly default: undefined;
    };
    readonly onSuccess: {
        readonly type: PropType<(response: any, file: UploadFile, fileList: UploadFile[]) => void>;
        readonly default: undefined;
    };
    readonly onError: {
        readonly type: PropType<(error: Error, file: UploadFile, fileList: UploadFile[]) => void>;
        readonly default: undefined;
    };
    readonly onProgress: {
        readonly type: PropType<(event: {
            percent: number;
        }, file: UploadFile, fileList: UploadFile[]) => void>;
        readonly default: undefined;
    };
    readonly onChange: {
        readonly type: PropType<(file: UploadFile, fileList: UploadFile[]) => void>;
        readonly default: undefined;
    };
    readonly onRemove: {
        readonly type: PropType<(file: UploadFile, fileList: UploadFile[]) => void>;
        readonly default: undefined;
    };
    readonly onExceed: {
        readonly type: PropType<(files: File[], fileList: UploadFile[]) => void>;
        readonly default: undefined;
    };
};
export type UploadProps = ExtractPropTypes<typeof uploadProps>;
export { default as Upload } from './index.vue';
