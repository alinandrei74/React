import { useState } from "react"
import "./styles.css"

export default function App() {
  // Estado para manejar el nuevo ítem que se está escribiendo
  const [newItem, setNewItem] = useState("")
  
  // Función para manejar el envío del formulario
  function handleSubmit(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Estas líneas intentan actualizar un estado 'todos' que no está definido
    // Esto causará un error
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  }

  return (
    <div className="form-row">
      {/* Formulario para añadir nuevos ítems */}
      <form onSubmit={handleSubmit} className="new-item-form">
        <label htmlFor="item">Nuevo Ítem</label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item"/>
        
        <button className="btn">Add</button>
      </form>
      <h1 className="header">lista de quehaceres</h1>
      {/* Lista de ítems estática */}
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Elemento 1
          </label>
          <button className="btn btn-danger">Eliminar</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Elemento 2
          </label>
          <button className="btn btn-danger">Eliminar</button>
        </li>
      </ul>
    </div>
  )
}