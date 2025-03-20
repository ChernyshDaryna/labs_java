let arr1_1 = [1, 2, 3];
let arr1_2 = [...arr1_1];
console.log(arr1_2); 

let arr2_1 = [1, 2, 3];
let arr2_2 = [4, 5, 6];
let combined = [...arr2_1, ...arr2_2];
console.log(combined); 

let obj1 = { name: "Дарина", age: 17 };
let obj2 = { ...obj1 };
console.log(obj2); 

//15
let user = { name: 'Дарина', age: 17, city: 'Жовтi Води' };
let keys = [...Object.keys(user)];
console.log(keys); 

let values = [...Object.values(user)];
console.log(values); 

let entries = [...Object.entries(user)];
console.log(entries);


