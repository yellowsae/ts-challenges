
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/15/answer/zh-CN
  > 查看解答：https://tsch.js.org/15/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

