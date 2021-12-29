function foo() {
    console.log("Hello")
    // console.log(this) imprime el objeto global window, que es donde se esta llamando la funcion
}

foo();//Method #1 as a normal function

const obj = {
    name : "Roger"
};

obj.foo = function () {
    console.log("Hello")
    // console.log(this) imprime el Object obj, ya que es desde donde se manda a llamar
}

obj.foo();//Method #2 as a property of an object

new foo(); //Method #3 as a constructor

// Method #4

this.foo();

// this, es el contexto desde donde es llamada la funcion

