import { useState } from 'react'

export function Counter({ initialValue = 0, incrementBy = 1 }) {
	const [counter, setCounter] = useState(initialValue)

	function handleIncrement() {
		setCounter((c) => c + incrementBy);
	}

    function handleDecrement(){
        setCounter((c) => c - incrementBy);
    }

    function handleReset() {
        setCounter(initialValue); 
    }


	return (
		<div>
			<h2>Counter: {counter}</h2>
			<button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
		</div>
	)
}


// An **immediate value** when the next state does NOT depend on the previous state.
// A **function** when the next state depends on the previous state.