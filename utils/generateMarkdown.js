
var badge = " badge";
var link = "link";

function renderLicenseBadge(response) {

  if(response.license == "Apache License 2.0") {
     badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (response.license == "MIT License") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (response.license == "The Unlicense") {
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else {
    badge = " "
  }
  return badge
};



function renderLicenseLink(response) {
  if(response.license === "Apache License 2.0") {
     link = "https://choosealicense.com/licenses/apache-2.0/"
  } else if (response.license === "MIT License") {
    link = "https://choosealicense.com/licenses/mit/"
  } else if (response.license === "The Unlicense") {
    link = "[https://choosealicense.com/licenses/unlicense/"
  } else {
    link = " "
  }
  return link
};

function generateMarkdown(response) {
  return `# ${response.title}
  `
  + renderLicenseBadge(response) +
  `
  ${response.description} .

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${response.install}

  ## Usage
 ${response.usage}

  ## Contribution
 ${response.contribution}

## Test Instructions
${response.tests}

## Questions
for further questions please send an email to ${response.email} or refer to my Github page github.com/${response.github} .

## License
` + renderLicenseLink(response)
}

module.exports = {
  generateMarkdown,
};
