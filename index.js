const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your README?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a brief description of your project.'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Input your Table of Contents here.'
    },
    {
        type: 'input',
        name: 'Installation Instructions',
        message: 'How would a user install this application?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How would a user use this application?'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What are the guidelines for contribution?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What are the testing guidelines?'
    }
]).then((response) => {
      console.log(response);
      fs.writeFile('Readme2.md', `
      # ${response.title}
      Website: https://allykatrocks.github.io/homework-weather/
      
      `, (err) => err ? console.log(err): console.log('success'));
  })