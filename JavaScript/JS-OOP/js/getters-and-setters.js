function Circle( radius ){
    // Private property
    let defaultLocation = {
        x:0,
        y:0
    };
    // Expose the private property
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }

    // Another way
    Object.defineProperty(this, 'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function( location ){
            // Validation
            if(!location.x || !location.y)
            throw new Error('Invalid Location');
            defaultLocation = location;
        }
    });
}

const circle = new Circle( 10 );
console.log(circle.getDefaultLocation());
// Set a new value
circle.defaultLocation ={x:10,y:10};
// Get the value
console.log(circle.defaultLocation);