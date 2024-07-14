import React from 'react';
import Color from './Color';

const Colors = ({ colors }) => {
  //comprobación para asegurar de que colors es un array
  if (!Array.isArray(colors)) return null; //o devolver un mensaje de error

  return (
    <ul>
      {colors.map(color => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
};

export default Colors;