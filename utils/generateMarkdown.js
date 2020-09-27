// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${description}
  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests}
  ## Questions
  ${githubUser}
  ${email}

  `;
}

module.exports = generateMarkdown;


