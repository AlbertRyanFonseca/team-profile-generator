const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeArr = [];

function empInfo() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'chooseRole',
            message: 'What position is this employee?',
            choices: ['Manager', 'Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: emplName => {
                if (emplName) {
                    return true;
                }
                else {
                    console.log('Enter your name please');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id number?',
            validate: emplId => {
                if (emplId) {
                    return true;
                }
                else {
                    console.log('Please enter ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email?',
            validate: emplEmail => {
                if (emplEmail) {
                    return true;
                }
                else {
                    console.log('Enter your email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school have you attended?',
            when: answers => answers.roleChoice === 'Intern'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github username?',
            when: answers => answers.rolechoice === 'Engineer'
        },
        {
            type: 'input',
            name: 'phone',
            message: 'what is your office number?',
            when: answers => answers.roleChoice === 'Manager'
        }
    ])
}

function initAnswers() {
    inquirer.prompt(question).then((answers) => {
        if (answers.chooseRole === 'Intern') {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeArr.push(intern);
        } else if (answers.chooseRole === 'Engineer') {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeeArr.push(engineer);
        } else if (answers.chooseRole === 'Manager') {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.phone);
            employeeArr.push(manager);
        }
    })
}

initAnswers();