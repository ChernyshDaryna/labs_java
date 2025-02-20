//1
/*
let t = 30
//let t = prompt("Введiть температуру");
if (t > 30) {
    console.log("Дуже спекотно");
} else if (t >=15 && t <=30) {
    console.log("Тепла погода");
} else {
    console.log("Холодна погода");
}

//2
let number = 9;
//let number = prompt("Введiть число");
let result = number % 2 === 0 ? "Парне" : "Не парне";
console.log(`Число ${number} е ${result}`);

//3 

let weekDay = prompt ("Введiть день тижня: ").toLowerCase();
switch  (weekDay) {
    case "понедiлок":
        console.log("Сьогоднi понедiлок");
        break;
    case "вiвторок":
        console.log("Сьогоднi вiвторок");
    case "середа":
        console.log("Сьогоднi середа");
    case "четверг":
        console.log("Сьогоднi четверг");
    case "п'ятниця":
        console.log("Сьогоднi п'ятниця");
    default:
        console.log("Такого дня не iснуе")

} 

//4
let password = "1";
//let password = prompt("Введiть пароль");
if (password === "admin123"){
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}
*/
//let t = 69
let t1 = prompt("Введiть вашу оцiнку 0-100: ");
if (t1 > 89) {
    console.log("Відмінно");
    alert("Вiдмiнно");
} else if (t1 >=70 ) {
    console.log("Добре");
    alert("Добре");
} else if (t1 >=50) {
    console.log("Задовiльно");
    alert("Задовiльно");
} else {
    console.log("Не склав");
    alert("Не склав");
}
