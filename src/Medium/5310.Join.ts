
// 实现Array的类型版本。 > 接受数组T、字符串或数字U，并返回与U拼接的数组T
type Join<T extends any[], U extends string | number> =
  T extends [infer First extends string, ...infer Rest] ?
  Rest['length'] extends 0 ? First :
  `${First}${U}${Join<Rest, U>}`
  : ''


/* _____________ Test Cases _____________ */
type res1 = Join<['a', 'p', 'p', 'l', 'e'], '-'> //'a-p-p-l-e'
type res2 = Join<['Hello', 'World'], ' '> // 'Hello World'
type res3 = Join<['2', '2', '2'], 1> //21212
type res4 = Join<['o'], 'u'>      //o,

export { }

