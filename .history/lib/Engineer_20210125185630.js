// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer {
    constructor(name, id, email, role, gitHub) {
        this.role = "Engineer"
        this.gitHub = gitHub
    }

    getRole() {
        return this.role
    }

    getGithub() {
        return this.github
    }
}