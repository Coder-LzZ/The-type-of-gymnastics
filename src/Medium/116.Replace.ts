// 实现 Replace < S, From, To > 将字符串 S 中的第一个子字符串 From 替换为 To 。

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'


/* _____________ Your Code Here _____________ */

type Replace<S extends string, From extends string, To extends string> =
  From extends '' ? S : S extends `${infer left}${From}${infer Right}` ? `${left}${To}${Right}` : S



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]