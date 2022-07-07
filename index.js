const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];
const generateSite = require('./src/generate-site');

const promptManager = () => {
    console.log(`Enter Manager Information`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter your employee ID',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Please enter your employee ID');
                    return false;
                }
            }

        },
        {
            type:'input',
            name: 'email',
            message: 'Enter your email address',
            validate: email => {
                if(email) {
                    return true;
                }else {
                    console.log('Please enter your email address');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                }else {
                    console.log('Please enter your office number');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which position/option you would like to complete:',
            choices: ['add an intern', 'add an engineer', 'finish building the team']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case "add an intern":
            promptIntern();
            break;
            case "add an engineer":
            promptEngineer();
            break;
            default:
                buildTeam();
        }
    });

};

const promptIntern = () => {
    console.log(`---ADD A NEW INTERN---`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: internName => {
                if(internName) {
                    return true;
                }else {
                    console.log('Please enter the name of the intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter the interns employee ID',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Please enter the interns ID');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'Enter the interns email address',
            validate: email => {
                if(email) {
                    return true;
                }else {
                    console.log('Please enter the interns email address');
                    return false;
                }
            }

        },
        {
            type:'input',
            name: 'school',
            message: 'Enter the interns school',
            validate: school => {
                if(school) {
                    return true;
                }else {
                    console.log('Please enter the interns school');
                    return false;
                }
            }

        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeID, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const promptEngineer = () => {
    console.log(`---ADD A NEW ENGINEER---`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                }else {
                    console.log('Please enter the name of the engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter the engineers employee ID',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Please enter the engineers ID');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'Enter the engineers email address',
            validate: email => {
                if(email) {
                    return true;
                }else {
                    console.log('Please enter the engineers email address');
                    return false;
                }
            }

        },
        {
            type:'input',
            name: 'githubUN',
            message: 'Enter the engineers github username',
            validate: githubUN => {
                if(githubUN) {
                    return true;
                }else {
                    console.log('Please enter the engineers github username');
                    return false;
                }
            }

        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.githubUN);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`---FINISHED BUILDING TEAM ---`);

    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,generateSite(teamMembers), "utf-8")
}

promptManager();