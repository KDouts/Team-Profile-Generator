const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super('Kyle', '3', 'kyle@hotmail.com')
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
        return "Engineer";
    }
}