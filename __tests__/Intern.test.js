const Intern = require('../lib/intern');

it('gets the role of the intern', () => {
    const intern = new Intern('Kurtis', 202, 'kcd257@yahoo.com');

    expect(intern.getRole()).toEqual("Intern");
});