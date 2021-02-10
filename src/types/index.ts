type AsyncValue<T = any> = any | Promise<T>;

type AsyncErrorValue = any;
type AsyncResponseValue = any;

type AsyncObjectResult = {
  error?: AsyncErrorValue;
  response?: AsyncResponseValue;
};

type AsyncArrayResult = { 0: AsyncErrorValue; 1: AsyncResponseValue }[];

type AsyncResult = AsyncObjectResult | AsyncArrayResult;
