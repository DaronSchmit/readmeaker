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
    const fileName = "README.ms";
    let text = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Portfolio</title>
    </head>
    <body>
    <div class="container">
    <div class="row">
    <div class="col-md1-12">
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">${data.username}</h1>
      <p class="lead">${data.description}</p>
      <h2>${data.location}</h2>
      <a href="${data.linkedin}">Visit me on LinkedIn</a>
      <a href="${data.github}">Check out my GitHub</a>
    </div>
    </div>
    </div>
    </div>

    </body>
    </html>`;
    fs.writeFile(fileName, text, (error) =>
      error ? console.log(error) : console.log("Successfully created file!")
    );
    // fs.appendFile(filename, openingHtml);
  });
