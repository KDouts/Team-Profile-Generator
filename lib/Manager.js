const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super('Kurtis', 202, 'kcd257@yahoo.com')
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;