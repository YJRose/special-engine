// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
// TODO: Create an array of questions for user input
/*const questions = ({motivation, reasons, solvedproblems, learning}) => {
    `# README file Generator
     ## Motivation
     ${motivation}.
     ## Reasons
     ${reasons}.
     ## Purpose
     ${solvedproblems}.
     ## Growth
     ${learning}.

    `*/

  const questions = [
        {
            type: 'input',
            message: 'What was your title?',
            name: 'title',  
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'description',
        },
        /*{
            type: 'input',
            message: 'What problem does it solve?',
            name: 'solvedproblems',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learning',
        },*/
        {
            type: "list",
            message: "Please select a license",
            choices: ["MIT", "Apache"],
            name:"license"
        }
    ];

// TODO: Create a function to write REA'DME file
function writeToFile(data) {


    return fs.writeFileSync("TEST.md", data);
    /*const READMEContent = generateMD(answers);
    fs.writeFile(writeFile, READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    ) */

};

// TODO: Create a function to initialize app
function init() {
    /*questions()
        .then((answers) => writeFile('README.md', generateMD(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));*/

        inquirer.prompt(questions).then((answer) => {
            writeToFile(generateMarkdown({ ...answer}));
        });
    };

// Function call to initialize app
init();
