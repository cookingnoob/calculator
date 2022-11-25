const display = document.querySelector('#display');
const temporal = document.querySelector('.temporal')
const operations = document.querySelector('.operations')


const numberBtn = document.querySelectorAll('button')
numberBtn.forEach(button =>{
    button.addEventListener('click', ()=>  temporal.textContent += button.textContent)
})
//necesito que mande el valor a una variable y la guarde
//se siguen agregando numeros en la variable hasta que picas un operador
//sigue 'escribiendo'
// toma el operator que definira que hace la funcion operate
//repites la funcion de captura de numeros hasta que picas igual
//igual ejecuta la funcion operate


function operate (operator, a, b){
    if (operator === '+'){
        return add(a, b);
    } else if (operator === '-'){
        return substract(a, b)
    } else if (operator === '*'){
        return multiply(a, b)
    } else if (operator === '/'){
        return divide(a, b)
    };
}


function add(a, b){
    return a + b;
}
function substract (a, b){
    return a - b;
}
function multiply (a, b){
    return a * b;
}       
function divide (a, b){
    return b <= 0 ? 'ERROR' : a/b;
}