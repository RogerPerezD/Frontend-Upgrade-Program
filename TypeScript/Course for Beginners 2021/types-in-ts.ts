// const person : {
//     name: string;
//     age: number
// } 

enum Role{ ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Rogelio',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// Arrays
let favoriteActivities: string[];
favoriteActivities = ['sports'];

// Tuples
// Crea arrays de un size static
let role: [number, string] = [2, 'author'];

// Al intentar asignarle un numero marca error, ya que deberia ser un string
// role[1] = 10;

// Al intentar poner mas de dos elementos marca error
// role = [3, 'admin',2];

// Con push no marca error porque es una exepcion a la regla
// role.push('admin');

// Enum
// Crea un arreglo en el cual a cada cosa que se le ponga,
// Se le asignara el valor del indice en donde se encuentre
// practicamanente le asigna labels a numeros
// enum Role{ ADMIN, READ_ONLY, AUTHOR};
// seria ADMIN = 0, READ_ONLY = 1, AUTHOr = 2
// Si quieres settear un numero en donde empezar es con la siguiente nomenclatura
// enum Role{ ADMIN = 5, READ_ONLY, AUTHOR};
if (person.role === Role.ADMIN) {
    // console.log(Role.ADMIN)
    console.log('is an admin')
}


console.log(role);

console.log(person)