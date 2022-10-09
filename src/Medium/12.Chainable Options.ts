// 在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象
//但在 TypeScript 中，你能合理的给它赋上类型吗？
//在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。
//你需要提供两个函数 option(key, value) 和 get()。
//在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。


// type Chainable2<T = {}> = {
//   option<K extends keyof any, V>(key: K, value: V):
//     Chainable<
//       K extends keyof T ? Omit<T, K> & { [P in K]: V } : T & { [P in K]: V }
//     >
//   get(): T
// }

// your answers
type Chainable<T extends Record<string, any> = {}> = {
  option<K extends string, V>(
    key: K,
    value: V,
  ): Chainable<Omit<T, K> & Record<K, V>> // omit the same key here which we already set before
  get(): T
}





declare const config: Chainable


const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}



/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}

interface bb {
  name: string,
  age: number,
  gender: string
}
type aa = Record<'name' | 'age', string>

export { }