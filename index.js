const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            // Title of the Project
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
            // Description Section Information
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please provide a description of your project.');
                    return false;
                }
            }
        },
        {
            // Installation Section Information
            type: 'input',
            name: 'installation',
            message: 'Please provide a step-by-step description of how to get the development environment running.',
            validate: installInput => {
                if (installInput) {
                    return true;
                }
                else {
                    console.log("Please provide an installation guide.");
                    return false;
                }
            }
        },
        {
            // Usage Section Information
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for how to use your application.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('Please enter instructions');
                    return false;
                }
            }
        },
        {
            // License Section Information
            type: 'list',
            name: 'license',
            message: 'Please select the  License that you are using.',
            choices: ['MIT' , 'Apache', 'ISC' , 'GNU GPLv3']
        },
        {
            // Contributing Section Information
            type: 'input',
            name: 'contributing',
            message: 'How can other developers contribute to this project? Please provide guidelines on how to do so.',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                }
                else {
                    console.log('Please provide how developers can help.');
                    return false;
                }
            }
        },
        {
            // Test Section Information
            type: 'input',
            name: 'tests',
            message: 'Please provide a test for your application, and provide an example on how to run it.',
            validate: testInput => {
                if (testInput) {
                    return true;
                }
                else {
                    console.log('Please provide a test.');
                    return false;
                }
            }
        },
        {
            // Github Username for profile link
            type: 'input',
            name: 'githubUser',
            message: 'Please provide your Github Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your Github Username.');
                    return false;
                }
            }
        },
        {
            // Email to provide Contact Information
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
    ]);
};

// function to write README file
function writeToFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, err => {
            // if there is an error, reject the Promise and send the error to the Promise's catch() method
            if (err){
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidently execute the resolve() function as well
                return;
            }
            
            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
}

// function to initialize program
function init() {

    // calls the function using inquirer to get input data. 
    questions()
    // Creates the markdown
    .then(markDownData => {
      return generateMarkdown(markDownData);
    })
    // Writes the file to an .md file and pushes it 
    .then(readmeMarkDown => {
      return writeToFile(readmeMarkDown);
    })
    // Catches any errors from these promises
    .catch(err => {
      console.log(err);
    });

}

// function call to initialize program
init();



