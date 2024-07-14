import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {

  
  const [todos, setTodos] = useState([])
  
  function addTodo(title) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    )
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Lista de quehaceres</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}