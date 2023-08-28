// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of this project?'
    },
    {
        type: 'input', 
        name: 'Description',
        message: 'Provide a short description explaining what was your motivation, why did you build this project, what problem does it solve and what did you learn?'
    }, 
    {
        type: 'input',
        name: 'Table of contents',
        message: 'Table of contents'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What does the user need to install to run this app? (ex: dependencies)',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How is this app used?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who contruibuted to this project? (List github username and email.)'
    },
    {
        type: 'input',
        name: 'License',
        message: 'What license is being used?'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Write tests for your application then provide examples on how to run them here'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Refer to contact info'
    },
    {
        type: 'input',
        name: 'Username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
