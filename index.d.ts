declare type InferPromise<T> = T extends Promise<infer R> ? R : never;
declare type AsyncAction<T = any> = Promise<T> | ((...args: T[]) => Promise<AsyncResult>);
declare type AsyncResult<T = any> = {
    error?: any;
    response?: InferPromise<AsyncAction<T>>;
};
export declare function onawait<T extends Promise<any>>(action: T): Promise<AsyncResult<T>>;
export default onawait;
