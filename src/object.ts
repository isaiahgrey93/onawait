function toObjectResult(error?: any, response?: any): AsyncObjectResult {
  return { error, response };
}

export default async function onawait(
  asyncValue: Promise<any> | any
): Promise<AsyncObjectResult> {
  try {
    const value = await asyncValue;

    if (value instanceof Error) {
      return toObjectResult(value, undefined);
    }

    return toObjectResult(undefined, value);
  } catch (error) {
    return toObjectResult(error, undefined);
  }
}
