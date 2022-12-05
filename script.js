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
const deleteBtn = document.querySelector('#delete');;
const dotBtn = document.querySelector('#dot');



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
        //si en vez de = picas otro operador con a + b se haga la operacion y llame a con ese operador
btnOperator.forEach(button =>{ // falta que si picas otro operador se cambie, ej a + > a *
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



clearBtn.addEventListener('click', allClear)

equalBtn.addEventListener('click', callOperation)

deleteBtn.addEventListener('click', deleteOneNumber)





function deleteOneNumber (){ // sigue el anterior valor como a, no el modificado
    temporal.textContent = temporal.textContent.toString().slice(0, -1);
   
}
function allClear (){
    temporal.textContent ='';
    operations.textContent = '';
    operator = ''
    a = 0;
    b = 0;
}
function callOperation (){
    operations.textContent = `${a} ${operator} ${b} =`;
    temporal.textContent = `${(operate (a, operator, b))}`;
    a = temporal.textContent;
}

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