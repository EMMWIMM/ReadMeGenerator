// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdowns = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  message: 'What is your Github username?',
  name: 'github'
},
{
  type: 'input',
  message: 'What is your email?',
  name: 'email'
},

  {
  type: 'input',
  message: 'what is the title of your project?',
  name: 'title'
},
{
  type: 'input',
  message: 'give a breif description of your project',
  name:'description'
},
{
  type: 'input',
  message: 'how do you install this application?',
  name: 'install'
},
{
  type: 'input',
  message: 'how should this application be used?',
  name: 'usage'
},
{
  type: 'input',
  message: 'How can others contribute to this project?',
  name: 'contribution'
},
{
  type:'input',
  message: 'how can others test this application?',
  name: 'tests'
},
{
  type: 'list',
  message: 'which license should be shown on this project?',
  choices: [ 'a', 'b', 'c'],
  name: 'license'
}
];

inquirer
.prompt(questions)
.then((response) =>
console.log(response));

const {'github', 'email', 'title', 'description', 'install', 'usage', 'contribution', 'tests', 'license'} = response

// TODO: Create a function to write README file
function writeToFile(README.md, response) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
