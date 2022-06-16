// TODO: Include packages needed for this application
const generateReadMe = require('./utils/generateReadme')
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
   
        {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        },
        {
          type: 'input',
          name: 'title',
          message: "Name for this project?",
        },
        {
          type: 'input',
          name: 'description',
          message: 'Description of your project',
        },
        {
          type: 'list',
          name: 'license',
          message: 'What kind of license applicable for this project?',
          choices: ['APACHE 2.0', 'GPL 3.0', 'BSD 3', 'MIT', 'None']
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What is the installation process?',
          default: 'npm i',
        },
        {
          type: 'input',
          name: 'test',
          message: 'What command used to run tests?',
          default: 'npm test'
        },
        
        {
          type: 'input',
          name: 'usage',
          message: 'How to use the repo?',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'How to contribute to the repo?',
        },
        {
          type: 'input',
          name: 'questions',
          message: 'Do you have any questions?',
        }
      ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
      console.log('Generating README...');
      writeToFile('README.md', generateReadMe({ ...inquirerResponses }));
    });
  }
  
  

// Function call to initialize app
init();
