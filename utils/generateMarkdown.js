// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseLink = renderLicenseLink(license);
  if (license == 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${licenseLink})`;
  } else if (license == 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${licenseLink})`;

  } else if (license == 'Apache License 2.0') {
    return `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${licenseLink})`;

  } else if (license == 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseLink})`;

  } else if (license == 'N/A') {
    return '';

  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';

  } else if (license == 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';

  } else if (license == 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';

  } else if (license == 'MIT License') {
    return 'https://opensource.org/licenses/MIT';

  } else if (license == 'N/A') {
    return '';

  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);

  if (license == 'GNU') {
    return `
    GNU GPLv3 ${licenseLink}
    
    
    Copyright (C) 
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <${licenseLink}>`;

  } else if (license == 'Mozilla Public License 2.0') {
    return `Mozilla Public License 2.0 ${licenseLink}

    
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
    If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice.
    
    You may add additional accurate notices of copyright ownership.`;

  } else if (license == 'Apache License 2.0') {
    return `Apache License 2.0 ${licenseLink}

    
  Copyright 
  Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
      ${licenseLink}
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
    `;

  } else if (license == 'MIT License') {
    return `MIT License ${licenseLink}


    Copyright (c)
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

  } else if (license == 'N/A') {
    return 'N/A';

  }

}

// Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseBody = renderLicenseSection(data.license);
  let badge = renderLicenseBadge(data.license);

  return `# ${data.name}
${badge}
## Description
${data.description}
## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation
${data.installation}
## Usage
${data.usage} 
## License
${licenseBody}
## Contribution
${data.partners} 
## Tests
${data.test} 
## Questions - 
  
Feel free to reach me for questions at anytime!
  GitHub URL: https://github.com/${data.github} 
  Email Address: ${data.email} 
`;
}

module.exports = {
  generateMarkdown
};