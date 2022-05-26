/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/11/answer/zh-CN
  > 查看解答：https://tsch.js.org/11/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
