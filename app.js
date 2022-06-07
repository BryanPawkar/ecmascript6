import {imprimirFrase} from './funciones.js'; 

const boton = document.getElementById("bts"); 
const contenedor = document.getElementById("contenedor"); 

boton.addEventListener('click', ()=>{
    imprimirFrase(contenedor); 
}); 