import { useEffect, useState } from 'react'

const FollowMouse = () => {
  // Estado para controlar si está habilitado o no el seguimiento del mouse
  const [enabled, setEnabled] = useState(false)
  // Estado para almacenar la posición del mouse
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Efecto que se ejecuta cuando el componente se monta o cuando el estado de 'enabled' cambia
  useEffect(() => {
    // Función que maneja el movimiento del mouse
    const handleMove = (event) => {
      const { clientX, clientY } = event
      // Actualiza la posición del mouse en el estado
      setPosition({ x: clientX, y: clientY })
    }

    // Si el seguimiento del mouse está habilitado, agrega un event listener para el movimiento del puntero
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Al desmontar el componente, remueve el event listener
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]) // El efecto se ejecuta cada vez que 'enabled' cambia

  // Retorna el JSX del componente
  return (
    <>
      {/* Div que representa el cursor del mouse */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          // La posición del div sigue la posición del mouse
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      {/* Botón para activar/desactivar el seguimiento del mouse */}
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

// Función principal que renderiza el componente FollowMouse
function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
