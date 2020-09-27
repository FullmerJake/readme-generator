const inquirer = require("inquirer");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of the Project (Note, this will be the title of your README)?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'confirm',
            name: 'contentsTable',
            message: 'Would you like a table of contents?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for how to use your application.'
        },
        {
            type: '',
            name: 'license',
            message: 'Please select any and all Licenses that apply. A badge will be added for each.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can other developers contribute to this project? Please provide guidelines on how to do so.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide a test for your application, and provide an example on how to run it.'
        }
    ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
