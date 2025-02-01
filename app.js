//   first level practice 1.
const prompt = require('prompt-sync')();
let login = prompt ("Введіть логін: ")
let password = prompt ("Введіть ваш пароль: ")

if (login === 'admin' && password === "12345") {
    console.log("Вхід успішний")
} else {
    console.log("Доступ заборонено")
}
//   first level practice 2.
let birthYear = +prompt("Введіть свій рік народження: ");
let age = 2025 - birthYear;

if (age < 18) {
    console.log('Доступ обмежено')
}
//   first level practice 3.
let price1 = +prompt('Введіть ціну для розрахунку?')
const price2 = 10
const tax = 20
let result = price1 - price2 * (tax/100)
console.log(result)
//   second level practice 3.
let email = prompt("Введіть вашу пошту: ")

if(email.length >= 8 && email.length < 36){
    console.log("Успішно")
} else {
    console.log("Помилка, спробуйте ще")
}

if (!email.includes("@")) {
    console.log("Немає @ в пошті");
} else if (!email.includes(".")) {
    console.log("Немає . в пошті");
}

let password2 = prompt("Введіть ваш пароль: ");

if (password2.length >= 8 && password2.length <= 16) {
    let hasNumbers = /[0-9]/.test(password2); 
    let hasLetters = /[a-zA-Z]/.test(password2);
    
    if (hasNumbers && hasLetters) {
        console.log("Успішний вхід");
    } else {
        console.log("Пароль має містити літери та цифри");
    }
} else {
    console.log("Пароль має бути більше 8 символів та менше 16.");
}

let getAge = +prompt('Введіть ваш вік')

if (getAge > 17 && getAge < 100) {
    console.log("Успішно")
} else {
    console.log("Вік має бути більше 17 років та менше 100")
}


