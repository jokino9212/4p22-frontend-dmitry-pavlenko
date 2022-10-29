'use strict';
const buttonFinish = document.getElementById('button-finish');
const resultOut = document.getElementById('result-out');


buttonFinish.addEventListener('click', (event) => {
    event.preventDefault();
    let firstNumber = document.getElementById('first-number').value;
    let symbol = document.getElementById('symbol').value;
    let secondNumber = document.getElementById('second-number').value;
    let result;


    if (firstNumber === '' || String(firstNumber).trim() === '') {
        return console.log('Первое число не указано');
    };

    if (secondNumber === '' || String(secondNumber).trim() === '') {
        return console.log('Второе число не указано');
    };

   
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultOut.innerText = 'Некорректный ввод чисел';
        return console.log('Некорректный ввод чисел');
    };

    switch (symbol) {
        case '': {
            return console.log('Не введён знак');
        };
        case '+': {
            result = Number(firstNumber) + Number(secondNumber);
        } break;
        case '-': {
            result = Number(firstNumber) - Number(secondNumber);
        } break;
        case '*': {
            result = Number(firstNumber) * Number(secondNumber);
        } break;
        case '/': {
            result = Number(firstNumber) / Number(secondNumber);
        } break;
        default: {
        return resultOut.innerText = 'Программа не поддерживает такую операцию', console.log('Программа не поддерживает такую операцию')
        } break;
    };

    if (isNaN(result)) {
        resultOut.innerText = 'Операция некорректна';
        return console.log('Операция некорректна');
    };

    if (result === Infinity) {
        resultOut.innerText = 'Операция некорректна';
        return console.log('Операция некорректна');

    } else {
        resultOut.innerText = `${result}`;
        console.log(result);
    };
});