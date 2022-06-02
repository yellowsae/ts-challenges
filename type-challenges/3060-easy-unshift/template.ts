/*
  3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #简单 #array
  
  ### 题目
  
  实现类型版本的 ```Array.unshift```。
  
  举例，
  
  ```typescript
  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
  ```
  
  > 在 Github 上查看：https://tsch.js.org/3060/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Unshift<T extends any[], U> = [U, ...T]
