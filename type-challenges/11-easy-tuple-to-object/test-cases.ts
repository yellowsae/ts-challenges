import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error

type error = TupleToObject<[[1, 2], {}]>

// type r = typeof tuple  // r 的类型： type r = readonly ["tesla", "model 3", "model X", "model Y"]

// as const 
/**
 * const 表示常量的意思，
 * 当 没有写 as const 时 ，  tuple 是一个  数组 string[]
 * 当 写了 as const 时 ，  tuple 是一个  常量 readonly ["tesla", "model 3", "model X", "model Y"], 数组的值就是 指定的常量
 */




/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/11/answer/zh-CN
  > 查看解答：https://tsch.js.org/11/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/



// const  let  在JS中定义变量  （JS世界）
// type interface   使用在 TypeScript 世界


// 1.  将 JS 世界中的语法 ->  TS 世界中的语法  :  使用 typeof  关键字
// 2. 字面量类型




/**
 * 2. 字面量类型
 * 
 * 字面量类型：表示常量
let a = "123";
a = "123aaaa"

type result = typeof a;  // type result = string ;  类型为 string

const strConst = "123"
type index = typeof strConst;   // type index = "123"  值只能等于 "123",  是一个常量
 */
