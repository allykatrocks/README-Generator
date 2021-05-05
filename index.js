const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your README?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would a user install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would a user use this application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contribution?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing guidelines?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache 2.0', 'GNU', 'BSD3', 'none']
    }
]).then((response) => {
      console.log(response);
      fs.writeFile('Readme2.md', generateMarkdown(response), (err) => err ? console.log(err): console.log('success'));
  })