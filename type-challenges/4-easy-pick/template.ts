// type MyPick<T, K> = any



// js

// 先写好js再写 ts  对比学习

// function MyPick(todo, keys) {

//   const obj = {}

//   keys.forEach(key => {
//     if (key in todo) {
//       obj[key] = todo[key]
//     }
//   })
//   // 1. 返回一个对象
//   return obj
// }


// 1. 返回一个对象
// 2. 遍历forEach
// 3. 取值 todo[key]
// 4. 判断 key 在不在 todo 里面



// ts 联合类型 union 

type MyPick<T, K extends keyof T> = {   // 1. 返回一个对象
  // 2. 遍历 key   [P in K]
  [P in K]: T[P]
  // 3. 取值  T[P]
  // 4. 约束 K 必须 在 T 里面   K extends T , 但是 T是一个接口对象{}, 而 K 是一个 "title" | "completed" | "invalid" 的字符串
  //  -   所以需要获取 T 中的  ["title" | "completed" | "invalid"] ,  必须要使用 keyof ;

  // 最后的约束： K extends keyof T

}


// K extends keyof T 的对比
/**
 * K  extends  keyof T
 * 
 * K -> 转为  "title" 
 * keyof T  -> 转为 ["title" | "completed" | "invalid"]
 * 
 * extends ：  K  依次向 T 进行比较
 */


/**
 * 涉及到的知识点： 
 *   
 *  - Mapped  { in 循环 } : https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content 
 * 
 *  - indexed { 取值 } ： https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
 * 
 * - lookup { keyof 获取到接口中的 key 并组成 union 类型呢 -> "title " | "completed" | "invalid"} ： https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content  
 * 
 * -  extends { 约束 } ： 类似 将两边转为数组 - https://www.typescriptlang.org/docs/handbook/mixins.html#constraints
 *      - K  :  ["title" | "completed"]
 *      - keyof T : ["title" | "completed" | "invalid"]
 *      - K 是否在 keyof T 中 , 达到约束的目的  
 */
