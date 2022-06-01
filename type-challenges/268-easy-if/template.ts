/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #简单 #utils
  
  ### 题目
  
  实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。
  
  举例:
  
  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/268/zh-CN
*/


/* _____________ 你的代码 _____________ */

type If<C extends boolean, T, F> = C extends true ? T : F



// @ts-expect-error
type error = If<null, 'a', 'b'>


// 这个规则需要 在 tsconfig.json 开启严格模式 
//     /* Type Checking */
// "strict": true,      ---> 开启严格模式

// 需要了解的知识点： null 在严格模式下 和 非严格模式下的区别
// null 在严格模式下： 判断布尔值时，返回  false
// null 在非严格模式下： 用于判断null时 的返回类型 true

