const fs = require('fs');

function generateTemplate() {

    const internArr = employeeArr.filter(intern => intern.getRole() === 'Intern');
    const internCard = internArr.map(intern => {
        return ` 
    <div class= "col-3 mx-auto">
    <div class="card m-3 shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body bg-info">
      <h5 class="card-title">${intern.getName()}</h5>
      <p class="card-text"><span class="material-icons">
      school
      </span>
      ${intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email:<a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
   
  </div>
  </div>
  `;
    })
    const internInfo = internCard.join(' ');

    const managerArr = employeeArr.filter(manager => manager.getRole() === 'Manager');
    const managerCard = managerArr.map(manager => {
        return `
    <div class= "col-3 mx-auto">
    <div class="card m-3 shadow p-3 mb-5 bg-body rounded " style="width: 18rem;">
    <div class="card-body bg-info">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
      <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
    </svg>
    ${manager.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">OfficeNumber: ${manager.getOfficeNumber()}</li>
    </ul>
   
  </div>
  </div>
  `;
    });
    const managerInfo = managerCard.join(' ');

    const engineerArr = employeeArr.filter(engineer => engineer.getRole() === 'Engineer');
    const engineerCard = engineerArr.map(engineer => {
        return `
    <div class= "col-3 mx-auto">
    <div class="card m-3 shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body bg-info">
      <h5 class="card-title">${engineer.getName()}</h5>
      <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
      <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
    </svg>
    ${engineer.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email:<a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href = "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
    </ul>
   
  </div>
  </div>
  `;
    });
    const engineerInfo = engineerCard.join(' ');



    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
        crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
        <title>Team Generator</title>
    </head>
        <body>
            <header class = "bg-info pt-1" style = "height: 65px;">
                <h1 class = "text-center" >My Team</h1>
            </header>

            <div class="container vh-100"> 
                <div class = "row justify-content-center align-items-center vh-100">
                    
                    ${internInfo}
                    ${managerInfo}
                    ${engineerInfo}
                    
                </div>
            </div>
    </html>
    `;
}

module.exports = generateTemplate;