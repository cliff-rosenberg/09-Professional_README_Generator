// packages needed for this application
// converted to ES6 notoation
import { writeFile } from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // write file here
    writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('The README file was correctly written out...')
        };
    });
};

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
