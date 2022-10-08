// 不要使用内置的Readonly<T>，自己实现一个。
// 该 Readonly 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
// 也就是不可以再对该对象的属性赋值。

interface Todo {
  title: string
  description: string
}
// 1.
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo"


export { }