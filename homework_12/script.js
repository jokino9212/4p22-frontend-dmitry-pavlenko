'use strict'

const form = document.getElementById("form");
const emailOutput = document.getElementById("output-email")
const passwordOutput = document.getElementById("output-password")
const confirmOutput = document.getElementById("output-confirm")
const borderEmail = document.getElementById("email")
const borderPassword = document.getElementById("password")
const borderConfirm = document.getElementById("confirm")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
// функция валидации email
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm');
    const sex = formData.get('radio');
    const aboutSelf = formData.get('text');
    const updateCheckbox = formData.get('checkbox');

    const values = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        sex: sex,
        aboutSelf: aboutSelf,
        agreement: updateCheckbox
    };

    let printObjectToConsole = false;

    if (email.trim() === "") {
        console.log("Поле обязательно для заполнения");
        borderEmail.classList.add('error');
        emailOutput.innerText = "Поле обязательно для заполнения";
        printObjectToConsole = false;
        return

    } else {
        borderEmail.classList.remove('error');
        emailOutput.innerText = "";
        printObjectToConsole = true;

    };

    if (!validateEmail(email)) {
        console.log("Email введён некорректно");
        borderEmail.classList.add('error');
        emailOutput.innerText = "Email введён некорректно";
        printObjectToConsole = false;
        return

    } else {
        borderEmail.classList.remove('error');
        emailOutput.innerText = "";
        printObjectToConsole = true;
    };

    if (password.trim() === "") {
        console.log("Поле обязательно для заполнения");
        borderPassword.classList.add('error');
        passwordOutput.innerText = "Поле обязательно для заполнения";
        printObjectToConsole = false;
        return

    } else {
        borderPassword.classList.remove('error');
        passwordOutput.innerText = "";
        printObjectToConsole = true;
    };

    if (password.length < 8) {
        console.log("Пароль должен содержать не менее 8 символов");
        borderPassword.classList.add('error');
        passwordOutput.innerText = "Пароль должен содержать не менее 8 символов";
        printObjectToConsole = false;
        return

    } else {
        borderPassword.classList.remove('error');
        passwordOutput.innerText = "";
        printObjectToConsole = true;

    };

    if (confirmPassword.trim() === "" || confirmPassword !== password) {
        console.log("Пароли не совпадают");
        borderConfirm.classList.add('error');
        confirmOutput.innerText = "Пароли не совпадают";
        printObjectToConsole = false;

    } else {
        borderConfirm.classList.remove('error');
        confirmOutput.innerText = "";
        printObjectToConsole = true;

    };

    // вывод в консоль
    if (printObjectToConsole === true) {
        console.log('Данные пользователя:' + JSON.stringify(values))
    };

});





