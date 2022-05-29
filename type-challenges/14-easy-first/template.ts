/*
  14 - 第一个元素
  -------
  by Anthony Fu (@antfu) #简单 #array
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。
  
  例如：
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```
  
  > 在 Github 上查看：https://tsch.js.org/14/zh-CN
*/


/* _____________ 你的代码 _____________ */

// type First<T extends any[]> = any


// 返回 TS  数组的第一个元素


// 涉及到的知识点
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性,  indexed -> 获取的属性值
// 3. extends union 判断规则,   T[number] 返回 union  值，判断 T[0] extends T[number]； 就可以知道 T 是否为 空数组
// 4. infer 的使用



// JS 写法 

// const first = (arr) => {

//   // 需要判断 arr 是否是一个空数组， 如果是空数组，按照题目要求返回 never
//   if (arr.length === 0) return "never"
//   return arr[0]
// }


// 第一种写法，使用 extends 是否为一个 空数组  【】， 如果是返回 never 不是就返回 T[0]
// 


// 第二种写法：使用 length 属性判断 length 的值是不是 0；  如果是返回 never, 不是返回 T[0]
// 获取 length 的属性值
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]


// 第三写法： 使用 T[number] 得到的 union 值， 判断是否有值，如果有值就返回 T[0]， 如果没有值就返回 never
// type ages = [1,2,3]
// type r = ages[number];  // type r = 3 | 1 | 2 ， 返回是一个 union 的值
// type ages = [];
// type r = ages[number]  // type r = never ,  在没有值时 返回是一个 never


// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;


// 第四种写法： 使用 infer （推断）
// JS 写法 

// const first = (arr) => {
//   // 需要判断 arr 是否是一个空数组， 如果是空数组，按照题目要求返回 never
//   // if (arr.length === 0) return "never"
//   // return arr[0]

//   // 因为只需要获取 数组的 第1个元素，使用解构方式 
//   const [first, ...rest] = arr
//   return first ? first : "never"
// }

// infer 推断
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never;
//  [infer First, ... infer Rest] ? First : never
// 看看T能不能解构出 First， 如果能够解构出 First，将First返回出去， 如果不行， 就返回 never
