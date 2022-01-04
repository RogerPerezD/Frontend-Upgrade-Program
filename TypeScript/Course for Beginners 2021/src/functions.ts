// Funciones

// Ts infiere el valor de retorno en este ejemplo infiere
// que el tipo de retorno en number
function add( number1: number, number2: number){
    return number1+number2;
}
console.log(add(5,10));

// Pero tambien podemos indicarlo explicitamente
function addCadenas ( cadena1: string, cadena2: string): string{
    return cadena1 + cadena2;
}
console.log(typeof addCadenas('hola', 'mundo'));

// Para aquellas funciones que no retornan nada se les asigna el type void
function printMessage( msg: string): void{
    console.log(msg);
}

printMessage( 'Test void function');

// Arrow function in ts
const testArrow = ():void => {
    console.log('Test...')
}
const testArrowReturn = (): string =>  {
   return 'Hola';
}

// Type Function
// Al hacer esto le decimos la variable va a almacenar una funcion
let varFunc: Function;
varFunc = add;
// varFunc = 'something'; error
// varFunc = printMessage; esto es valido
console.log(varFunc(5,10));

// Pero al hacer esto nos referimos a que literalmente puede almacenar cualquier
// funcion, para ser mas especificos sobre los parametros y el tipo
// de retorno de la funcion que va a almacenar lo haremos de la siguiente manera:
let varFunc2: (firstParametr: number, secondParameter: number) => number;

varFunc2 = add;
// varFunc2 = printMessage; marcar error, ya que no cumple con lo especificado

console.log(varFunc2(5,10));

// Haciendo funciones de orden superior(callbacks)
const addAndHandle = (n1: number, n2: number, callback: ( result: number) => void): void =>{
    const result = n1+n2;
    callback(result);
}

addAndHandle(10, 20, (result) => console.log(result));
