// .splice() adds an item to the middle or a specific index in the array

const food = [{
    name: 'pizza',
    origin: 'italian',
    vegan: false,
},{
    name: 'pasta',
    origin: 'italian',
    vegan: true,
},{
    name: 'chcken',
    origin: 'american',
    vegan: false,
},{
    name: 'olives',
    origin: 'greek',
    vegan: true,
}]

const food1 = {
    name: 'chips',
    origin: 'american',
    vegan: true,
}

 food.splice(3, 0, food1)
//  console.table(food);

let fruits = [ "kiwi", "banana",
 "apple", "cherry"];
let fruitsIEnjoy = fruits.splice(2, 1, 
    "dragonfruit", "pear");
console.log(fruits);
