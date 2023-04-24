// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let link;
  if (String(data.license) === 'MIT') {
      link = '[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (String(data.license) === 'Apache') {
      link = '[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (String(data.license) === 'Boost') {
      link = '[![license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else {
      link = '';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    let licenseSection = '';
    if (data.license !== 'none') {
        licenseSection = `## License\nThe Application is covered under ${data.license} license\nLearn more about the license from the following link: ${renderLicenseLink(data)}\n`;
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

 //contents  
 let table = ['description','installation', 'usage', 'license', 'contribution', 'test', 'questions'];
 let res ='';
 for(let i=0; i<table.length; i++){
   res+= `- [${table[i]}](#${table[i]})\n`;
 }
  
 
return `# ${data.title} 
${renderLicenseSection(data)}
## ${table[0]}\n

${data.description}\n

## table of contents
-  [Description](#description)
-  [Installation](#installation)
-  [Usage](#usage)
-  [Contribution](#contribution)
-  [Test](#test)
-  [Questions](#questions)

## Installation
${data.installation}\n

## Usage
${data.usage}\n

## Contribution
${data.contribution}\n

## Test
${data.test}\n

## Questions
github: ${data.username}. [click here](https://github.com/${data.username}) to visit my github profile.\n
please send additional questions to:${data.email}.\n
`;
}

module.exports = generateMarkdown;
