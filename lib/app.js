const inquirer = require("inquirer");

async function prompt(){

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
               }

               else if(res.role === "Engineer"){

                    res2 = await inquirer.prompt([
                         {
                              type: "input",
                              name: "roleSpecific",
                              message: "Enter Engineer's Github Username: "
                         }
                    ]);
               }

               else if(res.role === "Intern"){

                    res2 = await inquirer.prompt([
                         {
                              type: "input",
                              name: "roleSpecific",
                              message: "Enter Intern's School: "
                         }
                    ]);
               }  
          }
          catch(err){
               return console.log(err);
          };

          //push the info from res & res2 into an array
          
          finalInput = await inquirer.prompt([
               {
                    type: "input",
                    name: "finish",
                    message: "Do you want to continue? Y/N"
               }
          ]);

     }while(finalInput.finish === "y" || finalInput.finish === "Y");     
};

async function main(){

     await prompt();
};

main();