// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Letter = require("./Employee");

class Engineer {
    constructor(name, id, email, role, github) {
        this.github = github
    }

    getRole() {

    }

    getGithub() {
        return this.github
    }
}