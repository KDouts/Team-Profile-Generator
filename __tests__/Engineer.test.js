const Engineer = require('../lib/engineer');

it('gets the role of the engineer', () => {
    const engineer = new Engineer('Kurtis', 202, 'kcd257@yahoo.com');

    expect(engineer.getRole()).toEqual("Engineer");
});