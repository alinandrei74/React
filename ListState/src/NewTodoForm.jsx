import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  // Estado para manejar el nuevo ítem
  const [newItem, setNewItem] = useState("")

  // Función para manejar el envío del formulario
  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return // No hace nada si el ítem está vacío

    onSubmit(newItem) // Llama a la función pasada como prop con el nuevo ítem

    setNewItem("") // Limpia el input
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}