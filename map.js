// const actors = [
//     {
//         name: 'Ryan Gosling',
//         height: '72 inches',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Paul Walker',
//         height: '74 inches',
//         eye_color: 'sparkling blue eyes',
//         gender: 'male',
//     },
//     {
//         name: 'Amy Schumer',
//         height: '67 inches',
//         eye_color: 'blue',
//         gender: 'female',
//     },
//     {
//         name: 'Margot Robbie',
//         height: '65 inches',
//         eye_color: 'blue',
//         gender: 'female',
//     },
// ];

// //--->.MAP()<---//

// // get array of all names
// const names = actors.map(actor => actor.name)
// // console.log(names)

// // get array of all heights
// const heights = actors.map(actor => actor.height)
// // console.log(heights)

// // get array of objects with just name and height properties
// const nameHeight = actors.map((actor) => ({
//     name: actor.name, 
//     height: actor.height
// }));
// // console.log(nameHeight)

// // get array of all first names
// const firstnames= actors.map(actor => actor.name.split(" ")[0])
// console.log(firstnames)

const dogs = [
    {
        name: 'brinx',
        color: 'black and brown',
        breed: 'german shephard',
        gender: 'male',
        weight: 80,
    },
    {
        name: 'gracie',
        color: 'black and brown',
        breed: 'german shephard',
        gender: 'female',
        weight: 90,
    },
    {
        name: 'skeeterz',
        color: 'black,brown and white',
        breed: 'beagel',
        gender: 'male',
        weight: 40,
    },
    {
        name: 'rapheal',
        color: 'black and brown',
        breed: 'doschund',
        gender: 'male',
        weight: 35,
    },
]

// let dogsize = dogs.map((dog) => {
//     if (dog.weight>= 40){
//     return 'large breed'
//     }else{
//         return 'small dog'
//     }
// })
// console.log(dogsize)

let dogsWeight = dogs.map((dog) => {
    let data = {
        weight: dog.weight,
        size: 'large breed',
    };
    if (dog.dogweight <= 40){
        data.weight = 'Skeeter';
    }
    if(dog.dogweight >= 41){
        data.weight = 'german shehards'
    }
});
console.log(dogsWeight)

