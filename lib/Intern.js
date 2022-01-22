const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super('george', '1', 'jojo@comcast.com')
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