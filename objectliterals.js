// object literals
// {} // empty object
var person = {
  // property
  personName: "Scott",
  //   method
  birthDay: function () {
    // console.log("Happy Birthday");
    return "Happy Birthday!";
  },
};
console.log(person);
console.log(person.personName); // call the property
console.log(person.birthDay()); // call the method
