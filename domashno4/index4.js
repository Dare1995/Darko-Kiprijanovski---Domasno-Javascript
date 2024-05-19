function checkGrade(grade) {
    return grade >= 90 ? 'A' :
           grade >= 80 ? 'B' :
           grade >= 70 ? 'C' :
           grade >= 60 ? 'D' :
           'F'
}

let numericGrade = 85
let letterGrade = checkGrade(numericGrade)
console.log(`The letter grade for ${numericGrade} is ${letterGrade}`)
