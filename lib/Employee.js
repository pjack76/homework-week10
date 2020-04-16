// TODO: Write code to define and export the Employee class
const question = require("../app.js")

question().then(infoArray => {
    for (let i = 0; i < infoArray.length; i++){
        this.name = function getName(){
            employeeName = infoArray[i].name;
        console.log(employeeName);};

        this.ID = function getID(){
        employeeID = infoArray[i].id;
        console.log(employeeID);};

        this.email = function getEmail(){
        employeeEmail = infoArray[i].email;
        console.log(employeeEmail);};
    }
    });
module.exports = Employee;