type A = [1, 2, 3]

type First<T extends any[]> = T extends [infer F, ...infer E] ? F : never
type res1 = First<A>

type B = "123"
type FirstStr<T extends string> = T extends `${infer R}${infer E}` ? R : never
type res2 = FirstStr<B>


type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends
  <T1>() => T1 extends B ? 1 : 2
  ? true
  : false

type Example1 = { a: 1; b: 2 } extends { a: 1 } ? true : false // true
type Example2 = 1 | 2 extends 1 ? true : false // false


// string
// 将类型转为字符串有一定的限制，仅支持下面的类型
type CanStringified = string | number | bigint | boolean | null | undefined

// string
// 将支持的类型转化为字符串
type Stringify<T extends CanStringified> = `${T}`

type Example3 = Stringify<0> // "0"

type Example4 = Stringify<-1> // "-1"

type Example5 = Stringify<0.1> // "0.1"

type Example6 = Stringify<"0.2"> // "0.2"

type Example<C extends boolean = true, Tuple extends unknown[] = [1]> =
  C extends true ? Example<false, [...Tuple, 1]> : Tuple

type Result = Example // [1, 1]


// 分布式条件类型，当泛型参数 T 为联合类型时，条件类型即为分布式条件类型，会将 T 中的每一项分别分发给 extends 进行比对
type Example7<T> = T extends number ? T : never

type Result1 = Example7<"1" | "2" | 3 | 4> // 3 | 4

// 映射类型，固定写法，in 操作符会分发 T 成为新对象类型的键
type Example9<T extends keyof any> = {
  [Key in T]: Key
}
type Result2 = Example9<"1" | "2" | 3 | 4> // { 1: "1"; 2: "2"; 3: 3; 4: 4; }


type NumberLike = number | `${number}`

type CheckLeftIsExtendsRight<T extends any, R extends any> = T extends R
  ? true
  : false
type And<C1 extends boolean, C2 extends boolean> = C1 extends true
  ? C2 extends true
  ? true
  : false
  : false

// common
// 与，即 C1，C2 有一个为真
type Or<C1 extends boolean, C2 extends boolean> = C1 extends true
  ? true
  : C2 extends true
  ? true
  : false
type Not<C extends boolean> = C extends true ? false : true
// number
// number类型是否为0，判断 N 是否可分配给 0 | "0"
type IsZero<N extends NumberLike> = CheckLeftIsExtendsRight<N, 0 | "0">

// number
// number类型是否大于0，泛型类型有限制 NumberLike，所以它一定是个数或者由数字构成的字符串，将其转为字符串后，判断最前面是不是 -，如果不是，就是大于零
type IsOverZero<N extends NumberLike> = IsZero<N> extends true
  ? false
  : CheckLeftIsExtendsRight<
    Stringify<N> extends `${"-"}${infer Rest}` ? Rest : never,
    never
  >

// number
// number类型是否小于0，对上面 IsOverZero 的结果取反
type IsLessZero<N extends NumberLike> = Not<IsOverZero<N>>

// / 构造长度一定（Length）的元组
type GetTuple<Length extends number = 0> = GetTupleHelper<Length>

type GetTupleHelper<Length extends number = 0, R extends unknown[] = []> =
  R["length"] extends Length ? R : GetTupleHelper<Length, [...R, 1]>

type res = GetTuple<10>


type IntAddSingleHepler<N1 extends number, N2 extends number> = [
  ...GetTuple<N1>,
  ...GetTuple<N2>
]["length"]

// number
// 正整数（和0）加法，T1，T2最大999
type IntAddSingle<N1 extends number, N2 extends number> =
  IntAddSingleHepler<N1, N2> extends number
  ? IntAddSingleHepler<N1, N2>
  : number

// array
// 去掉数组的最后一位
type Pop<T extends unknown[]> = T extends [...infer LeftRest, infer Last]
  ? LeftRest
  : never

// T 意为 Tuple 元组
// type CompareHelper<
//   N1 extends number,
//   N2 extends number,
//   T1 extends unknown[] = array.GetTuple<N1>,
//   T2 extends unknown[] = array.GetTuple<N2>
// > = IsNotEqual<N1, N2, true> extends true
//   ? common.Or<IsZero<T1["length"]>, IsZero<T2["length"]>> extends true
//   ? IsZero<T1["length"]> extends true
//   ? false
//   : true
//   : CompareHelper<array.Pop<T1>["length"], array.Pop<T2>["length"]>
//   : false

// number
// 比较两个数字类型大小
// type Compare<N1 extends number, N2 extends number> = CompareHelper<N1, N2>

// 批处理示例
type GetLetters<Text> =
  Text extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer C4}${infer C5}${infer C6}${infer C7}${infer C8}${infer C9}${infer Rest}`
  ? C0 | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | GetLetters<Rest>
  : Text extends `${infer C}${infer Rest}`
  ? C | GetLetters<Rest>
  : never

type res3 = GetLetters<"abcserffgg">






export { }