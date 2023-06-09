/* Basado en lo que se hizo en clase, donde se ingresa un arreglo de datos, un nuevo elemento y posición, deberás 
ingresar un elemento a un arreglo en cualquier posición, la práctica la deberás subir como una rama adicional en tu repositorio*/

let arr = [1, 2, 3, 4, 5];
let elemento = 6;
let posicion = 2;
arr.splice(posicion, 0, elemento);

console.log(arr);
/* Fin del codigo */