// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  Learn more about the owner of this project by visiting their Github Profile: <a href=https://github.com/${data.githubUser}>${data.githubUser}</a>
  If you have any questions or concerns about this project, you can get a hold of the owner at ${data.email}! Just send them an email and they will get back to you as soon as they can. 

  `;
}

module.exports = generateMarkdown;


