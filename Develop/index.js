// packages needed for this application
// converted to ES6 notation
import { writeFile } from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Give the project title (REQUIRED)',
        validate: titleInp => {
            if (titleInp) {
                return true;
            } else {
                console.log("You must enter a project title")
            }
        }
    },
    {
        name: 'licensing',
        type: 'list',
        message: 'Choose license type project (REQUIRED)',
        choices: licenseTypes,
        validate: licensingInp => {
            if (licensingInp) {
                return true;
            } else {
                console.log("Please pick a license for the project");
                return false;
            }
        }
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter a description for the project (REQUIRED)',
        validate: descriptionInp => {
            if (descriptionInp) {
                return true;
            } else {
                console.log('Please provide a project description');
                return false;
            }
        }
    },
    {
        name: 'installation',
        type: 'input',
        message: 'How do you install this project? (REQUIRED)',
        validate: installationInp => {
            if (installationInp) {
                return true;
            } else {
                console.log('Please provide installation info for this project');
                return false;
            }
        }
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How is this project used? (REQUIRED)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how to use project');
                return false;
            }
        }
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information on how to contribute to this project');
                return false;
            }
        }
    },
    {
        name: 'testing',
        type: 'input',
        message: 'How do you test the project? (REQUIRED)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please describe how to test the project');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // write file here
    writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('The README file was correctly written out...');
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    const licenseTypes = ["AGPL 3.0", "Apache 2.0", "GPL 3.0", "LGPL 3.0", "MIT", "MPL 2.0", "Unlicense"];
    inquirer.prompt(questions)
    .then(function (usersInput) {
        console.log(usersInput);// testing
        //writeToFile("README.md", generateMarkdown(usersInput));
        const readmeContents = generateMarkdown(usersInput);
        console.log(readmeContents);
    });
};

// Function call to initialize app
init();
