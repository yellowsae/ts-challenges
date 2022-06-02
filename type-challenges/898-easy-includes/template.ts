/*
  898 - Includes
  -------
  by null (@kynefuk) #简单 #array
  
  ### 题目
  
  在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。
  
  举例来说，
  
  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/898/zh-CN
*/

import type { Equal } from '@type-challenges/utils'

/* _____________ 你的代码 _____________ */

export type Includes<T extends readonly any[], U> = T extends [infer First, ... infer Rest] 
  ? Equal<First, U> extends true 
    ? true
    : Includes<Rest, U>
  : false


// JS实现 


// 实现不了， 因为循环 list 在 TS 中  需要配合对象形式  {K in keyof T : T[K]} 
// function Includes(list, key) {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === key) {
//       return true
//     }
//     return false
//   }
// }


// JS 使用 递归方法 

// function Includes(list, key) {

//   // 递归方法 
//   function _(list, key) {
//     if (list.length === 0) {
//       return false
//     }
//     const [first, ...rest] = list
//     if (first === key) {
//       return true
//     }
//     // 递归调用
//     _(rest, key)
//   }

//   return false
// }
