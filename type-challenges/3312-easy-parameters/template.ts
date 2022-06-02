/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #简单 #infer #tuple #built-in
  
  ### 题目
  
  实现内置的 Parameters<T> 类型，而不是直接使用它，可参考[TypeScript官方文档](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)。
  
  > 在 Github 上查看：https://tsch.js.org/3312/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => void ? P : never



// T 是一个函数，怎么能够拿到它的参数类型呢
// 需要返回一个数组[]，值为参数的类型


// 解题思路
// T extends (...args: infer P) => void
// ...args: infer P : 表示函数的参数,
// infer P  设置为参数的类型, 并且得到的P还是一个 [] ,得到得值就是 需要得参数类型
