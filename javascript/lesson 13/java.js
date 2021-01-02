// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let result = arr.reduce((a, b) => {
//     return a * b
// }, 1)

// console.log(result)


// let array = [4, 8, 6, 4, 2]
// let gv = array.reduce((sum, sam) => sum + sam, 1)
// console.log(gv)


// b(n){
//     if(n === 1 || n === 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }



// let result = fib(6)
// fib(3) = fib(2) + fib(1)
// fib(5)
//     fib(4)
//         fib(3)
//            fib(2)
//                1
//            fib(1)
//                1 
//         fib(2)
//             1
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
// fib(4)
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
//     fib(2)
//         1
//////////////////////////////////////////////
// fib(5)
//     fib(4)
//         fib(3)
//            fib(2)
//                1
//            fib(1)
//                1 
//         fib(2)
//             1
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
// fib(4)
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
//     fib(2)
//         1


// fibonachi
// 1 1 2 3 5 8 13 21 34 ...
// 1 2 3 4 5 6 7  8  9  ... n
// 1.618
// function fib(n){
//     if(n === 1 || n === 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }
// let result = fib(50)
// console.log(result)
// fib(3) = fib(2) + fib(1)


// fibonachi
// 1 1 2 3 5 8 13 21 34 ...
// 1 2 3 4 5 6 7  8  9  ... n
// let cache = [1, 1];
// function fib(n){
//     if( cache[n - 1] ) return cache[n - 1];
//     let nextFib = fib(n - 1) + fib(n - 2);
//     cache.push(nextFib)
//     return nextFib
// }
// let result = fib(1000)
// console.log(result)