/*
  11 - 元组转换为对象
  -------
  by sinoon (@sinoon) #简单 
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
  
  例如：
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > 在 Github 上查看：https://tsch.js.org/11/zh-CN
*/


/* _____________ 你的代码 _____________ */

// type TupleToObject<T extends readonly any[]> = any




// JS  实现


// function tupleToObject(array) {

//   const obj = {}

//   // 2. 循环取值
//   array.forEach((val) => {
//     // 赋值为 需要返回的 样子
//     obj[val] = val
//   })

//   // 1. 返回一个对象
//   return obj
// }

// 目的： 将 array设置为 { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


// 步骤： 
// 1. 返回一个对象
// 2. 变量 Array



// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const  // 测试


type TupleToObject<T extends readonly (string | number | symbol)[]> = {  // 1. 返回一个对象
  // 2. 循环一个TS 中的数组array  [P in T[number]]: P
  // T[number] 表示下标
  [P in T[number]]: P   // 赋值  P: P
}
  // 主要记住 循环 TS 中的 Array 是 T[number]


// type r = TupleToObject<typeof tuple>   // 测试



/**
 * 总结： 
 * 在 TS 中遍历 Array   T[number]
 */

