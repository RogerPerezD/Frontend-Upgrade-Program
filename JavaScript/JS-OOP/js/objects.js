// Literal Object
const circle = {
    radius: 10,
    diameter:5,
    draw: function(){
        console.log(this.radius);
    }
}
circle.draw();

//Factory Function
function createCircle( radius ){
    return {
        radius,
        draw: function(){
            console.log(this.radius);
        }
    }
}
const circleObj1 = createCircle(20);
circleObj1.draw();

//Constructor Function
function Circle( radius ){
    // Js crea un objeto vacio de la siguiente forma
    // const this = {}
    this.radius = radius;
    this.draw = function(){
        console.log(this.radius)
    }
    // Y lo retorna en automatico
    // return this;
}
// Para tener este compartamiento es importante
// que mandemos a llamar a esta funcion con la palabra reservada new
const circleObj2 = new Circle(30);
circleObj2.draw();

// 23. Constructor
// Refiere a la funcion que se uso para crear un objeto

console.log(circleObj1.constructor)
// Imprime esto
// ƒ Object() { [native code] }, ya que al ser un factory function,
// y retornar el objeto explicitamente el objeto es creado por
// el objeto global Object 

console.log(circleObj2.constructor)
// Imprime esto:
// ƒ Circle( radius ){
//     this.radius = radius;
//     this.draw = function(){
//         console.log(this.radius)
//     }
// Ya que al ser un constructor hace referencia a la funcion donde se creo
// el objeto, en este caso dentro de Circle

