// 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'




/* _____________ Your Code Here _____________ */
// 1.
// type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}` ? Trim<R> : S &
//   S extends `${infer R}${' ' | '\t' | '\n'}` ? Trim<R> : S

// 2.
type Trim<S extends string> = string.TrimLeft<string.TrimRight<S>>



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import type { string } from "typescript-lodash"
type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]
