let person1 = {
  personName: "mayank",
  greet: function () {
    console.log(`hello ${this.personName}`);
  },
};
person1.greet()