
function Employee( name ){
    this.name = name;
}

Employee.prototype.getName = function(){return this.name};

const mike = new Employee('Mike');

console.log(mike.getName());

function Manager( deparment ) {
    // this.name = name;
    this.deparment = deparment;
}

Manager.prototype.getDepartment = function(){ return this.deparment}

const mngr = new Manager('Sales');
// Hacemos que el __prot__ de nuestro prototype apunte al prototype
// de empleado en lugar de a Object, asi creamos la herencia
mngr.__proto__.__proto__ = Employee.prototype;

console.log(mngr.getDepartment());
console.log(mngr.getName.call(mike));