type InferPromise<T> = T extends Promise<infer R> ? R : never;

type AsyncAction<T = any> =
  | Promise<T>
  | ((...args: T[]) => Promise<AsyncResult>);

type AsyncResult<T = any> = {
  error?: any;
  response?: InferPromise<AsyncAction<T>>;
};

export function onawait<T extends Promise<any>>(
  action: T
): Promise<AsyncResult<T>> {
  return new Promise(async resolve => {
    try {
      const response = await action;

      const isAsyncResponse: boolean =
        response.response !== undefined || response.error !== undefined;

      const asyncResponse = isAsyncResponse ? response : { response };

      return resolve(asyncResponse);
    } catch (error) {
      const isAsyncError: boolean =
        error.error !== undefined || error.error !== undefined;

      const asyncError = isAsyncError ? error : { error };

      return resolve(asyncError);
    }
  });
}

export default onawait;
