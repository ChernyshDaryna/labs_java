//1
let user = {
    name: "Іван",
    age: 25,
    country: "Україна"
  };
  console.log(user);

user.age = 30;
console.log(user.age); // 30

user.city = "Київ";
console.log(user);

delete user.country;
console.log(user);

console.log("age" in user); 
console.log("country" in user); 

for (let key in user) {
    console.log(key + ": " + user[key]);
  }

//15 вариант
let film = {
  title: "Залиш світ позаду",
  director: "Сем Есмейл",
  year: 2023
};

film.rating = 7.3;
console.log(film);


