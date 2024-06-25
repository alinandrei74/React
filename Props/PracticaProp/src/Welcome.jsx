import React from "react";
import { Age } from "./Age";
export function Welcome({ name = 'World' , age}) {
	return (
	<div>
	<p>Hello, {name}!</p>
	<p>Your age is {age}</p>
	</div>
);
}
