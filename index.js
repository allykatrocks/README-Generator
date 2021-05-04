const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your README?',
    }
]).then((response) => {
      console.log(response);
      fs.writeFile('Readme2.md', `
      # ${response.title}
      Website: https://allykatrocks.github.io/homework-weather/
      
      `, (err) => err ? console.log(err): console.log('success'));
  })