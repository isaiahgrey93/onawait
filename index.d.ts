declare type AsyncAction = Promise<any> | ((...args: any[]) => Promise<AsyncResult>);
declare type AsyncResult = {
    error?: any;
    response?: any;
};
export declare const onawait: (action: AsyncAction) => Promise<AsyncResult>;
export default onawait;
