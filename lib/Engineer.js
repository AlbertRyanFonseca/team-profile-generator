const inquirer = require('inquirer');
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return inquirer.prompt({
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub?'
        })
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;