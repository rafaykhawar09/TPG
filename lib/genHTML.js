const generateCard = (employeeInfo) => {
     
     let roleSpecificInfo;
     let icon;
     //<i class="fas fa-glasses"></i>
     //<i class="fas fa-user"></i>
     //<i class="fas fa-user-graduate"></i>

     if(employeeInfo.title === "Manager"){
          roleSpecificInfo = `Office number: ${employeeInfo.officeNumber}`;
          icon = "fa-user";
     }
     else if(employeeInfo.title === "Engineer"){
          roleSpecificInfo = `GitHub: ${employeeInfo.github}`;
          icon = "fa-glasses";
     }
     else if(employeeInfo.title === "Intern"){
          roleSpecificInfo = `School: ${employeeInfo.school}`;
          icon = "fa-user-graduate";
     }
     let htmlCard = `
          <div class="card">
               <div class="card-header">
                    <h2>${employeeInfo.name}</h2>
                    <h2><i class="fas ${icon}"></i> ${employeeInfo.title}</h2>
               </div>

               <div class="card-body">
                    <ul>
                         <li>ID: ${employeeInfo.id}</li>
                         <li>Email: ${employeeInfo.email}</li>
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

         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
         <link href="https://fonts.googleapis.com/css?family=Righteous|Varela&display=swap" rel="stylesheet">

         <title>Team Profile Gen</title>
         
         <style>
               *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Varela', sans-serif;
               }

               body{
                    width: 100%;
                    height: 100%;
               }

               h1{
                    font-family: 'Righteous', cursive;
               }

               .header{
                    width: 100vw;
                    height: 15vh;
                    background-image: linear-gradient(to right, #2f227e, #b13e91, #ff9043, #f3e878);
                    color: whitesmoke;
                    display: flex;
                    justify-content: center;
                    align-items: center;
               }

               .card-container{
                    display: flex;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
               }

               .card{
                    margin-top: 50px;
                    border:1px solid black;
                    border-radius: 5px;
               }

               .card-header{
                    width: 100%;
                    background:  #2f227e;
                    padding: 20px 70px 20px 10px;
                    color: whitesmoke;
               }

               .card-body{
                    margin: 20px 10px 20px 10px;
                    border: 1px solid lightgrey;
                    border-radius: 3px;
               }

               ul{
                    list-style-type: none;
               }

               li{
                    padding: 5px;
                    font-weight: bold;
               }
               
               li:nth-of-type(2), :nth-of-type(3){
                    border-top: 1px solid lightgrey;
               }
          </style>
     </head>
     
     <body>
         <div class="header">
             <h1>My Team</h1>
         </div>
         <div class="card-container">   `+ teamInfo +`    </div>
     </body>
     </html>`;
}

exports.generateCard = generateCard;
exports.generateHTML = generateHTML;