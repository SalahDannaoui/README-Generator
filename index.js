// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const createMarkdown = require('./utils/generateMarkdown.js');


// Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What's your project called?",
    },
    {
      type: 'input',
      message: "Provide a short description of your project",
      name: 'description',
    },
    {
      type: 'input',
      message: "What are the steps required to install your project?",
      name: 'installation',
    },
    {
      type: 'input',
      message: "Provide usage instructions and examples cases. ",
      name: 'usage',
    },
    {
      type: 'list',
      message: "Choose your License.",
      name: 'license',
      choices: ['GNU',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'No License'],
    },
    {
      type: 'input',
      message: "List your collaborators, if any, with links to their GitHub profiles.",
      name: 'partners',
    },
    {
      type: 'input',
      message: "Provide tests for you application.",
      name: 'test',
    },
    {
      type: 'input',
      message: "What is your Github username?",
      name: 'github',
    },
    {
      type: 'input',
      message: "What is your email address?",
      name: 'email',
    },
  ]

// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, createMarkdown.generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Successfully created README file')
    );
}

// Create a function to initialize app
const init = (questions) => {
    inquirer.prompt(questions)
    .then((data) => {
      const fileName = `${data.name.toUpperCase().split(' ').join('')}.md`;
  
        // console.log(filename);
      writeToFile (fileName, data);
    });
  
};

// Function call to initialize app
init(questions);