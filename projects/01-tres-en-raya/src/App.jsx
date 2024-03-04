// Importación de los hooks useState y la función confetti desde sus respectivos módulos
import { useState } from "react"
import confetti from "canvas-confetti"

// Importación del componente Square, del componente WinnerModal, las constantes de turnos y las funciones de lógica del tablero
import { Square } from "./components/Square"
import { WinnerModal } from "./components/WinnerModal"
import { TURNS } from "./constants/constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"

function App() {
  // Definición de los estados del juego: tablero, turno y ganador
  const [board, setBoard] = useState(() => {
    // Se intenta obtener el tablero almacenado en el localStorage del navegador.
    const boardFromStorage = window.localStorage.getItem('board')
    // Si se encuentra un tablero en el localStorage, se convierte de JSON a objeto de JavaScript.
    // De lo contrario, se crea un nuevo tablero con 9 espacios vacíos.
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    // Se intenta obtener el turno almacenado en el localStorage del navegador.
    const turnFromStorage = window.localStorage.getItem('turn');
    // Si se encuentra un turno en el localStorage, se devuelve.
    // De lo contrario, se establece el turno inicial como 'TURNS.X'.
    return turnFromStorage ?? TURNS.X;
  })
  const [winner, setWinner] = useState(null) // Null = no hay ganador, false = empate

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    // Elimina los datos almacenados del tablero y el turno del localStorage.
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  // Función para actualizar el tablero después de cada jugada
  const updateBoard = (index) => {
    // Verifica si la casilla ya está marcada o si ya hay un ganador
    if (board[index] || winner) return
    // Crea una copia del tablero actual
    const newBoard = [...board]
    // Actualiza la casilla marcada con el símbolo del turno actual
    newBoard[index] = turn
    // Actualiza el tablero con la nueva jugada
    setBoard(newBoard)
    // Cambia el turno al siguiente jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar partida
    // Se almacena el nuevo estado del tablero como un objeto JSON y el turno actual en el localStorage.
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    // Comprueba si hay un ganador después de la jugada
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      // Dispara efectos de confeti si hay un ganador
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      // Si no hay ganador pero el juego ha terminado, establece el estado del ganador como empate
      setWinner(false)
    }
  }

  // Devuelve la estructura JSX del juego
  return (
    <main className='board'>
      <h1>TRES EN RAYA</h1>
      <section className="game">
        {
          // Mapea cada casilla del tablero para renderizar el componente Square
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      {/* Sección que muestra el turno actual */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {/* Botón para reiniciar el juego */}
      <button onClick={resetGame}>Reset</button>
      {/* Modal que muestra el ganador */}
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
