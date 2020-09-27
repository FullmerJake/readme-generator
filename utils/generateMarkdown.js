// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  test

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation
  test

  ## Usage
  test

  ## License
  tset

  ## Contributing
  test

  ## Tests
  test
  
  ## Questions
  test

  `;
}

module.exports = generateMarkdown;


