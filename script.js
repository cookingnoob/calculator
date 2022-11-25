let a = '';
let b = '';
let operator = '';

const display = document.querySelector('#display');
const temporal = document.querySelector('.temporal');
const operations = document.querySelector('.operations');
const numberBtn = document.querySelectorAll('.num')
const btnOperator = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal')


numberBtn.forEach(button =>{
    button.addEventListener('click', ()=>  temporal.textContent += button.textContent);
})


btnOperator.forEach (operation => {
    operation.addEventListener('click', ()=> {
       a = temporal.textContent;
       operator = operation.textContent;
       operations.textContent += `${a}  ${operator}`;
       temporal.textcontent = ''
    })
})








function operate (operator, a, b){
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