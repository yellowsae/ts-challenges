/*
  3 - 实现 Omit
  -------
  by Anthony Fu (@antfu) #中等 #union #built-in
  
  ### 题目
  
  不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。
  
  `Omit` 会创建一个省略 `K` 中字段的 `T` 对象。
  
  例如：
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/3/zh-CN
*/


/* _____________ 你的代码 _____________ */

// 查看 https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys 
// Omit 的文档，和逻辑实现

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}


//  Exclude<keyof T, K>  : keyof T 循环T的所有属性，排除K中的属性， 这一步就去除了 K 指定的属性
//  剔除掉指定的属性， 返回 Union 类型 "title" | "completed"

// 然后
// [P in "title" | "completed"]: T[P]   // 循环赋值



/**
 * 另一种方法
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>


使用 Pick方法 和 Exclude 方法联合 

1. 先 Exclude<keyof T, K>   提出 T里面的K, 返回 union 类型

2. 然后使用 Pick,   Pick<T, Exclude<keyof T, K>>

// Pick的实现：type Pick<T, K extends keyof T> = { [P in K]: T[P]; }  ->  返回K:Value的对象


*/
