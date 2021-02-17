// TODO: Create a function to generate markdown for README
function generateReadme(data) {
  return ` 
  # ${data.title} Lewis-Weather-Dashboard 
  // ------ INSERT BADGE HERE FOR LICENSE  ------------------------------------ //
  ## ${data.tableOfContents} Table of Contents 
  
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
  Link to GitHub Repository:  [${data.repoLink}](https://github.com/${data.gitHubUserName}/${data.repoLink})  
  
  ## Lauguages Used For Application Development
  ${data.languages}
  
   ##Usage
  ${data.usage}

  ## Screenshot of Application
  ![alt text](${data.screenShot})

  ## Test
  ${data.test}
  ## Questions
  //-------------------------- GitHub ProFile Link Here --------------------------------------------//
  GitHub Link: ${data.gitHubUserName}(https://github.com/${data.gitHubUserName})

  Contact via Email: ${data.email}

  Contact me by Email
  ## Credits
  ${data.credits}

  ## License
  ${data.license}
  // ------ INSERT BADGE HERE FOR LICENSE  --------------------------------------- //
  ${renderLicenseText(data)}
    `;
};

module.exports = generateReadme;
