// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  ${data.contents}(https://github.com/YJRose/special-engine/blob/ccbc6ba1dc69d70053b0e5649936d57faa9d627f/Develop/README_.md)
 
  ## Installation instruction

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contributing}
  
  ### License

  ${renderLicenseBadge(data.license)};

  ### ${data.githubusername}(https://github.com/${data.githubusername})

  ---
  please reach out to me if you have further question via ${data.email}
`;
}

module.exports = generateMarkdown;
