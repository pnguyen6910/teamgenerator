// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
    
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Manager')
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }

    getOffice() {
        return this.officeNumber
    }
}

let paul = new Employee('paul', 1, 'email@email.com', 'employee', 101)
console.log(paul)