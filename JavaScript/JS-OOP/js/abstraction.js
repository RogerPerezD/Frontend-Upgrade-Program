// Min 44
// Abstraction: Hide the details and only show then essentials
function Circle( radius ){
    this.radius = radius;
    this.defaultLocation = {
        x:0,
        y:0
    };
    this.computeOptimumLocation = function(){
        console.log('Compute')
    };
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw')
    }
}

// Apply abstraction
function Circle2( radius ){
    let computeOptimumLocation = function(){
        console.log('Compute2')
    };
    this.radius = radius;
    this.defaultLocation = {
        x:0,
        y:0
    };
    this.draw = function(){
        computeOptimumLocation();
        console.log('draw2')
    }
}

const circle = new Circle2(10);

circle.draw();