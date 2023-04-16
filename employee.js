// employee scenario
var employee = {
  firstName: "Smith",
  lastName: "John",
  designation: "Clerk",
  salary: 3000,
  workExperienceYears: 4,

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  promote: function () {
    var isEligibleForPromotion; 
    if (this.designation == "Clerk") {
      if (this.workExperienceYears >= 3) {
        isEligibleForPromotion = true;
        this.designation = "Asst. Manager";
        this.salary += (this.salary * 10) / 100;
      } else {
        isEligibleForPromotion = false;
      }
    } else if (this.designation == "Asst. Manager") {
      if (this.workExperienceYears >= 5) {
        isEligibleForPromotion = true;
        this.designation = "Manager";
        this.salary += (this.salary * 20) / 100;
      } else {
        this.isEligibleForPromotion = false;
      }
    } else {
      return isEligibleForPromotion;
    }
    return isEligibleForPromotion;    
  },
};
// console.log(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.designation);
console.log(employee.salary);
console.log(employee.workExperienceYears);
console.log(employee.getFullName());

if(employee.promote() == true) {
  console.log('Congratualations! The Employee promoted!');
  console.log('Updated salary: ' + employee.salary);
  console.log('Updated designation: ' + employee.designation);
} else {
  console.log('Employee is not eligible!');
}
