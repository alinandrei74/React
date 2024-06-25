export function AlertClock() {
    function handleButtonClick() {
        const now = new Date()

        alert(`La hora local es ${now.toLocaleString()}`)
    }

    return (
        <div>
            <p>Aprieta el botón para ver la hora local</p>
            <button onClick={handleButtonClick}>Click me!</button>
        </div>
    )
}