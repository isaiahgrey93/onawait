type AsyncValue<T = any> = any | Promise<T>;

type AsyncErrorValue = any;
type AsyncResponseValue = any;

type AsyncObjectResult = {
  error?: AsyncErrorValue;
  response?: AsyncResponseValue;
};

type AsyncArrayResult = [
  error: AsyncErrorValue,
  response: AsyncResponseValue
];

type AsyncResult = AsyncObjectResult | AsyncArrayResult;
