import React from "react";
import { Welcome } from "./Welcome";

export function App() {
        //segundo prop, el segundo componente está importado para ver qué sucede
    return (
        <div>
             <Welcome name="Pepeantonio" age="16"/> 
            <Welcome/>
        </div>
    );
}