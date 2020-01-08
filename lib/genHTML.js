const generateCard = (employeeInfo) => {
     
     let roleSpecificInfo;

     if(employeeInfo.title === "Manager"){
          
          roleSpecificInfo = employeeInfo.officeNumber;
     }
     else if(employeeInfo.title === "Engineer"){

          roleSpecificInfo = employeeInfo.github;
     }
     else if(employeeInfo.title === "Intern"){

          roleSpecificInfo = employeeInfo.school;
     }

     let htmlCard = `
          <div class="card">
               <div class="card-header">
                    <h2>${employeeInfo.name}</h2>
                    <h2>${employeeInfo.title}</h2>
               </div>

               <div class="card-body">
                    <ul>
                         <li>${employeeInfo.id}</li>
                         <li>${employeeInfo.email}</li>
                         <li>${roleSpecificInfo}</li>
                    </ul>
               </div>
          </div>
     `;

     return htmlCard;
}

const generateHTML = (teamInfo) => {
     
     return `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         
         <title>Team Profile Gen</title>
         
     </head>
     
     <body>
         <div class=header>
             <h1>My Team</h1>
         </div>
         <div class="body">   `+ teamInfo +`    </div>
     </body>
     </html>`;
}

exports.generateCard = generateCard;
exports.generateHTML = generateHTML;