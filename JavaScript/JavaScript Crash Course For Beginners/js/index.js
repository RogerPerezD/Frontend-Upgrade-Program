
// Types of console messages
console.log("hello world");
console.error("hello world");
console.warn("hello world");

// var, let, const 
const ageP = 30;

let score = 10;

score = 11;

console.log(ageP);
console.log(score);


// String, Numbers, Boolean, null, undefined

const name = 'Jhon';
const age = 30;
const rating = 4.5;
const  isCool = true;
const x = null;
const y = undefined;
let z;


//Concatanation
console.log('My name is '+ name);
//Template String
console.log(`My name is ${name}`);

// Split string
const s = 'tec, computers, it, code';
const s2 = 'hello world';

console.log(s.split(', '));
console.log(s.split(''));

//Desustructuracion de objetos
const persona = {
    firstName : 'Rogelio',
    lastName : 'Perez',
    age : 30,
    hobbies : ['music' ,'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

const {firstName, lastName} = persona;
const { address: { city } }=persona;

console.log(firstName, lastName)
console.log(city);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);

//Convert to Json format
const todoJson = JSON.stringify(todos);
console.log(todoJson);

// For
for (let index = 0; index < todos.length; index++) {
    const element = todos[index];
    console.log(element);
}

// While
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

// For of
for (const iterator of todos) {
    console.log(iterator);
}

// foreach, map, filter
todos.forEach(element => {
    console.log(element);
});

todos.map( element => {
    console.log(element);
});


const todoCompleted = todos.filter( todo => {
    return todo.isCompleted === true;
})

console.log(todoCompleted)

