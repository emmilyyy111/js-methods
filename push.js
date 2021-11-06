const dogs = [
    {
        name: 'brinx',
        color: 'black and brown',
        breed: 'german shephard',
        gender: 'male',
    },
    {
        name: 'skeeterz',
        color: 'black,brown and white',
        breed: 'beagel',
        gender: 'male',
    },
    {
        name: 'rapheal',
        color: 'black and brown',
        breed: 'doschund',
        gender: 'male',
    },
]

const dog1 = {
    name: 'gracie',
    color: 'black and brown',
    breed: 'german shephard',
    gender: 'female',
}

dogs.push(dog1)
// console.table(dogs)

const dog2 = {
    name: 'karma',
    color: 'white',
    breed: 'pomsky',
    gender: 'female',
}
dogs.push(dog2)
// console.table(dogs)


let vehicles = [ "truck", "suv", "van", "motorcycle"];
let newVehicles = vehicles.push("scooter"); 
console.log(newVehicles);
