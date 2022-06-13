/*
  10 - 元组转合集
  -------
  by Anthony Fu (@antfu) #中等 #infer #tuple #union
  
  ### 题目
  
  实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。
  
  例如
  
  ```ts
  type Arr = ['1', '2', '3']
  
  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/10/zh-CN
*/


/* _____________ 你的代码 _____________ */

type TupleToUnion<T extends any[]> = T[number]


type arr = [123, '456', true]

type a = arr[number]  // arr[number]  返回得到一个  union 类型   true | 123 | "456"
