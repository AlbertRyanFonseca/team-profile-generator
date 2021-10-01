const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employeeArray = [];
const generateTemplate = require('./src/template');

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
            validate: input => {
                if (input) {
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
            validate: input => {
                if (input) {
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
            validate: input => {
                if (input) {
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
            when: answers => answers.chooseRole === 'Intern',
            validate: intSchool => {
                if (intSchool) {
                    return true;
                }
                else {
                    console.log('Please enter your school');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github username?',
            when: answers => answers.chooseRole === 'Engineer',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phone',
            message: 'what is your office number?',
            when: answers => answers.chooseRole === 'Manager',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'Do you have another employee to add?',
            default: true
        }
    ])
        .then(answers => {
            if (answers.chooseRole === 'Intern') {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                employeeArray.push(intern);
            } else if (answers.chooseRole === 'Engineer') {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                employeeArray.push(engineer);
            } else if (answers.chooseRole === 'Manager') {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.phone);
                employeeArray.push(manager);
            }

            if (answers.confirmation) {
                return empInfo(answers);
            }
            else {
                return answers;
            }
        })
}

function writeFile(template) {
    fs.writeFile('./dist/index.html', template, (err) => {
        if (err) throw err;
        console.log('File Created');
    })
}

function initFile() {
    empInfo()
        .then(() => {
            return generateTemplate(employeeArray)
        })
        .then((generateTemplate) => {
            return writeFile(generateTemplate);
        })
}

initFile();