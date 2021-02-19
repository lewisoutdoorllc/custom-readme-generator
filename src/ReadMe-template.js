// TODO: Create a function to generate markdown for README
const renderLicenseBadge = require("./generateLicense");
const generateReadMe = (data) => {
  return ` 
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  
  * [Description](#description)
  * [Installation](#installation)
  * [Languages](#languages-used-for-application-development)
  * [Usage](#usage)
  * [Screenshot](#screenshot-of-landing-page)
  * [Test](#test)
  * [Questions](#questions)
  * [Credits](#credits)
  * [License](#license)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}  
  Link to GitHub Repository:  [${data.title}](https://github.com/${data.gitHubUserName}/${data.repoLink})  
  
  ## Lauguages Used For Application Development
  ${data.languages}
  
  ## Usage
  ${data.usage}

  ## Screenshot of Application
  ![${data.title}](${data.screenShot})

  ## Test
  ${data.test}
  ## Questions

  GitHub Link: (https://github.com/${data.gitHubUserName})

  Contact via Email: ${data.email}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}
  
    `;
};

module.exports = generateReadMe;
