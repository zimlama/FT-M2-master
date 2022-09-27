export const PI = Math.PI;
export let usuario = "Jon";

// cuando quiero exportar default una variable primero debo crearla y despues llamarla
// con const y let no puedo exportar de la misma forma que una funcion
// let password = 'qwerty'
// export default password;

// se ejecuta la funcion automaticamente donde se llama
// solo se puede exportar una sola por default
export default function saludar(){
	console.log("Hola Moduloes +ES6");
}

// export default class Saludar{
// 	constructor(){
// 		console.log("Hola Modulos ES6")
// 	}
// }
