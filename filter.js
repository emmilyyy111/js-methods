const dogs = [
    {
        name: 'brinx',
        color: 'black and brown',
        breed: 'german shephard',
        gender: 'male',
    },
    {
        name: 'gracie',
        color: 'black and brown',
        breed: 'german shephard',
        gender: 'female',
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
];

let germanShephards = dogs.filter((dog) => dog.breed === 'german shephard');
console.table(germanShephards);
