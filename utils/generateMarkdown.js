// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
  ## Description
  [![License](https://img.shields.io/badge/License-${data.license}-<Green>.svg)](https://shields.io/)

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project uses the ${data.license} license. Check out <a href="https://choosealicense.com">this</a> website for more information on this and other licenses. 

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Contact
  Learn more about the owner of this project by visiting their Github Profile: <a href=https://github.com/${data.githubUser}>${data.githubUser}</a>

  If you have any questions or concerns about this project, you can get a hold of the owner at ${data.email}! Just send them an email and they will get back to you as soon as they can. 

  `;
}

// The previous block of code is basically for making the "HTML" of the Markdown page. It uses data that the user inputted previously to fill in the sections with it's relevant content. 
// There are also a couple of quality of life amendments, such as making some literals into links as well so as to allow another user to interact with the page. 

module.exports = generateMarkdown;


