import { Common } from './share-file.common';
export declare class ShareFile extends Common {
    constructor();
    readonly ios: any;
    static getter<T>(_this2: any, property: T | {
        (): T;
    }): T;
    open(args): boolean;
    getCurrentAppPath(): string;
}
