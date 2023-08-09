// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["motivation", "reasons", "problem-solving", "learning"];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'motivation',  
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'reasons',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problem-solving',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learning',
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
