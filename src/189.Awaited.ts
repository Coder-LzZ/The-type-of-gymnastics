type ExampleType = Promise<string>
type ExampleType2 = Promise<string | number>
type ExampleType3 = Promise<Promise<string | number>>

// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never
type Result = MyAwaited<ExampleType> // string
type Result2 = MyAwaited<ExampleType2> // string|number


type MyAwaited2<T extends Promise<any>> =
  T extends Promise<infer R> ?
  R extends Promise<any> ? MyAwaited2<R> : R : never
type Result3 = MyAwaited2<ExampleType3> // string|number

export{}
