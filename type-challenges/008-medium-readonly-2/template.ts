/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现一个通用`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。
  
  `K`指定应设置为Readonly的`T`的属性集。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。
  
  例如
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```
  
  > 在 Github 上查看：https://tsch.js.org/8/zh-CN
*/


/* _____________ 你的代码 _____________ */

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in keyof T  as P extends K ? P : never]: T[P]
// } & {
//   [P in keyof T  as P extends K ? never : P]: T[P]
// }

type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>



// 参考方法：
//  Readonly<Pick<T, K>>   返回全部可读的 T 的 K 属性的对象
//  Omit<T, K>  再剔除  T 的 K 属性的对象






// 自己模拟 ： 
// 1. 循环确定K确实是 T 的属性
// 2. 循环 T， 判断T的某个属性是否等于 K的某个属性
// 3. 如果是 就在前面添加  readonly  xxx : XXX
// 5. 如果不是 就什么就不用做


// function Readonly2 (todo, list) {
//   // todo
//   // list   'title' | 'description'

//   let result = []
//   for (let i = 0; i <todo.length; i++) {
//     if (todo[i] === list[i]) {
//       result.push({readonly todo[i]})
//     }
//   }
// }
