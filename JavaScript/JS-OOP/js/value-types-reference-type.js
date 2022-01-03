// Min 31:00

// Adding/removing properties

function Circle( radius ){
    this.radius = radius;
    this.draw = function(){
        console.log(this.radius)
    }
}

const circle = new Circle(10);

// Add property
circle.location = { x:1};
circle['diamer'] = 25;
console.log(circle)
// Dinamic
const dinamicProperty = 'color';
circle[dinamicProperty]= 'blue';
console.log(circle.color)

// Removing property
delete circle.location;
console.log(circle)