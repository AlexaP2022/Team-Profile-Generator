const Employee = require("../lib/Employee")
const employee = new Employee('alexa', '123456', 'alexa.punzalan@gmail.com');

test('test whether the entered values for name, id, and email are valid', () => {
    expect(employee.name).toBe('alexa');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('alexa.punzalan@gmail.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(employee.getName()).toBe('alexa');
});

test('test of id number comes up when we call getId() method', () => {
    expect(employee.getId()).toBe('123456');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(employee.getEmail()).toBe('alexa.punzalan@gmail.com');
});

test('if role come sup when we call getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});