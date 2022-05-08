// SPDX-License-Identifier: MIT
// Function that returns a license badge,
// based on which license is passed in.
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'AGPL 3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'LGPL 3.0':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    case 'MPL 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';  
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  };

};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'AGPL 3.0':
      return 'Link: [![AGPL 3.0 License](https://opensource.org/licenses/AGPL-3.0';
    case 'Apache 2.0':
      return 'Link: [![Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return 'Link: [![GPL 3.0 License](https://opensource.org/licenses/GPL-3.0)';
    case 'LGPL 3.0':
      return 'Link: [![LGPL 3.0 License](https://opensource.org/licenses/unlicense)';
    case 'MIT': 
      return 'Link: [![MIT License](https://opensource.org/licenses/MIT)';
    case 'MPL 2.0':
      return 'Link: [![MPL 2.0 License](https://opensource.org/licenses/MPL-2.0)';
    case 'Unlicense':
      return 'Link: [![The Unlicense](https://opensource.org/licenses/unlicense)';
    default:
      return '';
  //all licenses at Open Source Initative: https://opensource.org/
  };
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const licenseSection = badge + '\n\n\n' + link;
  return licenseSection;
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Licensing:
  ${renderLicenseSection(data.licensing)}

## Description:
  ${data.description}

## Installation:
  ${data.installation}

## Usage:
  ${data.usage}

## License
  ${data.licensing}

## Contributing:
  ${data.contribution}
  [Contributor Covenant v2.1 text here](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Testing
  ${data.testing}

## Additional Info:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
};

module.exports = generateMarkdown;
