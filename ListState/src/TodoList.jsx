import { TodoItem } from "./TodoItem"
// Este componente representa un ítem de la lista de todos, recibe props para su estado y funciones.
//Randeriza la lista completa de quehaceres
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}