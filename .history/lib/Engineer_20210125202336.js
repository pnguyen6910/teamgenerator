// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer(GitHub) {
    constructor(gitHub) {
        this.gitHub = gitHub
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
}