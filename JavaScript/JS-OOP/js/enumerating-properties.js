// Min 41:00
function Circle( radius ){
    this.radius = radius;
    this.draw = function(){
        console.log(this.radius)
    }
}

const circle = new Circle(10);

// Recorrer un objeto
for (const key in circle) {
    if (Object.hasOwnProperty.call(circle, key)) {
        const element = circle[key];
        console.log(element)
    }
}

// Otra manera
// Obtener las keys de las propiedades del objeto
const keys = Object.keys(circle);
keys.forEach(key => { 
    console.log(circle[key])
});

// Check if exist a property in an Object
if('radius' in circle)
console.log('Circle has a radius')