const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

function questionInfo() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }])
        .then(({ name }) => {
            new Employee(name);
            this.getId();
        })
};

questionInfo.prototype.getId = function () {
    inquirer.prompt([{
        type: 'input',
        name: 'id',
        message: 'What is your id #?'
    }])
        .then(({ id }) => {
            new Employee(id);
            this.getEmail();
        })
};

questionInfo.prototype.getEmail = function () {
    inquirer.prompt([{
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?'
    }])
        .then(({ email }) => {
            new Employee(email);
        })
}

module.exports = questionInfo;
