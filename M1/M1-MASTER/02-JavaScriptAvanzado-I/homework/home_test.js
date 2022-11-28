// # Homework JavaScript Avanzado I

// ## Scope & Hoisting

// Determiná que será impreso en la consola, sin ejecutar el código.

// > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

// ```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   //10
   console.log(a);
   //8
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      //5
      b = c;
      console.log()
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
// ```

// ```javascript
var bar = 1;
baz = 2;
console.log(bar);
console.log(baz);
function foo() {
   console.log('Hola!');
}
foo();

// ```

// ```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
// ```

// ```javascript
var instructor = 'Tony';
console.log(instructor);
function ame () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); 
   }
   return instructor;
};
console.log(ame());
console.log(instructor);
// ```

// ```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
// ```

// ### Coerción de Datos

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

// ```javascript
 console.log(6 / "3") //2
 console.log("2" * "3") //NaN
 console.log(4 + 5 + "px") //9px
 console.log( "$" + 4 + 5) //$9
 console.log ("4" - 2 )//2
 console.log( "4px" - 2) //NaN
 console.log(7 / 0 )//0
 console.log({}[0])
 console.log(parseInt("09")) //09
 console.log(5 && 2) //true
 console.log(2 && 5) //true
 console.log(5 || 0) //true
 console.log(0 || 5) //true
 console.log ([3]+[3]-[10]) //NaN
 console.log(3>2>1) //true
 console.log([] == ![]) // false
// ```

// > Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

// ### Hoisting

// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

// ```javascript
function test() {
   console.log(a);//undefined porque se define despues del console.log
   console.log(foo()); //2 porque por orden de ejecucion al invocar la funcion esta se ejecutara aunque se defina despues

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
// ```

// Y el de este código? :

// ```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
// ```

// ### This

// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

// ```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
// ```

// ### Event loop

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

// ```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
// ```
