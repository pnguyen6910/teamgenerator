// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern(school) {
    constructor(school) {
        this.school = school
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }
}

new Intern("Paul", 1, "hehexd@hehexd.com", "Intern", "NW")

console.log()