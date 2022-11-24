const numberBtn = document.querySelectorAll('button')
numberBtn.forEach(button =>{
    button.addEventListener('click', ()=>  console.log(button.textContent))
})





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