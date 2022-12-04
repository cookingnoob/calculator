let a = '';
let b = '';
let operator = '';

//display selectors
const display = document.querySelector('#display');
const temporal = document.querySelector('.lowerDisplay');
const operations = document.querySelector('.upperDisplay');
//boton selectors
const numberBtn = document.querySelectorAll('.num')
const btnOperator = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');


clearBtn.addEventListener('click', () => {
    temporal.textContent ='';
    operations.textContent = '';
})

numberBtn.forEach(button =>{
    button.addEventListener('click', ()=>  {    //the number on display will go to a or b variable
        temporal.textContent += button.textContent;
        if (operations.textContent === '') { 
        a = temporal.textContent;
        } else {
            b = temporal.textContent;
        }
    });
})

btnOperator.forEach(button =>{
    button.addEventListener('click', ()=>{  
        operator = button.textContent;
        if (operations.textContent.includes('=')){
            operations.textContent = '';
            temporal.textContent = a;
        } 
        operations.textContent += `${a} ${operator}`;
        temporal.textContent = '';
    })
})

equalBtn.addEventListener('click', callOperation)


function callOperation (){
    operations.textContent = `${a} ${operator} ${b} =`;
    temporal.textContent = `${(operate (a, operator, b))}`;
    a = temporal.textContent;
}










//esto es las funciones de operaciones
function operate (a, operator, b){
    a = Number(a);
    b = Number(b)
    if (operator === '+'){
        return add(a, b);
    } else if (operator === '-'){
        return substract(a, b);
    } else if (operator === '*'){
        return multiply(a, b);
    } else if (operator === '/'){
        return divide(a, b);
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