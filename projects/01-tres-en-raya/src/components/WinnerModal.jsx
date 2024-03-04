// Importa el componente Square desde su módulo
import { Square } from "./Square"

// Define el componente WinnerModal como una función que recibe los props winner y resetGame
export function WinnerModal ({winner, resetGame}) {
    // Si no hay un ganador (null), no se muestra el modal
    if (winner === null) return null
    // Determina el texto a mostrar dependiendo de si hay un ganador o un empate
    const winnerText = winner === false ? 'Empate' : 'Ganó: '
    // Devuelve el JSX del modal
    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                {/* Si hay un ganador, muestra el símbolo del ganador usando el componente Square */}
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                {/* Botón para reiniciar el juego */}
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}
