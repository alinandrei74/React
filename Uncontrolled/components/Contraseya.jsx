//importar el userstate
//definir los estados para los campos del formulario
//función a ejecutar cuando se envía el formulario
//actúa en caso de error
//imprime los valores por consola

//campos del usuario
import React, { useState } from "react";


const Contraseya = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember:', remember);
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Nombre de usuario</label>
            <input 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Contraseña: </label>
            <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <label>
            <input 
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}/>
            </label>
        </div>



        <button type="submit">Iniciar sesión</button>
    </form>

)

}

export default Contraseya;