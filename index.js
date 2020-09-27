const inquirer = require("inquirer");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of the Project (Note, this will be the title of your README)?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('This is a very important part, please provide a description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a step-by-step description of how to get the development environment running.',
            validate: installInput => {
                if (installInput) {
                    return true;
                }
                else {
                    console.log("How will people know how to use your tool if they don't know how to get it? Please enter how to install your application.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for how to use your application.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('The people need to know how your application works if they are going to be able to help! Please enter some instructions.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select any and all Licenses that apply. A badge will be added for each.',
            // insert actual license later
            choices: ['Javascript', 'HTML']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can other developers contribute to this project? Please provide guidelines on how to do so.',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                }
                else {
                    console.log('Help other developers help you. Please enter some guidelines on how others can contribute.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide a test for your application, and provide an example on how to run it.',
            validate: testInput => {
                if (testInput) {
                    return true;
                }
                else {
                    console.log('Show off your application. Please provide an example test and how to run it.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'Please provide your Github Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('This is how people will be able to find your work. Please enter your Github Username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('This is how people will be able to get in contact with you if they have any questions. Please enter your email address.');
                    return false;
                }
            }
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
