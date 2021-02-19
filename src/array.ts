export function toArrayResult(error?: any, response?: any): AsyncArrayResult {
  return [error, response];
}

export default async function onawait(
  asyncValue: Promise<any> | any
): Promise<AsyncArrayResult> {
  try {
    const value = await asyncValue;

    if (value instanceof Error) {
      return toArrayResult(value, undefined);
    }

    return toArrayResult(undefined, value);
  } catch (error) {
    return toArrayResult(error, undefined);
  }
}
