// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(username, id, email, school){
        super(username, id, email)
        this.school = school;
    }
    getRole() {
        return "Intern";
      }
      getSchool() {
        return this.school;
}
}
module.exports = Intern;