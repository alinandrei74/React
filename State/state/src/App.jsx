import React from "react";
import { Counter } from "./counter";


function App() {
    return (
        <div>
            <header>
                <h1>Contador</h1>
                <Counter initialValue={0} incrementBy={1}/>
            </header>
        </div>
    );
}

export default App;