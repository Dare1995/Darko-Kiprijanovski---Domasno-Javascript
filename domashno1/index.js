let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

let result1 = hasTea || hasMilk
// console.log(result1)
let result2 = hasCoffee && hasTea
// console.log(result2)
let result3 = hasTea
// console.log(!result3)
let result4 = (hasCoffee || hasMilk)
// console.log(!result4)
let result5 = (hasTea && hasMilk) || (hasCoffee && hasTea)
// console.log(result5)
let result6 = hasCoffee || hasTea
// console.log(!result6)

console.log(result1, result2, !result3, !result4, result5, !result6)

