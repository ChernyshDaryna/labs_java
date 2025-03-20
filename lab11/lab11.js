let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    drive() {
      console.log("Їду на " + this.brand + " " + this.model);
    }
  };
  car.drive(); 


  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.sayHello = function() {
    console.log("Привіт, я " + this.name);
  };
  let dog = new Animal("Собака");
  dog.sayHello(); 

  

  function Dog(name) {
    Animal.call(this, name);
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  let dog1 = new Dog("Шерлок");
  dog1.sayHello();
  
  

  Dog.prototype.sayHello = function() {
    console.log("Гав! Я " + this.name);
  };
  dog1.sayHello();

  

  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  
  let arr = [1, 2, 3];
  console.log(arr.last());

  

  //15 вар
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    register() {
      console.log(this.name + " зареєстрована!");
    }
    login() {
      console.log(this.name + " увійшла у систему.");
    }
  }
  
  let user1 = new User("Дарина", "darina.chernysh@krfk.kai.edu.ua");
  user1.register();
  user1.login();
  