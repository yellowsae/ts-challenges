/*
  9 - 深度 Readonly
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys #deep
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现一个通用的`DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。
  
  您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。
  
  例如
  
  ```ts
  type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }
  
  type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
  }
  
  type Todo = DeepReadonly<X> // should be same as `Expected`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/9/zh-CN
*/


/* _____________ 你的代码 _____________ */

type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// 解析：  
//  [P in keyof T] 返回对象的 key 值，  keyof T  返回 Union 类型的值

// keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>  
// 表示 对象的value 
// 解释： keyof T[P] extends never 判断 值是否为空， 如果为空 返回  T[P] , 如果没有就递归 T[P] 这个属性值
