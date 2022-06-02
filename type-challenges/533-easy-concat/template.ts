/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #简单 #array
  
  ### 题目
  
  在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
  
  举例，
  
  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```
  
  > 在 Github 上查看：https://tsch.js.org/533/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Concat<T extends any[], U extends any[]> = [...(T extends [] ? [] : T), ...(U extends [] ? [] : U)]
// type Concat<T extends any[], U extends any[]> = [...T, ...U]


// 题目分析：
// 数组合并， T U 类型为 any 类型的数组，执行T U 类型的数组合并，返回 any 类型的数组。
// 如果 T U 类型为空数组，则返回空数组。


// JS 实现
function ArrayConcat(T: any[], U: any[]): any[] {

  // 如果 T U 类型为空数组，则返回空数组。
  // if (T.length === 0 && U.length === 0) {
  //   return []
  // }
  return [...T, ...U]
}
