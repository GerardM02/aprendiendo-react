// Define el componente Square como una función que recibe ciertos props: children, isSelected, updateBoard y index
export const Square = ({ children, isSelected, updateBoard, index }) => {
  // Determina la clase CSS del cuadrado basada en si está seleccionado o no
  const className = `square ${isSelected ? 'is-selected' : ''}`

  // Función para manejar el clic en el cuadrado, que llama a la función updateBoard pasándole el índice del cuadrado
  const handleClick = () => {
    updateBoard(index)
  }
  
  // Devuelve el JSX que representa el cuadrado, con el manejo del clic y la clase determinada
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
