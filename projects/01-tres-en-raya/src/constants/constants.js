// Define un objeto TURNS que representa los símbolos para los jugadores X y O
export const TURNS = {
  X: '✖', // Símbolo para el jugador X
  O: '○'  // Símbolo para el jugador O
}

// Define una matriz WINNER_COMBOS que contiene todas las combinaciones posibles para ganar en el juego de tres en raya
export const WINNER_COMBOS = [
  [0, 1, 2], // Combinaciones de ganador en las filas
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Combinaciones de ganador en las columnas
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Combinaciones de ganador en diagonales
  [2, 4, 6]
]
