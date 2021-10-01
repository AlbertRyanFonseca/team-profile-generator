const fs = require('fs');

function generateTemplate() {
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
    </div>
    </div>
    </html>
    `;
}

module.exports = generateTemplate;