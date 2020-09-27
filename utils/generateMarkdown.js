// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  #Description

  #Table of Contents

  #Installation

  #Usage

  #License

  #Contributing

  #Tests

  #Questions
  
  `;
}

module.exports = generateMarkdown;


