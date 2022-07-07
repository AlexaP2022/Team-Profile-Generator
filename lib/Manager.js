const Employee = require('./Employee'); 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // add officeNumber (unique to manager)
        super(name, id, email); 

        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports= Manager;