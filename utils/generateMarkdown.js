// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
  ## Description
  [![License](https://img.shields.io/badge/License-${data.license}-<Green>.svg)](https://shields.io/)

  ${data.description}

  ## Table of Contents

     [Installation](#installation)
     [Usage](#usage)
     [License](#license)
     [Contributing](#contributing)
     [Tests](#tests)
     [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project uses the ${data.license} license. Check out <a href="https://choosealicense.com">this</a> website for more information on this and other licenses. 

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions and Contact Information
  Learn more about the owner of this project by visiting their Github Profile: <a href=https://github.com/${data.githubUser}>${data.githubUser}</a>

  If you have any questions or concerns about this project, you can get a hold of the owner at ${data.email}! Just send them an email and they will get back to you as soon as they can. 

  `;
}

module.exports = generateMarkdown;


