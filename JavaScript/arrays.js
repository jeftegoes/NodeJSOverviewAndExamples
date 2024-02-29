const person = {
  name: "Jefté",
  age: 33,

  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(
  hobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);

console.log(hobbies);
