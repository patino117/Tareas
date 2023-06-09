/*En esta ocasión deberás realizar una aplicación en JS para resolver una ecuación de segundo grado usando la formula general.  
Deberás ingresar los tres valores a, b y c y devolver las soluciones de las misma x1 y x2.
Para esto debes escribir una función que reciba como argumentos los valores de a, b y c y devuelva, si existen, los dos valores 
al mismo tiempo. Presentarás tu práctica en una rama adicional en tu repositorio de github.*/

function resolverEcuacionSegundoGrado(a, b, c) {
  const discriminante = b * b - 4 * a * c;

  if (discriminante < 0) {
    return null; // No hay soluciones reales
  } else if (discriminante === 0) {
    const x = -b / (2 * a);
    return [x]; // Solo hay una solución
  } else {
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    return [x1, x2]; // Hay dos soluciones
  }
}

// Ejemplo de uso
const a = parseFloat(prompt('Ingrese el valor de a:'));
const b = parseFloat(prompt('Ingrese el valor de b:'));
const c = parseFloat(prompt('Ingrese el valor de c:'));

const soluciones = resolverEcuacionSegundoGrado(a, b, c);

if (soluciones === null) {
  console.log('La ecuación no tiene soluciones reales.');
} else if (soluciones.length === 1) {
  console.log('La ecuación tiene una solución: x = ' + soluciones[0]);
} else {
  console.log('La ecuación tiene dos soluciones: x1 = ' + soluciones[0] + ', x2 = ' + soluciones[1]);
}
