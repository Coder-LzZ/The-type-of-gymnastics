// 在这个挑战中，你应该实现一个类型Zip<T, U>， T和U必须是元组 
// 如下:

type Zip<T extends any[], U extends any[]> = T extends [infer TFirst, ...infer TRest] ?
  U extends [infer UFirst, ...infer URest] ? [[TFirst, UFirst], ...Zip<TRest, URest>]
  : []
  : []

type exp1 = Zip<[], []> //[]
type exp2 = Zip<[1, 2], [true, false]>  //[[1, true], [2, false]]
type exp3 = Zip<[1, 2, 3], ['1', '2']> // [[1, '1'], [2, '2']]
type exp4 = Zip<[], [1, 2, 3]> // []
type exp5 = Zip<[[1, 2]], [3]> //[[[1, 2], 3]]


// js实现
function zip(arr: any[], arr2: any[]) {
  if (arr.length === 0 && arr2.length === 0) return
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push([arr[i], arr2[i]])
  }
  return newArr
}
let zipReturn = zip([1, 2], [true, false])
console.log(zipReturn);
