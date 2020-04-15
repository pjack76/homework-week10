const inquire = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

//this is a test
const questions = [{
    type: "input",
    name: "inputName",
    message: "Please enter the name of the employee."
},

{
    type: "input",
    name: "inputID",
    message: "Please enter the ID of the employee."
},
{
    type: "input",
    name: "inputEmail",
    message: "Please enter the email of the employee."
},

{
    type: "list",
    name: "inputRole",
    message: "Please select the role of the employee.",
    choices: ["Manager", "Engineer", "Intern"],
},

{
    type: "input",
    name: "inputOffice",
    message: "Please enter the Office number of the employee.",
    when: function (answer){
        return answer.inputRole === "Manager"
    }
},

{
    type: "input",
    name: "inputGit",
    message: "Please enter the gitHub username of the employee.",
    when: function (answer){
        return answer.inputRole === "Engineer"
    }
},

{
    type: "input",
    name: "inputSchool",
    message: "Please enter the school of the employee.",
    when: function (answer){
        return answer.inputRole === "Intern"
    }
},

{
    type: "confirm",
    name: "addMore",
    message: "Do you want to add another team member?",
    default: true
    
}
];



async function userInfoPrompt() {
   
    var infoCollected = [];
    var moreEmployee = true;

while (moreEmployee) {
var answer = await inquire.prompt(questions);
    var employeeName = answer.inputName;
    var employeeID = answer.inputID;
    var employeeRole = answer.inputRole;
    var employeeEmail = answer.inputEmail;
    moreEmployee = answer.addMore;
    var employeeOffice = answer.inputOffice;
    var employeeGit = answer.inputGit;
    var employeeSchool = answer.inputSchool;
    var employee = {};
    if (employeeRole === "Manager"){    
        employee = {  name: employeeName,
                        id: employeeID,
                        role: employeeRole,
                        email: employeeEmail,
                        office: employeeOffice
                    }
        infoCollected.push(employee)}

    else if (employeeRole === "Engineer"){    
        employee = {  name: employeeName,
                        id: employeeID,
                        role: employeeRole,
                        email: employeeEmail,
                        git: employeeGit
                    }
        infoCollected.push(employee);
    }
    else {employee = {  name: employeeName,
                        id: employeeID,
                        role: employeeRole,
                        email: employeeEmail,
                        school: employeeSchool
                    }
        infoCollected.push(employee);
        }
    };
   
    console.log(infoCollected);
    };


userInfoPrompt();//.then(function(resolve, reject){

//};


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
// for the provided `render` function to work!```
