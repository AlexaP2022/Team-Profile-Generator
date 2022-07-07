const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUN) { // add github username (gitHubUN) unique to Engineer
        super(name, id, email);

        this.gitHubUN = gitHubUN;
    }
   
    getgitHubUN() {
        return this.gitHubUN;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;