const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super('Matt', '2', 'mattyspatty2734@aol.com')
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
}