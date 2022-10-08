
// 实现内置的Exclude <T, U>类型，但不能直接使用它本身。
//从联合类型T中排除U的类型成员，来构造一个新的类型。

type MyExclude<T, K extends T> = T extends K ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type Result2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'> // 'b' | 'c'
type abc = keyof any
export{}