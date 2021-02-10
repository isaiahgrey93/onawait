import { toWrappedTryCatchBlock, toObjectResult } from './utils';

export default function onawait(asyncValue: any): Promise<AsyncObjectResult> {
  return toWrappedTryCatchBlock(asyncValue, toObjectResult);
}
