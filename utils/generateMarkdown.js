
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `![MIT](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if(license === 'Apache 2.0') {
    return `[Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)`
  } else if(license === 'GNU') {
    return `[GNU](https://img.shields.io/badge/license-GNU%20General%20Public-lightgrey)`
  } else if(license === 'BSD3') {
    return `[BSD3](https://img.shields.io/badge/license-BSD%203-lightgrey)`
  } else if(license === 'none') {
    return ``
  }
}


function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[MIT License Link](https://opensource.org/licenses/MIT)`
  } else if(license === 'Apache 2.0') {
    return `[Apache 2.0 License Link](http://www.apache.org/licenses/)`
  } else if(license === 'GNU') {
    return `[GNU License Link](https://www.gnu.org/licenses/gpl-3.0-standalone.html)`
  } else if(license === 'BSD3') {
    return `[BSD3 License Link](https://www.gnu.org/licenses/gpl-3.0-standalone.html)`
  } else if(license === 'none')
  return ``
}


function renderLicenseSection(license) {
  if(license === 'MIT') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if(license === 'Apache 2.0') {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if(license === 'GNU') {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  } else if(license === 'BSD3') {
    return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the project or its contributors to promote derived products without written consent.`
  } else if(license === 'none') {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#test)
[License](#license)
[Questions](#questions)

## Description

${data.description}

## Installation 

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Questions

${data.questions}
`;
}

module.exports = generateMarkdown;
