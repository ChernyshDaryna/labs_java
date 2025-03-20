function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); 

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); 

const user = { name: 'Alice', age: 25, city: 'Kyiv', country: 'Ukraine' };
const { name, ...details } = user;
console.log(details); 


//15 вариант

function combineStrings(...strings) {
    return strings.join(' ');
  }
  
  console.log(combineStrings('Це', 'речення', 'зі', 'змінною', 'кількістю', 'рядків.')); 
