const person = {
  name: "Jefté",
  age: 33,

  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const copiedPerson = { ...person }; // Spread operator
console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];
const sliceArray = hobbies.slice();
const nestedArray = [hobbies];
const copiedArray = [...hobbies]; // Spread operator

console.log(hobbies);
console.log(sliceArray);
console.log(nestedArray);
console.log(copiedArray);

const toArray = (...args) => { // Rest operator
  return [...args];
};

console.log(toArray(1, 2, 3));