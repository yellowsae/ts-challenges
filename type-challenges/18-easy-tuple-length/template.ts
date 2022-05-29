/*
  18 - 获取元组长度
  -------
  by sinoon (@sinoon) #简单 #tuple
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。
  
  例如：
  
  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
  
  type teslaLength = Length<tesla> // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```
  
  > 在 Github 上查看：https://tsch.js.org/18/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Length<T extends readonly any[]> = T["length"]


// JS 写法

// function getLength(arr) {

//   // 判断是否是数组 
//   if (!Array.isArray(arr)) return
//   return arr.length
// }


// T extends any[] 约束 T 必须是一个 [] 类型
// type Length<T extends readonly any[]> = T["length"]

// 引入  Tuple 返回得到的 readonly 数组值
// 需要加上 readonly 关键字 



// 本地涉及到的内容 
/**
 * 
// 1. 什么是 tuple 类型
// 2. tuple 和 普通的 数组类型有什么区别


type StrNumType = [string, number]
const t1: StrNumType = ['123', 123]

type a1 = StrNumType["length"];  // type a1 = 2   -> 使用 tuple 类型的 length 返回得到的是 确定的属性值

type strArray = string[]

type t2 = strArray["length"]  // type t2 = number -> 而 Array 获取 length 属性返回的是 number 类型

 */
