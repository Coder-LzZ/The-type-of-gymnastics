// 不使用 Omit 实现 TypeScript 的 Omit < T, K > 泛型。
// Omit 会创建一个省略 K 中字段的 T 对象。

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type MyOmit2<T, U> = Pick<T, {
  [P in keyof T]: P extends U ? never : P
}[keyof T]>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit2<Todo, 'description' | 'completed'>>>,
]

function omit<T extends {}, K extends readonly any[]>(obj: T, keys: K) {
  let newObj = <MyOmit<T, K[number]>>{}
  for (const key in obj) {
    if (!keys.includes(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
const obj = {
  title: "xxx",
  description: "sss",
  completed: true
}
let res: Expected1 = omit(obj, ['description', 'invalid'] as const)
console.log(res);

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}