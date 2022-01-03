// Functions are Objects min: 26
// Las funciones son objetos que son creados por el objeto
// Function
function Person(name, lastName){
    this.name = name;
    this.lastName = lastName;
}
const roger = new Person('roger','perez');
console.log(roger.name);
console.log(roger.lastName);
console.log(Person.constructor); //ƒ Function() { [native code] }

// Crear una funcion explicitamente
// Es lo mismo que arriba
const Person2 = new Function(['name', 'lastName'],
`this.name = name;
this.lastName = lastName;`);

const raul = new Person2('raul','lopez');
console.log(raul.name);
console.log(raul.lastName);
console.log(Person2.constructor); //ƒ Function() { [native code] }