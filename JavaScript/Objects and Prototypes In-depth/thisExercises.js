
// // Question 1
// const object = {
//     message: 'Hello, World!',
//     getMessage() {
//       const message = 'Hello, Earth!';
//       return this.message;
//     }
//   };
//   console.log(object.getMessage()); // What is logged?

// //   Question 2
//   function Pet(name) {
//     this.name = name;
//     this.getName = () => this.name;
//   }
//   const cat = new Pet('Fluffy');
//   console.log(cat.getName()); // What is logged?
//   const { getName } = cat;
//   console.log(getName());     // What is logged?


//   Question 3: Delayed greeting
//   const object = {
//     message: 'Hello, World!',
//     logMessage() {
//       console.log(this.message); // What is logged?
//     }
//   };

//   setTimeout(object.logMessage, 1000); Imprime undefined
// Esto pasa porque despues de un segundo el contexto se cambia al contexto global
// y despues de se ejecuta solo la funcion, se pierde la referencia del objeto

// Se arregla de la siguiente manera
// Pasandole el contexto con el que se debe ejecutar
//   setTimeout(object.logMessage.call(object), 1000);
//   setTimeout(object.logMessage.bind(object), 1000);
//   O metiendolo dentro de otra funcion, que al pasar el segundo
// ejecute la funcion
//   setTimeout(() => object.logMessage(), 1000);

//   Question 4: Artificial method
// How can you call logMessage function so that it logs "Hello, World!"?
// const object = {
//     message: 'Hello, World!'
//   };
//   function logMessage() {
//     console.log(this.message); // "Hello, World!"
//   }

//   my way
//   object.__proto__.logMessage = logMessage;
//   object.logMessage();
// Another way
// Using func.call() method
// logMessage.call(object);
// Using func.apply() method
// logMessage.apply(object);
// Creating a bound function
// const boundLogMessage = logMessage.bind(object);
// boundLogMessage();

// Question 5: Greeting and farewell

// const object = {
//     who: 'World',
//     greet() {
//       return `Hello, ${this.who}!`;
//     },
//     farewell: () => {
//       return `Goodbye, ${this.who}!`;
//     }
//   };
//   console.log(object.greet());    // What is logged?
//   console.log(object.farewell()); // What is logged?

// Question 6: Tricky length
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);
