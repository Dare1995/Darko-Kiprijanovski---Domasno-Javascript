// (а)

const globalNum = 10
function checkScope () {
    var localNum = globalNum
    return localNum
}
console.log(checkScope())

// (б)

console.log(globalNum === checkScope())

// (в)

if(true) {
    var blockNum = 10
}

console.log("Type of blockNum is", typeof blockNum)