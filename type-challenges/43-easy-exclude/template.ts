// type MyExclude<T, U> = any


// 题目要求： 讲T和U中相同的值排除掉，返回 union 就是得到的值




// JS  实现

// T : ['a', 'b', 'c']
// U : ['a']
// function MyExclude(T, U) {
//   const result = []

//   for (let i = 0; i < T.length; i++) {
//     const t = T[i]

//     let boo = false

//     for (let j = 0; j < U.length; j++) {
//       let u = U[j]

//       if (t === u) {
//         boo = true
//       }
//     }

//     if (!boo) {
//       // 为 false 时，表示值不同， 添加到 result 中
//       result.push(t)
//     }
//   }
//   return result
// }



// 解法
type MyExclude<T, U> = T extends U ? never : T


// T extends U 
// 循环 T 的值 与 U 进行对比，如果相同，返回 never 空值,  如果不同返回  T, 此时的T已经去除掉了与U相同的值
// 得到的 T："b" | "c"  是一个 union 


// T extends U , 先去for循环 T，  再去for循环一个U
