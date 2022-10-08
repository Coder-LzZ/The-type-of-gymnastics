type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
// 1.
type First<T extends any[]> = T extends [] ? never : T[0]
// 2.
type First2<T extends any[]> = T extends [infer P, ...any[]] ? P : never;
// 3.
type First3<T extends any[]> = T['length'] extends []['length'] ? never : T[0]
// 4.
type First4<T extends any[]> = T[0] extends T[number] ? T[0] : never


type head1 = First<arr1> // expected to be 'a'
type head2 = First2<arr2> // expected to be 3
type head3 = First3<arr1> // expected to be a
type head4 = First4<arr1> // expected to be a


export{}