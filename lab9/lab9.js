const add = (a, b) => a + b;
console.log(add(15, 5)); 

const square = num => num ** 2;
console.log(square(5)); 

const greet = () => "Привіт, світ!";
console.log(greet()); 

const processArray = (arr, callback) => arr.map(callback);
const doubled = processArray([1, 2, 3, 4], num => num * 2);
console.log(doubled);


//15 вариант
const getSquares = arr => arr.map(num => num ** 2);
console.log(getSquares([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquares([-2, 0, 7])); // [4, 0, 49]


