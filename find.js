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

let beagel = dogs.find((dogs) => dogs.breed === 'beagel');
// console.log(beagel)


let dogBeBrinx = dogs.find((dogs) => dogs.breed === 'german shephard' && dogs.name === 'brinx');
console.log(dogBeBrinx)