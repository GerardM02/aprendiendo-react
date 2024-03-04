// Importa la constante WINNER_COMBOS desde el módulo de constantes
import { WINNER_COMBOS } from "../constants/constants"

// Función para verificar si hay un ganador en el tablero
export const checkWinnerFrom = (boardToCheck) => {
    // Itera sobre cada combinación ganadora definida en WINNER_COMBOS
    for (const combo of WINNER_COMBOS) {
        // Desestructura la combinación en tres posiciones del tablero
        const [a, b, c] = combo
        // Verifica si las tres posiciones están marcadas por el mismo jugador
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            // Devuelve el símbolo del jugador que ha ganado
            return boardToCheck[a]
        }
    }
    // Si no hay un ganador en ninguna de las combinaciones, devuelve null
    return null
}

// Función para verificar si el juego ha llegado a su fin (empate)
export const checkEndGame = (boardToCheck) => {
    // Devuelve true si no hay casillas vacías en el tablero
    return !boardToCheck.includes(null)
}
