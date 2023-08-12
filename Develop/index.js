// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateMarkdown.js').promises;

// TODO: Create an array of questions for user input
const questions = ({motivation, reasons, solvedproblems, learning}) => {
    `# README file Generater
     ## Motivation
     ${motivation}.
     ## Reasons
     ${reasons}.
     ## Purpose
     ${solvedproblems}.
     ## Growth
     ${learning}.

    `

    return inquirer.prompt([
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
            name: 'solvedproblems',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learning',
        },
    ])
};

// TODO: Create a function to write REA'DME file
function writeToFile() {

    const READMEContent = generateMD(answers);
    fs.writeFile(writeFile, READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    )

};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((answers) => writeFile('README.md', generateMD(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
    }

// Function call to initialize app
init();
