function greet() {
    console.log("Привіт, " + this.name);
  }
  
  const user = {
    name: "Дарина"
  };
  
  const boundGreet = greet.bind(user);
  boundGreet();
  