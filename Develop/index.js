// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // write file here
    fs.writeFile(fileName, data, (err) => {
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
