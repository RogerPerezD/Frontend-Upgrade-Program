function foo() {
    console.log("Hello")
}

foo();//Method #1 as a normal function

const obj = {};

obj.foo = function () {
    console.log("Hello")
}

obj.foo();//Method #2 as a property of an object

new foo(); //Method #3 as a constructor

