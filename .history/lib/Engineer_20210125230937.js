// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer')
        this.github = github
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
}

// let paul = new Employee('paul', 1, 'email@email.com', 'employee', pnguyen6910)
// console.log(paul)