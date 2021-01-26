// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, role, school) {
        this.school = school
        this.role = "Intern"
    }

    getRole() {

    }

    getSchool() {
        return this.school
    }
}

new Intern("Paul", 1, "hehexd@hehexd.com", "Intern", "NW")

console.log