// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./src/ReadMe-template');
const writeReadMe = require('./utils/generateReadMe');

console.log(`
=========================================================
            Personalized README Generator
=========================================================
*********************************************************
 - Welcome to README Generator!
 - Follow the prompts and enter the required information.
 - If there are no instructions for a required section,
   press the space-bar followed by enter to continue!
*********************************************************
`);
// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for this project. (Required)',
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('Please enter a name for your application!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'repoLink',
            message: 'Please provide the GitHub link for this application. (Required)',
            validate: repoLinkInput => {
              if (repoLinkInput) {
                return true;
              } else {
                console.log('Please enter a GitHub link for your application!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'gitHubUserName',
            message: 'Please enter your GitHub username. (Required)',
            validate: gitHubUserNameInput => {
              if (gitHubUserNameInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'credits',
            message: 'Please enter any idividuals or sources that helped in the making of this application. (Required)',
            validate: creditsInput => {
              if (creditsInput) {
                return true;
              } else {
                console.log('Please enter information to proceed!');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages did you use to build this application? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide a description of how to use this application (Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('Please enter a application description!');
                return false;
              }
            }
          },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please provide a screenshot of the application. (Required)',
        validate: screenshotInput => {
          if (screenshotInput) {
            return true;
          } else {
            console.log('Please add a sceenshot of your application!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide information on how we can test this application. (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please provide information on how to test this application!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license from the list below:',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You need to enter license option.');
                return false;
            }
        }
    }
    ])
}; 

function generateReadMe() {
    try {
        // Ask user questions and generate responses
        const data = await promptUser();
        const generateReadme = generateReadme(data);
        // Write new README.md to dist directory
        await writeReadMe('./dist/README.md', generateReadMe);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  generateReadMe();  


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


// Function call to initialize app
