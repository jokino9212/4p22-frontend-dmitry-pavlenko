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

    const values = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        sex: sex,
        aboutSelf: aboutSelf
    };

    if (email.trim() === "") {
        console.log("Поле обязательно для заполнения");
        borderEmail.classList.add('error');
        emailOutput.innerText = "Поле обязательно для заполнения";
    } else {
        borderEmail.classList.remove('error');
        emailOutput.innerText = "";
    };

    if (!validateEmail(email)) {
        console.log("Email введён некорректно");
        borderEmail.classList.add('error');
        emailOutput.innerText = "Email введён некорректно";

    } else {
        borderEmail.classList.remove('error');
        emailOutput.innerText = "";
    };


    if (password.trim() === "") {
        console.log("Поле обязательно для заполнения");
        borderPassword.classList.add('error');
        passwordOutput.innerText = "Поле обязательно для заполнения";

    } else {
        borderPassword.classList.remove('error');
        passwordOutput.innerText = "";
    };

    if (password.length < 8) {
        console.log("Пароль должен содержать не менее 8 символов");
        borderPassword.classList.add('error');
        passwordOutput.innerText = "Пароль должен содержать не менее 8 символов";

    } else {
        borderPassword.classList.remove('error');
        passwordOutput.innerText = "";
    };

    if (confirmPassword.trim() === "" || confirmPassword !== password) {
        console.log("Пароли не совпадают");
        borderConfirm.classList.add('error');
        confirmOutput.innerText = "Пароли не совпадают";

    } else {
        borderConfirm.classList.remove('error');
        confirmOutput.innerText = "";
        console.log(values)
    };
});





