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

     do{
          try{            
               let res = await inquirer.prompt([

                    //taking Employee role
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
                    
                    //taking Employee name
                    {
                         type: "input",
                         name: "name",
                         message: "Enter Employee's Name: "
                    },

                    //taking Employee ID
                    {
                         type: "input",
                         name: "id",
                         message: "Enter Employee's ID: ",
                    },
                    
                    //taking Employee Email
                    {
                         type: "input",
                         name: "email",
                         message: "Enter Employee's Email: "
                    }
               ]);

               var res2 = "";
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

     let teamArray = [];
     let teamStr = ``;

     await prompt(teamArray);

     for (let i = 0; i < teamArray.length; i++) {
          
          teamStr += genHtml.generateCard(teamArray[i]);
     }

     const html = genHtml.generateHTML(teamStr);
     
     writeFileAsync("index.html", html);
};

main();