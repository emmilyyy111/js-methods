// const nums = [8, 4, 6, 9]

// const findTargetNums =  (arr) => {
//     const target = 10
//     let array = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] + arr[i] === target){
//             array.push(i)
//         }
//     }
//     return array
// }

// console.log(findTargetNums(nums))

const nums = [8, 4, 6, 9]

const findTargetNums =  (arr) => {
    const target = 10
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                newArray = [i,j]
            }
        }
    }
    return newArray
}

// console.log(findTargetNums(nums))

// find friends that are older than me
const friends = [15, 12, 45, 23, 14, 16]
const findOlder = (arr) => {
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr.friends[i] >= count)
        
        
    }
}
console.log(findYoungest(friends))