const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;