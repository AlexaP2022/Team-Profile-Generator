const Manager = require("../lib/Manager")
const manager = new Manager('adam', '078910', 'adamstestemail@gmail.com','722'); // new manager to test with name, id, email, and office number

test('test whether the entered values for name, id, and email are valid', () => {
    expect(manager.name).toBe('adam');
    expect(manager.id).toBe('078910');
    expect(manager.email).toBe('adamstestemail@gmail.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(manager.getName()).toBe('adam');
});

test('test of id number comes up when we call getId() method', () => {
    expect(manager.getId()).toBe('078910');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(manager.getEmail()).toBe('adamstestemail@gmail.com');
});

test('if office number comes up when we call getOfficeNumber() method', () => {
    expect(manager.getofficeNumber()).toBe('722');
})

test('if role come sup when we call getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});