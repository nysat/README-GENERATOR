// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n * [License](#license)\n*`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
##### Deployed Application
${data.link}
##### Screenshot
![alt-text](${data.screenshot})
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Test](#test)
* [Questions](#questions)
## Installation 
${data.installation}
## Usage
How to use this application: ${data.usage}
## Contributing
${data.contributing}
## License
${data.license}
## Testing 
${data.test}
## Questions 
If there is any questions please send your questions [here](${data.email}) or visit [github/${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
