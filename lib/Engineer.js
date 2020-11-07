// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(username, id, email, github) {
    super(username, id, email);
    // this.username = username;
    // this.id = id;
    // this.email = email;
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
