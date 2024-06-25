import React from "react";
import "./App.css";
import { AlertClock } from "./AlertClock";

function App() {
  return (
    <div>
      <header>
        <h1>Notificación de alarma</h1>
        <AlertClock/>
      </header>
    </div>
  )
}

export default App;