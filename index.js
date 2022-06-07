function newFunction(name, age, country){
    var name = name || "Braco"; 
    var age = age || 23; 
    var country = country || "Ecuador"; 
    console.log(name, age, country);
};
newFunction(); 
//es6
function newFunction2(name = "Braco", age= 23, country = "Ecuador"){
    console.log(name, age, country); 
}
newFunction2(); 

//template literals

let frase = "hola"; 
let frase1 = "mundo"; 
let fraseFinal = frase + ' ' + frase1; 
console.log(fraseFinal); 

//es6

let fraseFinal2 = `${frase1} ${frase}`;
console.log(fraseFinal2);  

//lorem 
let lorem = "when i was a young boy\n my father took me into the city to see a marching band";
console.log(lorem); 

//es6
let lorem1 = `When i was a young boy
my father took me into the city`; 
console.log(lorem1); 

//object destructured

let persona = {
    nombre: "Braco", 
    age: 23, 
    country: "Ecuador",
};
console.log(persona.age, persona.nombre, persona.country);
 //es6

 let {nombre, age, country} = persona; 
 console.log(nombre, age, country); 

 //concatenar arrays

 let team1 = ["Braco", "Juan", "Pedro"];
 let team2 = ["Maria", "Julia", "Arianna"];  
 let amigos = ["Daniel", ...team1, ...team2];
 console.log(amigos);  

 //asignación directa

 let supp1 = "Bran"; 
 let mid = "Irelia"; 
 let equipo1 = {supp1: supp1, mid : mid}; 
 //es6
let  equipo = {supp1, mid}; 
 console.log(equipo); 
 
 //arrow functions
let listaDePersonas = persona.map( function(item){
    console.log(item.nombre); 
});
//es6
let listaDePersonas1 = persona.map(item => console.log(item.nombre));  
 const listaDeNombres3 = (nombre, año, fecha, otros) =>{
     //función
 }; 
 const listaDePersonas5 = apellido =>{
     //función
 }; 

 const multiplicacion = num >= num*num; 

 //Promesas

 const primeraPromesa = () =>{
    return new Promise((resolve, reject) =>{
        if(false){
            resolve("Todo bien!"); 
        }else{
            reject("Nah no vale!")
        }
    })
 }; 

 primeraPromesa()
 .then(response => console.log(response))
 .then(()=> console.log("si funciono"))
 .catch(error => console.log(error));  

 //clases
class calculadora{
    constructor(){
        this.valueA = 0; 
        this.valueB = 0; 
    }

    suma(valueA, valueB){
        this.valueA = valueA; 
        this.valueB = valueB; 
        return valueA + valueB; 
    }
    resta(valueA, valueB){
        this.valueA = valueA; 
        this.valueB = valueB; 
        return valueA - valueB; 
    }
    multiplicacion(valueA, valueB){
        this.valueA = valueA; 
        this.valueB = valueB; 
        return valueA * valueB; 
    }
    division(valueA, valueB){
        this.valueA = valueA; 
        this.valueB = valueB; 
        return valueA / valueB; 
    }
}

const calcular = new calculadora(); 
console.log(calcular.suma(4,5)); 
console.log(calcular.resta(4,5)); 
console.log(calcular.multiplicacion(4,5)); 
console.log(calcular.division(4,5)); 

import {saludar} from './module.js'; 

saludar(); 