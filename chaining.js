// method chaining: using more than one method in a line to do more than one thing to the data (concise and DRY principles)

const favFoods = ["pizza", "pasta", "fruit", "candy"]

function emilyAndVal (food) {
    let x = food.pop([])
    return x.length
}
console.log(emilyAndVal(favFoods))
// console.log(emilyAndVal(arr));