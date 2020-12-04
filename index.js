const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is this project's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is a good description of your project?",
      name: "description",
    },
    {
      type: "input",
      message: "How does a user install this?",
      name: "installation",
    },
    {
      type: "input",
      message: "How does a user use this project?",
      name: "usage",
    },
    {
      type: "input",
      message: "Do you have any credits to give?",
      name: "credits",
    },
    {
      type: "input",
      message: "Does this project have a license?",
      name: "license",
    },
  ])
  .then((data) => {
    const fileName = "README.md";
    let text = `# ${data.name}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}


## Credits
${data.credits}

## License
${data.license}`;

    fs.writeFile(`./newREADME/${fileName}`, text, (error) =>
      error ? console.log(error) : console.log("Successfully created file!")
    );
    // fs.appendFile(filename, openingHtml);
  });
