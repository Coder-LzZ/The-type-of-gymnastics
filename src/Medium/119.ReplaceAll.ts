// 实现 ReplaceAll < S, From, To > 将一个字符串 S 中的所有子字符串 From 替换为 To。

type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'


/* _____________ Your Code Here _____________ */

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S :
  S extends `${infer F}${From}${infer L}` ? `${F}${To}${ReplaceAll<L, From, To>}` : S

type res2 = ReplaceAll<'foobarfoobar', 'ob', 'b'>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]