const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// array of the employee roles available
const role = [
  {
    type: "list",
    message: "What is your role?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
  },
];
// function below allows user to choose which role they want
function newEmployeeRole() {
  inquirer.prompt(role).then(function (answers) {
    if (answers.role === "Manager") {
      return newManager();
    } else if (answers.role === "Engineer") {
      return newEngineer();
    } else if (answers.role === "Intern") {
      return newIntern();
    }
  });
}
newEmployeeRole();

// manager array questions
const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
  },
];
// prompts the answers to the list of manager questions above
function newManager() {
  inquirer.prompt(managerQuestions).then(function (response) {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    employeeTeamArray.push(manager);
    console.log(response);
    newEmployee();
  });
}
// inter array questions
const internQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Where did you go to school?",
    name: "school",
  },
];
// prompts the answers to the list of intern questions above
function newIntern() {
    inquirer.prompt(internQuestions).then(function (response) {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employeeTeamArray.push(intern);
      console.log(response);
     newEmployee();
    });
  }
// engineer array questions
const engineerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub account?",
    name: "github",
  },
];
// prompts the answers to the list of intern questions above
function newEngineer() {
    inquirer.prompt(engineerQuestions).then(function (response) {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github,
      );
      employeeTeamArray.push(engineer);
      console.log(response);
     newEmployee();
    });
  }
// Array for adding a new employee
const newEmployeeQuestions = [
  {
    type: "list",
    message: "Want to add a new employee?",
    name: "new",
    choices: ["YES", "NO"],
  },
];
// If you add new employee then it will call newEmployeeRole and the prompts will display again.
function newEmployee() {
  inquirer.prompt(newEmployeeQuestions).then(function (response) {
    if (response.new === "YES") {
      newEmployeeRole();
    //   If you do not add new employee then it generates the list of employees
    } else {
        console.log(employeeTeamArray);
        generateTeam();
      console.log("You're team is set!");
    }
  });
}

employeeTeamArray = [];

// Renders my employee Team array and allows it to show on my team.html
function generateTeam() {
    fs.writeFile (outputPath, render(employeeTeamArray), (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`Got it!`);
      }
    });
  } 

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
