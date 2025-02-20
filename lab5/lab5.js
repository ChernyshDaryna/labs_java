//1
for (let i=2; i<=10; i+=2) {
    console.log(i);
}

//2
let n=10;
while (n>=1) {
    console.log(n);
    n--;
}

//3
let number;
do {
    number = prompt("Введіть позитивне число:");
} while (number <= 0);
console.log(`Ви ввели число: ${number}`);

//4
let obj = {name: "Daryna", age: 17};
for (let key in obj) {
    console.log(`${key}:${obj[key]}`);
}
//5
let numbers = [5,10,15,20];
for (let item of numbers) {
    console.log (item);
}
console.log(numbers);
//6
numbers.forEach(num => console.log(num));

let numbers2 = numbers.map(num => num*2);
console.log(numbers2);
console.log(numbers);

let numbers3 = numbers.filter(num => num >6 );
console.log(numbers3);
console.log(numbers);
