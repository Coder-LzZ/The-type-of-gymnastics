// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
// K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly < T > 一样。
/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

// 会进行一个对象的覆盖的
type MyReadonly2<T extends object, K extends keyof T = keyof T> = {
  readonly [X in K]: T[X]
} & {
    // [P in keyof T as P extends K ? never : P]: T[P]
    [P in K as P extends keyof T ? never : P]: T[P]
  }

type MyReadonly3<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>
type res1 = MyReadonly2<Todo1>
type res2 = MyReadonly2<Todo1, 'title' | 'description'>
type res3 = MyReadonly3<Todo2, 'title' | 'description'>



// type cases = [
//   Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
//   Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
//   Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
// ]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

// interface a {
//   readonly name: string
// }
// interface b {
//   name: string
// }
// type c = a & b
// const d: c = {
//   name: 's'
// }
// console.log(d.name = 'xxx');

export{}
