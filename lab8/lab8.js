
function sayHello() {
    console.log("Hello world");
}
sayHello();

function greet(name) {
    console.log(`Привіт, ${name}!`);
}
greet("Дарина");
greet("Марія");

// варiант 15 
function absValue(num) {
    return Math.abs(num);
}
console.log(absValue(-15)); 
console.log(absValue(5));   

/*
Створи функцію toLowerCaseString, яка приймає рядок і
повертає його у нижньому регістрі.
*/
function toLowerCaseString(name) {
    console.log(`${name}`.toLowerCase());
}
toLowerCaseString("Це РЯДОК");