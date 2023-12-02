const { createStore } = require("redux");
const rootReducer = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
let store = createStore(rootReducer)

// Obtenemos el elemento con el id `valor`.
let valor = document.querySelector('#valor ')

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  let { contador }  = store.getState()//este método me trae la variable contador del estado , si necesito cambiar otros estados acá los traigo 
  valor.innerHTML = contador //y acá actualizo lo que muestra la pagina a lo que dice  el contador que traje del estado a 
}

// Ejecutamos la función 'renderContador':
renderContador()

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador)

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
//acá le voy a agregar a los botones de la página las funciones para que hagan cuando toquen los botones
 
let suma = document.querySelector('#incremento')
let resta = document.querySelector('#decremento')

suma.addEventListener("click", () => store.dispatch(incremento(1)))//el método dispatch  es de redux que ejecuta la acción
resta.addEventListener("click", () => store.dispatch(decremento(1)))