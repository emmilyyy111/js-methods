// .forEach requires a callback function
// const people = [ 18, 30, 20, 21, 46];

function amIOldEnough () {
    let kid = 20
    if(kid >= 21){
        return "allowed in bar"
    }else{
        return "maybe next year kid"
    }
}
// console.log(amIOldEnough());

const people = [ 18, 30, 20, 21, 46];
let olderPeople = people.forEach()
console.log(people)

