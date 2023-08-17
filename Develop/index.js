// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
// TODO: Create an array of questions for user input

  const questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',  
        },
        {
            type: 'input',
            message: 'What is the description of this project?',
            name: 'description',
        },
        {   
            type: 'input',
            message: 'What the contents of this project?',
            name: 'contents',
        },
        {
            type: 'input',
            message: 'What is the instruction of installation?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage of installation?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What does this project contribute to?',
            name: 'contributing',
        },
        {
            type: "list",
            message: "Please select a license",
            choices: ["MIT", "Apache"],
            name:"license"
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubusername',
        },
        {
            type: 'input',
            message: 'What is your email address for questions?',
            name: 'email',
        },
    ];

// TODO: Create a function to write REA'DME file
function writeToFile(data) {

    return fs.writeFileSync("README_.md", data);

};

// TODO: Create a function to initialize app
function init() {

        inquirer.prompt(questions).then((answer) => {
            writeToFile(generateMarkdown({ ...answer}));
        });
    };

// Function call to initialize app
init();
