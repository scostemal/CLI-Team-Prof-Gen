// Importing all of the required modules

const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML.js");

// Initializing an empty array to store the team members

const team =[];

// Function to prompt the user for information about the employee utilizing the inquirer library

async function promptUser() {
    return inquirer.prompt([
        {
        
        // Ask the user to choose the new employee's role

            type: "list",
            name: "role",
            message: "Choose the employee's role.",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },

        // Ask the user to enter the employee's name

        {
            type: "input",
            name: "name",
            message: "Enter the employee's name."
        },

        // Ask the user to enter the employee's id 

        {
            type: "input",
            name: "id",
            message: "Enter the employee's id."
        },

        // Ask the user to enter the employee's email

        {
            type: "input",
            name: "email",
            message: "Enter the employee's email."
        },

        // Ask the user to enter the employee's GitHub when the "Engineer" role is selected

        {
            type: "input",
            name: "github",
            message: "Enter the engineer's Github username.",
            when: (answers) => answers.role === "Engineer"
        },

        // Ask the user to enter the employee's school when the "Intern" role is selected

        {
            type: "input",
            name: "school",
            message: "Enter the intern's school.",
            when: (answers) => answers.role === "Intern"
        },

        // Ask the user to enter the employee's office number when the "Manager" role is selected

        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number.",
            when: (answers) => answers.role === "Manager"
        }
    ]);
}

// Function to add employee to team array
  
async function addEmployee() {
    let answer = await promptUser();

    switch(answer.role) {
        case "Engineer":
            team.push(new Engineer(answer.name, answer.id, answer.email, answer.github));
            break;
        case "Intern":
            team.push(new Intern(answer.name, answer.id, answer.email, answer.school));
            break;
        case "Manager":
            team.push(new Manager(answer.name, answer.id, answer.email, answer.officeNumber));
    }
}

// Function to start and stop the prompt and generate the html file
async function init() {
    console.log("Please build your team");

    await addEmployee();

    let answer = await inquirer.prompt([{
        type: "confirm",
        name: "addMore",
        message: "Would you like to add another employee?"
    }]);

    while(answer.addMore){
        await addEmployee();
        answer = await inquirer.prompt([{
            type: "confirm",
            name: "addMore",
            message: "Would you like to add another employee?"
        }]);
    }

    const html = generateHTML(team);

    fs.writeFile("./dist/team.html", html, function(err) {
        if(err) {
            return console.log(err);
        } console.log("team.html was generated sucessfully!");
    });
}

init();