/*
  16 - 出堆
  -------
  by Anthony Fu (@antfu) #中等 #array
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  >在此挑战中建议使用TypeScript 4.0
  
  实现一个通用`Pop<T>`，它接受一个数组`T`并返回一个没有最后一个元素的数组。
  
  例如
  
  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]
  
  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```
  
  **额外**：同样，您也可以实现`Shift`，`Push`和`Unshift`吗？
  
  > 在 Github 上查看：https://tsch.js.org/16/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Pop<T extends any[]> = T extends [...infer F, infer L] ? F : never

// 和 15 题一样，  出栈只不过是把最后一个元素移除掉， 返回前面的数组

