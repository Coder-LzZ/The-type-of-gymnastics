// 实现泛型TupleToUnion<T>，它返回元组所有值的合集。
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
type Test2 = TupleToUnion<[123, '456', true]> // expected to be 123 | '456' | true
type Test3 = TupleToUnion<[123]> // expected to be 123


type TupleToUnion<T extends readonly unknown[]> = T[number]


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'


type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]