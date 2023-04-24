// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'please enter a title for your project.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'describe the purpose and functionality of this project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'provide installation instructions for this project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'provide the usage info for this project.',
    },
    { 
      type: 'input',
      name: 'contribution',
      message: 'enter the contribution guidlines for this project.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'provide walkthrough of required tests if applicable.',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'please select a license applicable to this project.',
      choices: ["MIT", "APACHE2.0", "Boost1.0", "none"],
    }, 
    {
      type: 'input',
      name: 'username',
      message: 'enter your gitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'enter your email address.',
    },
  ];

// TODO: Create a function to write README file
let fileName = "README.md";
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.log(err);
          return;
        }
    
        console.log(`File ${fileName} created successfully!`);
      });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      writeToFile(fileName, generateMarkdown({ ...responses }));
    });
  }

// Function call to initialize app
init();
