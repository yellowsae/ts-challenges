/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

/**
 * 续讲： as const 
 * 
 * 在没有添加 as const 时 tesla 得到的 是一个 string[]； 
 * 再加上 as const 后 得到的是一个 tuple 类型，readonly 定死的类型和值数组，  readonly ["tesla", "model 3", "model X", "model Y"]
 * 
 * 
 * 这就是加 了 as const 和 没有加上 as const 的区别
 */


type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]

