const person = {
  name: "Jefté",
  age: 33,

  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();
