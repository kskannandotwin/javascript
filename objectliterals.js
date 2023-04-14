// object literals
// {} // empty object
var person = {
  personName: "Scott",
  birthDay: function () {
    // console.log("Happy Birthday");
    return 'Happy Birthday!';
  }
};
console.log(person);
console.log(person.personName);
console.log(person.birthDay());
