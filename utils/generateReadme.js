// generateReadme function for the README.md
function generateReadme(answers) {
    return `<h1>${answers.title}</h1>
  

## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge]
(https://img.shields.io/badge/License-${answers.license}-yellow.svg)
<br />
This app is licensed under ${answers.license}. <br />

## Contributing
${answers.contributing}<br />
## Questions
${answers.questions}<br />
<br />
![github]
(https://github.com/afedoriouk/README-generator)
<br />
Email with questions: ${answers.email}<br />
This README was generated with [README-generator](https://github.com/afedoriouk/README-generator)
    `;
  }
  
  module.exports = generateReadme;