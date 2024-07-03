import React from "react";
import { Counter } from "./Counter.jsx";
import { Clock } from "./Clock.jsx";

function App() {
    return (
        <div>
            <header>
                <h1>Contador</h1>
                <Counter initialValue={0} incrementBy={1}/>
                <Clock/>
            </header>
        </div>
    );
}

export default App;