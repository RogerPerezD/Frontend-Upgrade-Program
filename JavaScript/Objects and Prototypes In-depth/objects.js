
function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function (){
        this.tirePressure += 10;
    }
}

const bicycle1 = new Bicycle( 50, 20, 4, 25 );

console.log(bicycle1);
bicycle1.inflateTires();
console.log(bicycle1);

function Mechanic(name) {
    this.name = name;
}

const mike = new Mechanic('Mike');

mike.inflateTires = bicycle1.inflateTires;

// Sirve para pasarle el contexto con el que se debe usar 'this'
// Al momento de llamar a la funcion, recibe como parametro
// un objeto, que en este caso es el contexto
mike.inflateTires.call(bicycle1);

console.log(bicycle1);


