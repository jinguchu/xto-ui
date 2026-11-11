export declare function matchesFilter(label: string, query: string, filterMethod?: (query: string, option: any) => boolean): boolean;
export declare function getOptionKey(option: any, valueKey?: string): string | number;
export declare function getOptionLabel(option: any, labelKey?: string): string;
export declare function isOptionDisabled(option: any): boolean;
export declare function findNodeInTree(data: any[], value: any, valueKey?: string, childrenKey?: string): any;
export declare function getNodePath(data: any[], value: any, valueKey?: string, childrenKey?: string): any[];
export declare function flattenTree(data: any[], childrenKey?: string): any[];
export declare function formatTagsText(values: any[], options: any[], labelKey?: string, maxTags?: number): string;
