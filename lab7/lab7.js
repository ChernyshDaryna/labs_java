let numbers1 = [3, 7, 2, 9, 12, 5]; 
let numbers2 = new Array(4, 8, 1, 6, 10); 
console.log("Початкові масиви:", numbers1, numbers2);

console.log("Відсортований numbers1:", numbers1.sort((a, b) => a - b));
console.log("Реверсований numbers1:", numbers1.reverse());

let combinedArray = numbers1.concat(numbers2);
console.log("Об'єднаний масив:", combinedArray);

console.log("Частина масиву slice(1, 4):", combinedArray.slice(1, 4));
combinedArray.splice(2, 2, 99, 88);
console.log("Масив після splice(2, 2, 99, 88):", combinedArray);

console.log("Індекс числа 9 у combinedArray:", combinedArray.indexOf(9));
console.log("Чи міститься число 12 у combinedArray:", combinedArray.includes(12));

// варіант 15
let firstEvenIndex = combinedArray.findIndex(num => num % 2 === 0);
console.log("Індекс першого парного числа:", firstEvenIndex);

/*
Дано масив чисел. Використати sort() для сортування за зростанням. const numbers = [12, 5, 8, 21, 3, 18];
*/
const numbers = [12, 5, 8, 21, 3, 18];
numbers.sort((a, b) => a - b);
console.log("Відсортований масив:", numbers);
