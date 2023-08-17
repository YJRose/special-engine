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

  ${data.contents}(https://github.com/YJRose/special-engine/blob/d010caedd91d43179b98dc832a49bb65408c5d0b/README.md)

  ### License

  ${renderLicenseBadge(data.license)};

  ### ${data.githubusername}(https://github.com/${data.githubusername})

  ---
  please reach out to me if you have further question via ${data.email}
`;
}

module.exports = generateMarkdown;
