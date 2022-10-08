// 创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
// 1.
type Length<T extends readonly (keyof any)[]> = T['length']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

// tuple and Array 的区别
let arr = [1, 2, 3]
type length = (typeof arr)['length']

let tuple: [string, number] = ['1', 2]
type length2 = (typeof tuple)['length'] 


export{}