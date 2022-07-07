const Intern = require("../lib/Intern")
const intern = new Intern('felix', '111213', 'felixstestemail@gmail.com','UCLA'); // new intern to test with name, id, email, and school

test('test whether the entered values for name, id, and email are valid', () => {
    expect(intern.name).toBe('felix');
    expect(intern.id).toBe('111213');
    expect(intern.email).toBe('felixstestemail@gmail.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(intern.getName()).toBe('felix');
});

test('test of id number comes up when we call getId() method', () => {
    expect(intern.getId()).toBe('111213');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(intern.getEmail()).toBe('felixstestemail@gmail.com');
});

test('if school comes up when we call getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCLA');
})

test('if role come sup when we call getRole() method', () => {
    expect(intern.getRole()).toBe('Intern')
});