// 原题如下
interface Todo {
  title: string
  description: string
  completed: boolean
}


// 自己实现MyPick类型不报错

// 题意：
// 实现 TS 内置的 Pick<T, K>，但不可以使用它。
// 从类型 T 中选择出属性 K，构造成一个新的类型。
type MyPick<T, K> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}


type MyPick2<T, K extends keyof T> = {
  [P in K]: T[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>
type TodoPreview2 = MyPick2<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}


