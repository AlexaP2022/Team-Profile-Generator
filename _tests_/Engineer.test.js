const Engineer = require("../lib/Engineer")
const engineer = new Engineer('jim', '131415', 'jimtestemail@gmail.com','jsfakegh1'); // new engineer to test with name, id, email, and github username

test('test whether the entered values for name, id, and email are valid', () => {
    expect(engineer.name).toBe('jim');
    expect(engineer.id).toBe('131415');
    expect(engineer.email).toBe('jimtestemail@gmail.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(engineer.getName()).toBe('jim');
});

test('test of id number comes up when we call getId() method', () => {
    expect(engineer.getId()).toBe('131415');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(engineer.getEmail()).toBe('jimtestemail@gmail.com');
});

test('if github username comes up when we call getgitHubUN() method', () => {
    expect(engineer.getgitHubUN()).toBe('jsfakegh1');
})

test('if role come sup when we call getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});