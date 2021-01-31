const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var team = [];


function start() {
    const start = inquirer.prompt([
        {
        name: "mainMenu",
        type: "list",
        messege: "What kind of employee would you like to enter?",
        choices: ["Manager", "Engineer", "Intern", "Done"]
        }
    ]).then(res => {
        switch (res.mainMenu) {
            case 'Manager':
                generateEmployeeM()
                break
            case 'Engineer':
                generateEmployeeE()
                break
            case 'Intern':
                generateEmployeeI()
                break
            case 'Done':
                generateTeam()
        }
    })
    function generateEmployeeM() {
        const generateManager = inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "What is your name?"
            },
            {
                name: "id",
                type: "number",
                message: "What is your ID number?"
            },
            {
                name: "email",
                type: "input",
                message: "What is your email?"
            },
            {
                name: "officeNum",
                type: "input",
                message: "What is your office number?"
            }
        ]).then(res => {
            const manager = new Manager(res.name, res.id, res.email, res.officeNum)
            team.push(manager)
            start()
            });
    }
    function generateEmployeeE() {
        const generateEngineer = inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "What is your name?"
            },
            {
                name: "id",
                type: "number",
                message: "What is your ID number?"
            },
            {
                name: "email",
                type: "input",
                message: "What is your email?"
            },
            {
                name: "gitHub",
                type: "input",
                message: "What is your github username?"
            }
        ]).then(res => {
            const engineer = new Engineer(res.name, res.id, res.email, res.gitHub)
            team.push(engineer)
            start()
            });
    }
    function generateEmployeeI() {
        const generateIntern = inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "What is your name?"
            },
            {
                name: "id",
                type: "number",
                message: "What is your ID number?"
            },
            {
                name: "email",
                type: "input",
                message: "What is your email?"
            },
            {
                name: "school",
                type: "input",
                message: "What is your school?"
            }
        ]).then(res => {
            const intern = new Intern(res.name, res.id, res.email, res.school)
            team.push(Intern)
            start()
            });
    }
    function generateTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(team), 'utf-8')
    }
}


start() 