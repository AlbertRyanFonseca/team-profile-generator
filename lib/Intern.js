const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email, school);
        this.school = school;
    }

    getSchool() {
        return inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'What school did you attend?'
        })
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;