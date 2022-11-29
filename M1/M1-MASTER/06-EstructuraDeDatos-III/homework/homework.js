'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
  */
 class BinarySearchTree {
    constructor(value){
       this.value = value;
       this.right= null;
       this.left = null;
    }
 size(){
      if(!this.left && !this.right){ return 1; }
      if(!this.right){ return 1 + this.left.size()}
      if(!this.left){ return 1 + this.right.size()}
      return this.right.size() + this.left.size() +1;
   }
   insert(value){
      if(value < this.value){ //si el valor recibido es menor que el valor en la raiz entonces:
         if(!this.left){this.left = new BinarySearchTree(value);} //si no tenemos nada a la izq creamos un nuevo arbol 
         else{ this.left.insert(value)} //si existe valor a la izq agrega a la izq el metodo insert
      }
      else{
         if(!this.right){this.right = new BinarySearchTree(value);}  
         else{this.right.insert(value)}
      }
   }
   contains(value){
      if(this.value === value){return true}
      if(value < this.value){
         if(!this.left){return false}
         else{ return this.left.contains(value)}
      }
      else{
         if(!this.right){return false}
         else{ return this.right.contains(value)}
      }
   }
   depthFirstForEach = function(cb,recorrido){
       if(recorrido === 'pre-order'){
         cb(this.value)
         if(this.left){this.left.depthFirstForEach(cb,recorrido)}
         if(this.right){this.right.depthFirstForEach(cb,recorrido)}
       }
       else if(recorrido === 'post-order'){
         if(this.left){this.left.depthFirstForEach(cb,recorrido)}
         if(this.right){this.right.depthFirstForEach(cb,recorrido)}
         cb(this.value)
       }
       else{
         if(this.left){this.left.depthFirstForEach(cb,recorrido)}
         cb(this.value)
         if(this.right){this.right.depthFirstForEach(cb,recorrido)}
       }
      }
   breadthFirstForEach = function(cb,array) {
      if (!array){var array = [] }
      if(this.left){array.push(this.left)}
      if(this.right){array.push(this.right)}
      cb(this.value)
         if(array.length > 0){array.shift().breadthFirstForEach(cb,array)}
   }
}

let prueba = new BinarySearchTree();
prueba.insert(3)
prueba.insert(3)
prueba.insert(3)
prueba.insert(3)
console.log(prueba.size())
console.log(prueba)
console.log(prueba.contains())

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
