// // .unshift() adds anc object it item to the beginning of your array

// const celebrities = [
//     {
//         name: 'Kim Kardashian',
//         eye_color: 'brown',
//         gender: 'female',
//         kids: true,
//     },
//     {
//         name: 'Justin Bieber',
//         eye_color: 'hazel',
//         gender: 'male',
//         kids: false,
//     },
//     {
//         name: 'Travis Barker',
//         eye_color: 'blue',
//         gender: 'male',
//         kids: true,
//     },
//     {
//         name: 'Leonardo DiCaprio',
//         eye_color: 'blue',
//         gender: 'male',
//         kids: true,
//     },
// ];
// // console.table(celebrities)

// const celebrities1 = {
//     name: 'Blake Lively',
//     eye_color: 'blue',
//     gender: 'female',
//     kids: true
// };
// celebrities.unshift(celebrities1)
// // console.table(celebrities)

// const cars = [{
//     name: 'Ferarri',
//     color: 'Red',
//     interior: 'tan',
//     fourDoor: false,
// },{
//     name: 'BMW',
//     color: 'Black',
//     interior: 'Red',
//     fourDoor: true,
// },{
//     name: 'Mercades',
//     color: 'White',
//     interior: 'Black',
//     fourDoor: true,
// }];

// const car1 = {
//     name: 'Mercades',
//     color: 'White',
//     interior: 'Black',
//     fourDoor: true,
// };
// cars.unshift(car1)
// // console.table(cars)

// let items = ["bmw", "lexus", "mercades"];
// let newCars = items.unshift("mazda");
// console.log(items);



const carsInValet = [{
    name: 'Ferarri',
    color: 'Red',
    interior: 'tan',
    fourDoor: false,
},{
    name: 'BMW',
    color: 'Black',
    interior: 'Red',
    fourDoor: true,
},{
    name: 'Mercades',
    color: 'White',
    interior: 'Black',
    fourDoor: true,
}];

let myCar = carsInValet.unshift({
    name: "Lambo",
    color: "matte black",
    interior: "black w/ pink stitching",
    fourDoor: false,
})

console.log(carsInValet)