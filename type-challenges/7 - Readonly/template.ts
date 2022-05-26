/* _____________ Your Code Here _____________ */

// 题目要求： 在 interface Todo 中， 所有的属性加上 readonly 关键字， 
// type MyReadonly<T> = {
//   readonly [P in keyof T]: T[P]
// }

// JS 实现

// function readonly(obj) {

//   const result = {}

//   // 实现 obj 属性前加上 readonly 关键字

//   for (const key of obj) {
//     result["readonly" + key] = obj[key]
//   }

//   // 返回出一个对象
//   return result
// }


// 1. 返回一个对象
// 2. 遍历 obj （在JS中为一个对象，  在TS中是一个 接口）
// 3. 加上 readonly 关键字
// 4. 通过 key 来获取 obj （ts -> 接口） 里面的值 (ts- -> 类型)



type MyReadonly<T> = {  // 1. 为一个对象
  // 2. 遍历 T :   in keyof T  -> 
  // 在 TS中 遍历接口 T: 使用 -> in keyof T   得到 T 中的所有属性

  // 3. 加上 readonly 关键字
  readonly [P in keyof T]: T[P]
  // T[P] -> 通过接口的属性 获取 属性值  
  // 此时 P 就是 T 的属性 key
}
