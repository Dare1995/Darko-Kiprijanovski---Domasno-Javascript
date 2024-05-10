// (а)

const globalNum = 10;
const localNum = 10
function checkScope () {
    return globalNum;
}


// (б)

console.log(checkScope())
console.log(globalNum === localNum)


// (в)

if(true) {
    var blockNum = 10
}

console.log("Type of blockNum is", typeof blockNum)