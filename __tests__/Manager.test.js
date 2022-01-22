const Employee = require('../lib/employee');

describe('employee', () => {
    it('creates an employee', () => {
        const employee = new Employee('Kurtis', 202, 'kcd257@yahoo.com');

        expect(employee.name).toEqual(expect.any(string));
        expect(employee.id).toEqual(expect.any(number));
        expect(employee.email).toEqual(expect.any(string));
    });
});