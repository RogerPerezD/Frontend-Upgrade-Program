// unknown type
// Es para datos que al principio no tenemos idea
// de que tipo de dato sera alamacenado
// una vez que se le ha asigando un valor, toma ese tipo de dato
let userInput: unknown;
let userName: string;

console.log(typeof userInput) // print undefined
userInput = 5;
console.log(typeof userInput) // print number
userInput = 'roger';
console.log(typeof userInput) // print string

// userName = userInput; marks error de compilacion
// firstable we should verify the type of the variable
if (typeof userInput === 'string') {
    userName = userInput; 
}
console.log(userName);

// Diferencias con el type any vs type unkonw
// Tienen similitudes ya que ambos toman el type del valor
// que se les asigne
let test1: any;
let test2: unknown;
let numberTest: number;

console.log(typeof test1, typeof test1); // undefined, undifenid

test1 = 'hola';
test2= 'hola2';

console.log(typeof test1, typeof test1); 

numberTest = test1;
console.log(typeof numberTest); //string
// numberTest = test2; como el valor acutal del unkonw es string, no deja asignarlo a un number
// console.log(typeof numberTest);
// En conclusion el type unknown es un poco mas estricto