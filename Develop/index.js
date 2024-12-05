// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "contents",
        message: "What are the contents of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are your installation guidelines?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the project usage info?"
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['Unlicense', 'MIT', 'Apache', 'Berkeley Source Distribution (BSD)', 'Mozilla Public License (MPL)', 'Eclipse Public License (EPL)', 'GNU General Public License (GPL)'],
    },
    {
        type: "input",
        name: "contribute",
        message: "What are your contribution guidelines?"
    },
    {
        type: "input",
        name: "test",
        message: "What are your test instructions?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }
]);


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        fs.writeFile('README.md', generateMarkdown(answers),
            error => {
                if (error) {
                    console.log('Please input all the data')
                }
                console.log('Your README was generated')
            }
        )
    })
}
// Function call to initialize app
init();
