const { INCREMENTO, DECREMENTO } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = (num) => { //incremento  va a recibir en este caso un numero
  return {
    type: INCREMENTO,//TIENE QUE ESTAR CONFIGURADAS EN ACTION TYPES
    payload: num, //lo que quiero modificar. Por convencion lleva el nombre payload pero se puede llamar de otra manera
  }
}
const decremento = (num) => { //decremento  va a recibir en este caso un numero
  return {
    type: DECREMENTO,
    payload: num, //lo que quiero modificar. Por convencion lleva el nombre payload pero se puede llamar de otra manera
  }
}



module.exports = {
  incremento,
  decremento
}