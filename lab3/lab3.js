//1
let text = "Hello";
let numberr = 42;
let bool = true;
let undef;
let nul = null;
//перевiрка
console.log(typeof text);
console.log(typeof numberr);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul);

//2
let strNum = Number(text);
console.log(typeof strNum);
let numStr = String(numberr);
console.log(typeof numStr);
let numBool = Boolean(numberr);
console.log(typeof valBool);

//3
console.log("15" + 2);
console.log("15" - 2);
console.log("15" * 2);
console.log("15" / 2);

//4
function getType(value) {
    return typeof value;
}

//5
console.log(5 == "5");   // true, бо == приводить типи до одного
console.log(5 === "5");  // false, бо === порівнює без приведення типів
console.log(null == undefined); // true, оскільки вони обидва "відсутні значення"
console.log(0 == false);  // true, бо 0 приводиться до false
console.log(5 === false); // false, бо різні типи (number і boolean)
