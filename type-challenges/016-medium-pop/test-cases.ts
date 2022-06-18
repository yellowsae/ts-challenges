
/* _____________ 你的代码 _____________ */

type Pop<T extends any[]> = T extends [...infer F, infer L] ? F : never


/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/16/answer/zh-CN
  > 查看解答：https://tsch.js.org/16/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

