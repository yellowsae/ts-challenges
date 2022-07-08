/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #中等 #template-literal
  
  ### 题目
  
  实现`Trim<T>`，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
  
  例如
  
  ```ts
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/108/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Empty = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${Empty}${infer Rest}` | `${infer Rest}${Empty}` ? Trim<Rest> : S
