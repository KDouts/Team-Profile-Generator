const Employee = require('../lib/employee');

it('creates an employee object', () => {
    const employee = new Employee('Kurtis', 202, 'kcd257@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
 
it('gets employee name', () => {
    const employee = new Employee('Kurtis', 202, 'kcd257@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

it('gets employee ID', () => {
    const employee = new Employee('Kurtis', 202, 'kcd257@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

it('gets employee email', () => {
    const employee = new Employee('Kurtis', 202, 'kcd257@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

it('gets role of employee', () => {
    const employee = new Employee('Kurtis', 202, 'kcd257@yahoo.com');

    expect(employee.getRole()).toEqual("Employee");
}); 