// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
const foo = (arg1: string, arg2: number): void => { }
type MyParameters<T extends (...args: any[]) => void> = T extends (...args: infer P) => void ? P : never

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
