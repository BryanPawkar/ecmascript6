const frases = [
    'el que madruga Dios le ayuda',
    'mas vale pajaro en mano que 100 volando', 
    'Dime con quien andas y te diré quien eres', 
    'en casa de herrero cuchillo de palo', 
    'cuando el rio suena piedras trae', 
    'si no me quisiste cuando pudiste no me busques cuando no quiera'
]; 

const imprimirFrase = (elementoDom) =>{
    let frase = frases[Math.floor(Math.random()*5)]; 
    elementoDom.insertAdjacentHTML('beforeend' ,  `<p>"${frase}"</p>`); 
}
export {imprimirFrase}; 