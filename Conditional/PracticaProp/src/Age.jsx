export function Age({ age }) {
	//He puesto los dos ejercicios simultáneamente 
	return <div>
		<p>Your age is {age}</p> 
		<p>{age > 18 ? `Your age is ${age}`: "Es usted demasiado joven"}</p>
		</div>
}
