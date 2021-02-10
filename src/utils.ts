function isDefined(value: any): boolean {
  return value !== undefined;
}

function isAsyncResult(result: any): boolean {
  const { error = undefined, response = undefined } = result || {};

  return isDefined(response) || isDefined(error);
}

export function toObjectResult(error?: any, response?: any): AsyncObjectResult {
  return { error, response };
}

export function toArrayResult(error?: any, response?: any): AsyncArrayResult {
  return [error, response];
}

export async function toWrappedTryCatchBlock(
  asyncValue: AsyncValue,
  onResult: (error?: any, response?: any) => AsyncResult
): Promise<any> {
  try {
    const value = await asyncValue;

    if (value instanceof Error) {
      throw value;
    }

    if (isAsyncResult(value)) return value;

    return onResult(undefined, value);
  } catch (error) {
    if (isAsyncResult(error)) return error;

    return onResult(error, undefined);
  }
}
