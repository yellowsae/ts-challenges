type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown> ? MyAwaited<X> : X
  : never


// 1. T extends Promise<unknown>   T 必须是一个 Promise 类型 ；  Promise<unknown> 表示 Promise 的类型参数不知道
// 2. T extends Promise<infer X> ? X : never 
//        T 是一个Promise类型 
//        infer X  -> 设置 Promise 的类型参数为 X， 类似设置参数X， 如果X是 对应的要求， 返回出 X , 如果X不是对应的要求， 返回 never
// 3. X extends Promise<unknown> ? MyAwaited<X> : X 
//     因为X可能是一个Promise 套Promise 类型；   Promise<Promise<string | number>>
//     执行递归解析出 X的值 
//     如果不是Promise 类型， 返回 X



// 知识点 infer 
// 1. 只能在 条件类型中使用
// 2. 设置未知数 变量   infer X




// 这题不适合使用 JS 的对比方法


// 题目要求 
/**
 * 分析： 
 * 1. MyAwaited<X>, string> :  接受一个X类型的Promise，返回一个string类型
 * 2. 如果MyAwaited<Y> ， Y类型的Promise对象，返回一个{ field: number }类型
 * 3. 如果MyAwaited<Z> ， Z的类型为 <Promise<string| number>> , 返回一个string| number类型 
 * 
 * 
 * 题目要求 
 * MyAwaited 的接收一个Promise， 返回出 Promise 中的值
 * 如果 MyAwaited 接收的是 number（其他类型）， 那就报错
 */
