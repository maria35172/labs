function checkFirst() {
    const name = document.getElementById("first");
    const regex = /^[а-яА-ЯA-Za-z]{2,15}$/;
    
    if (regex.test(name.value)) {
        name.style.backgroundColor = "rgb(101, 246, 101)";
        return;
    }
    else {
        name.style.backgroundColor = "rgb(229, 83, 83)";
        return;
    }
}

function checkLast() {
    const last_name = document.getElementById("last");
    const regex = /^[а-яА-ЯA-Za-z]{2,15}$/;

    if (regex.test(last_name.value)) {
        last_name.style.backgroundColor = "rgb(101, 246, 101)";
        return;
    }
    else {
        last_name.style.backgroundColor = "rgb(229, 83, 83)";
        return;
    }
}

function checkEmail() {
    const email = document.getElementById("email");
    const regex = /^[a-zA-Z0-9]{2,20}@[a-z]{2,10}\.[a-z]{2,5}$/;
    if (regex.test(email.value)) {
        email.style.backgroundColor = "rgb(101, 246, 101)";
        return;
    }
    else {
        email.style.backgroundColor = "rgb(229, 83, 83)";
        return;
    }
}

function checkTelNum() {
    const telephone = document.getElementById("tel_number");
    const regex = /^\+7[0-9]{10}$/;
    if (regex.test(telephone.value)) {
        telephone.style.backgroundColor = "rgb(101, 246, 101)";
        return;
    }
    else {
        telephone.style.backgroundColor = "rgb(229, 83, 83)";
        return;
    }
}

function checkGoods() {
    const goods = document.getElementById("goods");
    const regex = /^[A-Za-z\sа-яА-Я0-9\.\,\:\;]{2,50}$/;
    if (regex.test(goods.value)) {
        goods.style.backgroundColor = "rgb(101, 246, 101)";
        return;
    }
    else {
        goods.style.backgroundColor = "rgb(229, 83, 83)";
        return;
    }
}

function checkInvalidInputs(event) {
    const name = document.getElementById("first");
    const last_name = document.getElementById("last");
    const email = document.getElementById("email");
    const telephone = document.getElementById("tel_number");
    const preferences = document.getElementById("goods");

    if (name.style.backgroundColor === "rgb(229, 83, 83)" || last_name.style.backgroundColor === "rgb(229, 83, 83)" || email.style.backgroundColor === "rgb(229, 83, 83)"
        || telephone.style.backgroundColor === "rgb(229, 83, 83)" || preferences.style.backgroundColor === "rgb(229, 83, 83)") {
        alert("Одно или несколько полей заполнены неверно!!!");
        event.preventDefault();
    }
}

// Изменение цвета фона тега header при нажатии
let headerCounter = 0;

function changeHeaderColor() {
    const header = document.getElementById("header");

    if (headerCounter % 2 === 0) {
        header.style.backgroundColor = "#a2fb6b";
    }
    else {
        header.style.backgroundColor = "#6bb2fb";
    }

    headerCounter++;
}

// Изменение цвета фона тега footer при нажатии
let footerCounter = 0;

function changeFooterColor() {
    const footer = document.getElementById("footer");

    if (footerCounter % 2 === 0) {
        footer.style.backgroundColor = "#ede61b";
    }
    else {
        footer.style.backgroundColor = "#227ecb";
    }

    footerCounter++;
}