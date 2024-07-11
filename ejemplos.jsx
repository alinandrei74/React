import React, { useState } from 'react';

// Componente principal ListaTareas
// Este componente maneja la lógica y la interfaz de usuario para una lista de tareas simple
const ListaTareas = () => {
  // Estado para almacenar las tareas
  // useState es un hook de React que nos permite añadir estado a componentes funcionales
  // Inicializamos con un array de objetos, cada uno representando una tarea
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Hacer la compra', completada: false },
    { id: 2, texto: 'Estudiar React', completada: false },
    { id: 3, texto: 'Hacer ejercicio', completada: false },
  ]);

  // Estado para manejar la entrada de nueva tarea
  // Este estado se actualiza cada vez que el usuario escribe en el input
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para alternar el estado de completada de una tarea
  // Esta función se llama cuando el usuario hace clic en una tarea
  const toggleCompletada = (id) => {
    // Usamos setTareas para actualizar el estado de las tareas
    // map crea un nuevo array, lo que es importante para la inmutabilidad en React
    setTareas(tareas.map(tarea => 
      // Si la tarea tiene el id que buscamos, cambiamos su estado de completada
      // Usamos el operador spread (...) para crear una copia de la tarea
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  // Función para agregar una nueva tarea
  // Esta función se llama cuando se envía el formulario
  const agregarTarea = (e) => {
    // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();
    // Verificamos que la nueva tarea no esté vacía (ignorando espacios en blanco)
    if (nuevaTarea.trim()) {
      // Añadimos la nueva tarea al array de tareas
      // Usamos el spread operator (...) para crear un nuevo array con todas las tareas existentes
      // más la nueva tarea
      setTareas([...tareas, { 
        id: Date.now(), // Usamos la fecha actual como id único
        texto: nuevaTarea, 
        completada: false 
      }]);
      // Limpiamos el input después de agregar la tarea
      setNuevaTarea('');
    }
  };

  // El componente renderiza un formulario para añadir tareas y una lista de tareas existentes
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      {/* Formulario para añadir nuevas tareas */}
      <form onSubmit={agregarTarea} className="mb-4">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Agregar Tarea
        </button>
      </form>
      {/* Lista de tareas */}
      <ul>
        {/* Mapeamos el array de tareas para crear elementos de lista */}
        {tareas.map(tarea => (
          <li
            key={tarea.id}
            onClick={() => toggleCompletada(tarea.id)}
            className={`cursor-pointer p-2 mb-2 ${tarea.completada ? 'line-through text-gray-500 bg-gray-100' : 'bg-gray-200'} rounded`}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;