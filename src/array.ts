import { toWrappedTryCatchBlock, toArrayResult } from './utils';

export default function onawait(asyncValue: any): Promise<AsyncArrayResult> {
  return toWrappedTryCatchBlock(asyncValue, toArrayResult);
}
