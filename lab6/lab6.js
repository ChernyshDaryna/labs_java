let arrayLiteral = ["яблуко", "банан", "вишня"];
let arrayConstructor = new Array("авто", "велосипед", "мотоцикл");
console.log("Початкові масиви:", arrayLiteral, arrayConstructor);
// Додавання елементів до масиву
arrayLiteral.push("груша"); 
arrayConstructor.unshift("самокат");
console.log("Після додавання елементів:", arrayLiteral, arrayConstructor);

// Видалення елементів із масиву
let removedFromLiteral = arrayLiteral.pop(); 
let removedFromConstructor = arrayConstructor.shift(); 
console.log("Після видалення елементів:", arrayLiteral, arrayConstructor);
console.log("Видалені елементи:", removedFromLiteral, removedFromConstructor);

// Функція для перетворення масиву рядків у один об'єднаний рядок
function joinArrayStrings(array) {
    return array.join(" ");
}
let stringArray = ["Це", "приклад", "об,єднаного", "рядка"];
let sentence = joinArrayStrings(stringArray);
console.log("Об,єднаний рядок:", sentence);

/*
Написати програму, яка знаходить
мінімальне та максимальне значення в масиві. 
// Приклад масиву 
const numbers = [12, 5, 8, 21, 3, 18];
*/
const numbers = [12, 5, 8, 21, 3, 18];
function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

let result = findMinMax(numbers);
console.log("Мінімальне значення:", result.min);
console.log("Максимальне значення:", result.max);
