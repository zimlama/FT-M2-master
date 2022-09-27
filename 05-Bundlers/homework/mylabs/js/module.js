import {PI} from "./constantes.js";
import {suma, resta} from "./aritmetica.js";
import {aritmetica} from "./aritmetica.js";
// puedo crear un alias para usarlo con otro nobmre
import {aritmetica as calculos} from "./aritmetica.js";
console.log(calculos.suma(3,4));
//=====================
console.log("Archivos modulos.js");
console.log(PI);

console.log(suma(3,4));
console.log(resta(3,4));
console.log(aritmetica.suma(3,4));
// se exporta automaticamente por que se ejecuta por defualt en el modulo
// no se necesita importar
// saludar();

// como se exporta por default la clase se puede ejecutar de la siguiente forma
// let saludo = new Saludar();
// saludo;
