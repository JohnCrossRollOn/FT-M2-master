export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = (n) => {
  return {
    type: "INCREMENT",
    payload: n
  }
  // Completa la funcion
};

export const decrement = (n) => {
  return {
    type: "DECREMENT",
    payload: n
  }
  // Completa la funcion
};