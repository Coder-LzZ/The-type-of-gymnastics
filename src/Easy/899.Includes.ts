// 在类型系统里实现 JavaScript 的 Array.includes 方法，
//这个类型接受两个参数，返回的类型要么是 true 要么是 false。
import { Equal } from "@type-challenges/utils"
type Includes<T extends any[], K> = K extends T[number] ? 'true' : "false"


type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `false`

//此时在用上面的写法就不合适了 
type Includes2<T extends any[], K> = T extends [infer First, ...infer Rest] ? Equal<K, First> extends true ?
  "true" : Includes2<Rest, K> : false

type isPillarMen3 = Includes2<[{}], { 'a': 'A' }> //false
type isPillarMen4 = Includes2<[boolean, 2, 3, 5, 6, 7], false> //false
type isPillarMen5 = Includes2<[true, 2, 3, 5, 6, 7], boolean> //false
type isPillarMen6 = Includes2<[{ 'a': 'A' }], { readonly 'a': 'A' }> //false
type isPillarMen7 = Includes2<[1], 1 | 2> //false
type isPillarMen8 = Includes2<[1 | 2], 1> //false
type isPillarMen9 = Includes2<[null], undefined> //false
type isPillarMen10 = Includes2<[undefined], null> //false








export { }