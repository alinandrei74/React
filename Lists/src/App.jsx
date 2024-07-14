import React from 'react';
import Colors from "./components/Langosta" 
//se llamaba colors el archivo, pero por alguna razón el nombre me daba error y puse la palabra que sea

const App = () => {
  //array con objetos de colores, cada objeto tiene ID y name
  const colorArray = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Blue' },
    { id: 3, name: 'Green' }
  ];

  return (
    <div>
      <h1>My Colors</h1>
      <Colors colors={colorArray} />
    </div>
  );
};

export default App;