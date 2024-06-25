import { Hello } from "./Hello";
import { Message } from "./Message";

export function App() {
    return (    //Al poner varias veces el componente Hello se randeriza consigo
                //El componente Message, ya que lo incluye consigo, al poner varias
                //veces el componente Message se randeriza él solo, ya que no contiene nada más
                
            <div>
			<Hello />
            <Hello />
            <Hello />
            <Hello />
            <Hello />
            <Message/>

            <Message/>  
		</div>
    );
}