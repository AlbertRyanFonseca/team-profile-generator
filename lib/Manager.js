const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee() {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        })
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;