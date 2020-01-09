const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const genHtml = require("../lib/genHTML");

const writeFileAsync = util.promisify(fs.writeFile);

async function prompt(teamArray){

     let finalInput = "";

     // Whatever is inside the "do" block will run at least once
     // And then it will run again if the while condition is met/fulfilled
     do{
          try{      
               // Taking generic User Info      
               let res = await inquirer.prompt([

                    // Taking input:  Employee Role
                    {
                         type: "list",
                         name: "role",
                         message: "Enter Employee's Role: ",
                         choices: [
                              "Manager",
                              "Engineer",
                              "Intern"
                         ]
                    },
                    
                    // Taking input: Employee Name
                    {
                         type: "input",
                         name: "name",
                         message: "Enter Employee's Name: "
                    },

                    // Taking input: Employee ID
                    {
                         type: "input",
                         name: "id",
                         message: "Enter Employee's ID: ",
                    },
                    
                    // Taking input: Employee Email
                    {
                         type: "input",
                         name: "email",
                         message: "Enter Employee's Email: "
                    }
               ]);

               // Firstly, based on the Employee Role, that the user enters, another question will be asked and stored in res2 
               var res2 = "";

               // If "Manager" ask for that employee's "Office Number"
               // After that create an instance of "Manager" and push it into teamArray
               if(res.role === "Manager"){

                    res2 = await inquirer.prompt([
                         {
                              type: "input",
                              name: "roleSpecific",
                              message: "Enter Manager's Office No.: "
                         }
                    ]);

                    const manager = new Manager(res.name, res.id, res.email, res2.roleSpecific);

                    teamArray.push(manager);
               }

               //If "Engineer" ask for that employee's "Github Username"
               // After that create an instance of "Engineer" and push it into teamArray
               else if(res.role === "Engineer"){

                    res2 = await inquirer.prompt([
                         {
                              type: "input",
                              name: "roleSpecific",
                              message: "Enter Engineer's Github Username: "
                         }
                    ]);

                    const engineer = new Engineer(res.name, res.id, res.email, res2.roleSpecific);

                    teamArray.push(engineer);
               }

               //If "Intern" ask for that employee's "School's Name"
               // After that create an instance of "Intern" and push it into teamArray
               else if(res.role === "Intern"){

                    res2 = await inquirer.prompt([
                         {
                              type: "input",
                              name: "roleSpecific",
                              message: "Enter Intern's School: "
                         }
                    ]);

                    const intern = new Intern(res.name, res.id, res.email, res2.roleSpecific);

                    teamArray.push(intern);
               }  
          }
          catch(err){
               return console.log(err);
          };

          // Asking the user if they want to ADD another User
          // If they type in "Y" then run again, else don't
          finalInput = await inquirer.prompt([
               {
                    type: "input",
                    name: "finish",
                    message: "Do you want to add another employee? Y/N"
               }
          ]);

     }while(finalInput.finish === "y" || finalInput.finish === "Y");     
};


async function main(){

     // Stores all the info of the different types of "Employees"
     let teamArray = [];

     // Will store the all the "cards"
     // It is a template literal
     let teamStr = ``;

     await prompt(teamArray);

     // Loop through the teamArr
     // Send each "employee" one at a time and generate their respective html card, which will be returned and appended to teamStr
     for (let i = 0; i < teamArray.length; i++)
          teamStr += genHtml.generateCard(teamArray[i]);

     // Create the final html code which will be written into a .html file, in this case index.html
     const html = genHtml.generateHTML(teamStr);
     
     // Create the html file
     writeFileAsync("index.html", html);
};

main();