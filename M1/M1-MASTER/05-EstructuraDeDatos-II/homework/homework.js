'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class Node {           // Declaramos La Clase Nodo
  constructor(value){  // Creamos el constructor de la clase y recibimos como parametro un value 
    this.value = value // Declaramos la variable value para almacenar los valores
    this.next = null;  // Declaramos la variable next. la cual nos funcionara como puntero
  }
}
class LinkedList {    //Creamos nuesta Lista enlazada como una clase.
  
  constructor(){this.head = null;} // Creamos el constructor de la lista el cual solo tendra la cabeza
  
  add(value) { // creamos el metodo que le agrega nodos a la lista 
    let node = new Node(value); // Instanciamos la clase Nodo en una variable
    let current = this.head; // Creamos una variable temporal donde guardaremos el valor acutal del nodo
    if(!current){ // Comprobamos que nuestra lista no este vacia 
      this.head = node; // En caso tal la lista este vacia, le asignaremos a nuestra head el nodo;
      return node; // retornamos el nodo que agregamos 
    }
    while(current.next !== null){ // recorremos nuestra variable temporal hasta encontrar un puntero = null
      current = current.next; // actualizamos nuestra variable temporal  al siguiente nodo
    }
    current.next = node // actualizamos el puntero de nuestra variable temporal
    return node; // retornamos el nodo que agregamos 
  }
  
  remove() { // creamos el metodo para remover nodos de la lista 
    if (this.head === null){ // si nuestro primer apuntador es igual a null significa que la lista esta vacia
      return null; // retornamos null para informar que la lista esta vacia
    }
    if (this.head.next === null){ // si nuestro apuntador es igual a null significa que removimos el ultimo nodo de la lista
      let temporal = this.head.value; // almacenamos el valor que guardamos en el ultimo nodo que fue removido 
      this.head = null; // al no tener nodos volvemos a inicializar nuestro apuntador en null
      return temporal; // retornamos el valor que almacenamos en la variable temporal 
    }
    
    else { // en caso tal nuestro apuntador no sea null entonces:
      let prev = this.head // crearemos una variable temporal donde almacenaremos la cabeza de nuestra lista
      let current = this.head.next // creamos una variable temporal que almacena el nodo siguiente
      while(current.next !== null){ // Mientras el siguiente del siguiente no sea null entonces:
        prev = current // nuestra variable previa sera igual a nuestra variable temporal que almacenaba el nodo siguiente
        current = current.next; // Nuestra variable temporal tomara el valor del siguiente nodo
      }
      prev.next = null ; // una vez terminado el ciclo romperemos el siguiente nodo del previo igualandolo a null
      return current.value // Retornamos el ultimo valor almacenado en el nodo eliminado
  }
}
 
  search(value) {
    if (this.head === null){return null;}
    let current = this.head
    while(current){
      if (current.value === value){return value;}
      else if (typeof value === 'function'){
        if(value(current.value) === true){
          return current.value;
        }
      }
      current = current.next
    }
    return null ;
  }
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = new Array(this.numBuckets);
  this._length = 0;
}
HashTable.prototype.hash = function(key){
  if(typeof key !== 'string'){
    throw TypeError('necesito recibir un string')
  }
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash+=key.charCodeAt(i);
  }
  return hash % this.numBuckets;
}
HashTable.prototype.set = function(key,value){
  let hashValue = this.hash(key);
  if (this.buckets[hashValue] === undefined){
    this.buckets[hashValue] = {};
  }
    this.buckets[hashValue][key] = value;
}
HashTable.prototype.get = function(key){
  let hashValue = this.hash(key);
  if (this.buckets[hashValue][key] === undefined){
    return undefined;
  }
  return this.buckets[hashValue][key];
}
HashTable.prototype.hasKey = function(key){
  let hashValue = this.hash(key);
  
  if (this.buckets[hashValue][key] === undefined){
    return false;
  }
  return true;
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
