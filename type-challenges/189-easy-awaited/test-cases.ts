
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>



// 题目要求 
/**
 * 分析： 
 * 1. MyAwaited<X>, string> :  接受一个X类型的Promise，返回一个string类型
 * 2. 如果MyAwaited<Y> ， Y类型的Promise对象，返回一个{ field: number }类型
 * 3. 如果MyAwaited<Z> ， Z的类型为 <Promise<string| number>> , 返回一个string| number类型 
 * 
 * 
 * 题目要求 
 * MyAwaited 的接收一个Promise， 返回出 Promise 中的值
 * 如果 MyAwaited 接收的是 number（其他类型）， 那就报错
 */
