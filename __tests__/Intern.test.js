const Intern = require('../lib/Intern');

describe('Intern', () => {
    let intern;

    beforeEach(() => {
        intern = new Intern('Jane Doe', '123', 'jane.doe@email.com', 'University of ABC');
    });

    test('gets name', () => {
        expect(intern.getName()).toBe('Jane Doe');
    });

    test('gets id', () => {
        expect(intern.getId()).toBe('123');
    });

    test('gets email', () => {
        expect(intern.getEmail()).toBe('jane.doe@email.com');
    });

    test('gets school', () => {
        expect(intern.getSchool()).toBe('University of ABC');
    });

    test('gets role', () => {
        expect(intern.getRole()).toBe('Intern');
    });
});
