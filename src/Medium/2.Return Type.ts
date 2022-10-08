// 实现内置的ReturnType < T > 泛型而不使用它。 

type MyReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : never


/* _____________ Test Cases _____________ */
type res1 = MyReturnType<() => string>
type res2 = MyReturnType<() => 123>
type res3 = MyReturnType<() => ComplexObject>
type res4 = MyReturnType<() => Promise<boolean>>
type res5 = MyReturnType<() => () => 'foo'>
type res6 = MyReturnType<typeof fn>
type res7 = MyReturnType<typeof fn1>


const a = () => {

}
type v = typeof a

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2