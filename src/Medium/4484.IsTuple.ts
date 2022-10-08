// type IsTuple<T> =
//   [T] extends [never] ? false :
//   T extends readonly any[] ?
//   number extends T['length'] ? false : true : T extends { length: number } ? false : true
// 实现一个类型IsTuple，它接受输入类型T并返回T是否是元组类型。 
/* _____________ Test Cases _____________ */

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly [any?]
  ? true
  : false

// 元组和数组最大的区别就是元组length是固定值,而数组不是
type tup1 = IsTuple<[]> //true
type tup2 = IsTuple<[number]> // true
type tup3 = IsTuple<readonly [1]> // true
type tup4 = IsTuple<{ length: 1 }> //false
type tup5 = IsTuple<number[]> // false
type tup6 = IsTuple<never> //false


type a = [any?]
let b: a = []
let b2: a = [1]
type cc = [] extends readonly [] ? true : false