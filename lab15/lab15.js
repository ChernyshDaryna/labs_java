function applyOperation(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
console.log(applyOperation(5, 3, add)); 
console.log(applyOperation(5, 3, multiply)); 


function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}
const sayHello = createGreeting("Привіт");
console.log(sayHello("Дарина"));

//15
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); 
increment();
