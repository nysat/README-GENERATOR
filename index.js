//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")


//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Provide a short description explaining what was your motivation?, why did you build this project?, what problem does it solve? and what did you learn?'
    }, 
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide a path to the image you want to use as the screenshot.'
    },
    {
        type: 'input',
        name: 'link',
        message:'Please provide a URL where a user can access the deployed application'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Table of contents (press enter)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run this app? (ex: dependencies)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this app used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contruibuted to this project? (List github username and email.)'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license is being used? (Please select one applicable to this project.)',
        choices: ["MIT", "Berkeley Software Distribution License (BSD)", "GNU General Public License (GNU GPL)", "Apache License 2.0", "Internet Systems Consortium (ISC) License", "NONE"]

    },
    {
        type: 'input',
        name: 'test',
        message: 'Write tests for your application then provide examples on how to run them here'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Refer to contact info (press enter)'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email',
    },
];

//function to write README file
function writeToFile(fileName, data,) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log ('error occured')
        } else {
            console.log('Success! here is your file!')
        }
    }) 
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log ('Creating README.md file...');
        writeToFile('./result/README.md', generateMarkdown({...responses}));
    });
}

init();
