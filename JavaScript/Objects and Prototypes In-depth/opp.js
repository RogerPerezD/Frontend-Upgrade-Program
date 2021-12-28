
// Create object in a traditional way
const emp1 = {};

emp1.firstName = 'Rogelio';
emp1.lastName = 'Perez';
emp1.gender = 'Male';
emp1.designation = 'Developer';

// Create object whit method
// function createEmployeeObject( firstName, lastName, gender, designation){
//     const newObject = {}; 
//     newObject.firstName = firstName;
//     newObject.lastName = lastName;
//     newObject.gender = gender;
//     newObject.designation = designation;
//     return newObject;
// }

// Create object whit a constructor
// In this case we don need create and return a object, Js make it automatically for us
// and we can refer to the object whit the keywork this
function createEmployeeObject( firstName, lastName, gender, designation){
    // const this = {};  skip these steps
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
    // return this;

}

// Create object whit method
// const emp2 = createEmployeeObject('Mike', 'Archundia', 'Male', 'Manager');

// Create object whit a constructor
// The keyword new, tell JS that it invokes a constructor
const emp2 = new createEmployeeObject('Mike', 'Archundia', 'Male', 'Manager');


console.log(emp1);
console.log(emp2)