
// Create object in a traditional way
const emp1 = {};

emp1.firstName = 'Rogelio';
emp1.lastName = 'Perez';
emp1.gender = 'Male';
emp1.designation = 'Developer';

// Create object whit methods
function createEmployeeObject( firstName, lastName, gender, designation){
    const newObject = {}; 
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject;
}

const emp2 = createEmployeeObject('Mike', 'Archundia', 'Male', 'Manager');

console.log(emp1);
console.log(emp2)