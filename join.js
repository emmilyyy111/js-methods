const matt = [4,6,9]
const emily = [5,1,8]

function addTwoNumbs (n1, n2){
    number = +n1.join('') + +n2.join('')
    target = number.toString()
    return target.split('')
}
// console.log(addTwoNumbs(matt,emily))

const array = ["red", "blue", "pink", "purple"];
const array2 = array.join(" * ")
console.log(array2)