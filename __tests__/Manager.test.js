const Manager = require('../lib/manager');

it('gets the role for manager', () => {
    const manager = new Manager(this.name, this.id, this.email);

    expect(manager.getRole()).toEqual("Manager");
});