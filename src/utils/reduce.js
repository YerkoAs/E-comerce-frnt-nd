const numbers = [2, 4, 6, 8, 10];

// numbers.map((num, index, array) => {...})

// numbers.reduce( (cv, num, index, array) => {...} )
console.log(numbers.reduce(
    (cv, num, index) => cv += num
))

const users = [
    {
        name: 'Maria',
        age: 25,
    },
    {
        name: 'Carlos',
        age: 30,
    },
    {
        name: 'Franco',
        age: 32,
    },
    {
        name: 'Lety',
        age: 18,
    },
];

console.log(users.reduce(
    (cv, num, i, array) => cv += num.age, 0
))

users.reduce(() => {}, 0);