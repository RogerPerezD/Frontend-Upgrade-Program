
// Union Types
// Nos permite poder asignarle mas de un tipo a una variable, constante
// o parametro de una funcion, usando el operador |
// let variable : number|string|boolean

function combine(input1: number|string, input2:  number|string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
        return result;
    }
    result = input1.toString() + input2.toString();
    return result;
}

const combinedAges = combine(10, 15);
console.log(combinedAges)

const combinedNames= combine('Rogelio', 'Carol');
console.log(combinedNames)


// Literal Types
// Es cuando le damos un valor en especifico a una variable
// Por ejemplo cuando definimos una constantes le difinimos literalmente el valor
// que le hayamos asignado por ejemplo
const literalType = 34;
// Su valor literal es 34, no es numeric
// Otro ejemplo
let resultCombine: 'as-number' | 'as-text';

// Marca error ya que solo le podemos asignar los valores establecidos
// resultCombine = 'hola';

resultCombine = 'as-number';
console.log(resultCombine);

// Type Aliases
// Es usado para crear un alias a un union Types, en otras palabras para crear un
// type personalizado
type CustomType = number | string;
let testCustomType: CustomType;

testCustomType = 'hola mundo';
console.log(testCustomType);
testCustomType = 23;
console.log(testCustomType);
// Marca error al quere asignar un valor que no sea numeric o string
// testCustomType = false;

// Tambien se puede utilizar con los Literal Types
type customDescription = 'as-number' | 'as-text';
let testCustomDescription: customDescription;
// testCustomDescription = 'hoila'; error
testCustomDescription= 'as-number';