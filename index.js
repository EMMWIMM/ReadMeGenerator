
const fs = require('fs');
const inquirer = require('inquirer');
const markdowns = require('./utils/generateMarkdown.js');
var badge = " ";
var link = " ";

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
  choices: [ 'Apache License 2.0', 'MIT License', 'The Unlicense', 'no license'],
  name: 'license'
}
];

inquirer
.prompt(questions)
.then((response) =>{
  const {github, email, title, description, install, usage, contribution, tests, license} = response

  const markdown= markdowns.generateMarkdown(response);
  markdowns.generateMarkdown(response);
fs.writeFile( response.title +'README.md', markdown, (err) =>   err ? console.error(err) : console.log(markdown));

  console.log(markdown);


});
