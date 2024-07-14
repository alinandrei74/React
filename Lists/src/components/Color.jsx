import React from 'react';

const Color = ({ color }) => {
  // Añadimos una comprobación para asegurarnos de que color no es undefined
  if (!color) return null; // o podrías devolver un mensaje de error

  return <li>{color.name}</li>;
};

export default Color;