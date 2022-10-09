// 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
// 您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。
//但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

type DeepReadonly<T extends object> = {
  readonly [K in keyof T]: T[K] extends Function | keyof any ? T[K] : T[K] extends object ? DeepReadonly<T[K]> : T[K]
}
type aa = (() => void) extends object ? true : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type res1 = DeepReadonly<X>
type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]
// type X = {
//   x: {
//     a: 1
//     b: 'hi'
//   }
//   y: 'hey'
// }

// type Expected = {
//   readonly x: {
//     readonly a: 1
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }
type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}