const users = [
    { name: "Дарина", age: 18 },
    { name: "Катя", age: 52 },
    { name: "Юля", age: 15 }
  ];
const key = "name";

users.forEach(user => {
  console.log(user[key]);
});
  