const { INCREMENTO, DECREMENTO } = require('../action-types');//importo los tipos de acciones

const initialState = {
  contador: 0,//el estado inicial es un objeto que puede tener varias keys
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function rootReducer(state = initialState, action) {//este sería la función que va a manejar el estado
  switch(action.type){
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + action.payload
      }
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - action.payload
      }
    default:
      return state // siempre por convención tiene que tener un caso por defecto que devuelva el estado 
  }
}

module.exports = rootReducer;