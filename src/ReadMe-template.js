// TODO: Create a function to generate markdown for README
const renderLicenseBadge = require("./generateLicense");
const generateReadMe = (data) => {
  return ` 
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  
  * [Description](#description)
  * [Installation](#installation)
  * [Languages](#languages)
  * [Usage](#usage)
  * [Screenshot](#screenshot)
  * [Test](#test)
  * [Contribute](#contribute)
  * [Questions](#questions)
  * [Credits](#credits)
  * [License](#license)
  
  ## Description

  ${data.description}
  
  ## Installation

  ${data.installation}  
  Link to GitHub Repository: ${data.repoLink}
  
  ## Languages
  
  ${data.languages}
  
  ## Usage

  ${data.usage}

  ## Screenshot
    
  ![${data.title}](${data.screenShot})

  ## Test

  ${data.test}

  ## Contribute

  ${data.contribute}

  ## Questions  

  GitHub Link: https://github.com/${data.gitHubUserName}
  
  Contact via Email: ${data.email}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}
  
    `;
};

module.exports = generateReadMe;
