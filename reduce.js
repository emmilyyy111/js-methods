// requires a callback function on each element of array, returns single value

//defining how im storing my data and declaring a variable
const numbers = [4, 7, 24, 66, 2];
let newNumbers = numbers.reduce(checkId)
// const number2 = numbers.reduce(7,2);
// creating a function to check to see if person is 21 or older
const checkId = (age) => {
    let person = age
  if( person >= 21){
    console.log("welcome")
  } else {
      console.log("NOPE")
  }
};
console.log(numbers);
