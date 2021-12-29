function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function (){
        this.tirePressure += 10;
    }
}

// Poniendo una  propiedad al obejto prototype que comparten todos los objetos
// de esta instancia
Bicycle.prototype.test = 'This is a test';

const bicycle1 = new Bicycle( 50, 20, 4, 25 );
const bicycle2 = new Bicycle( 10, 30, 6, 34 );
// Cuando se crea un obejto con la palabra new, lo que hace js
// implicitamente es crear dos objetos, el objeto en si mismos
// y otro llamado __proto__ que tiene como referencia el objeto prototype

// Asi que para acceder a una propiedad del prototype se haria de la siguiente manera
// Indicandole explicitamente
console.log(bicycle1.__proto__.test)
// O implicitamente, va y busca la propiedad en el objeto
// Si no la encuentra, la va a buscar al obejto prototype y la retorna
console.log(bicycle2.test)


function Employee(name, lastName){
    this.name = name;
    this.lastName = lastName;
}

Employee.prototype.getFullName = function(){return `My name is ${this.name} ${this.lastName}`};

const roger = new Employee('Roger', 'Perez');
const mike = new Employee('Mike', 'Valensi');

console.log(roger.getFullName());
console.log(mike.getFullName());

// Obtener la funcion o constructor que creo el objeto
console.log(roger.__proto__.constructor)

// Un objeto y su prototype estan conectados doblemente
// Teniendo el objeto puedes acceder al prototype de la siguiente manera: obj.__proto__
// Teniendo el prototype puedes hacer referencia a la funcion: __proto__.constructor

// Crazy thing
const employeeFromProto = new mike.__proto__.constructor('Raul', 'Lopez');

console.log(employeeFromProto);

