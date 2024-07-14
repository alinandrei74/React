import React, {useState, useRef, useEffect} from "react";


const Counter = ({initialValue = 0}) => {
//estado para manejar el valor actual del contador
// initialValue para el valor inicial, que por defecto es 0
const [count, setCount] = useState(initialValue);

//Ref para almacenar la dirección del cambio
//porque no es necesario que el componente se randerice de nuevo

const directionRef = useRef(null);
//Ref para almacenar la dirección del cambio
const prevDirectionRef = useRef(null);

//Determinar la direción del cambio comparando count con initialValue

useEffect(() => {
    if (count > initialValue) {
        directionRef.current = "up";
      } else if (count < initialValue) {
        directionRef.current = "down";
      } else {
        // Si count es igual a initialValue, no hay dirección (null)
        directionRef.current = null;
    }
}, [count, initialValue]); //se ejecuta cuando el contador o el valor inicial cambian

//Función para incrementar el contador

const increment = () => setCount(c => c + 1);

//Función para decrementar el contador

const decrement = () => setCount(c => c - 1);



return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;