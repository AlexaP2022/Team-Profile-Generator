const generateTeam = (team) => {
    console.log(team);

    let html = "";
    for(i = 0; i < team.length; i++) {
        if(team[i].getRole() === "Manager"){
            html = html + `<div class="col-sm-3"><div class="card">
            <div class="card body"><h3 class="card-title">${team[i].getName()}</h3>
            <h5 class="card-subtitle mb-2 text-muted">☕ ${team[i].getRole()}</h5>
            </div></div>
            <div>
                <ul>
                    <li>ID: ${team[i].getId()}</li>
                    <li>Email:<a href=mailto:${team[i].getEmail()}>${team[i].getEmail()}</a></li> 
                    <li>Office: ${team[i].getofficeNumber()}</li>
                </ul>
            </div>
            </div>
            `
        }
        if(team[i].getRole() === "Intern"){
            html = html + `
            <div class="col-sm-3"><div class="card">
            <div class="card body"><h3 class="card-title">${team[i].getName()}</h3>
            <h5 class="card-subtitle mb-2 text-muted">👩🏻‍🎓 ${team[i].getRole()}</h5>
            </div></div>
            <div>
                <ul>
                    <li>ID: ${team[i].getId()}</li>
                    <li>Email:<a href=mailto:${team[i].getEmail()}>${team[i].getEmail()}</a></li> 
                    <li>School: ${team[i].getSchool()}</li>
                </ul>
            </div>
            </div>
            `
        }
        if(team[i].getRole() === "Engineer"){
            html = html + `
            <div class="col-sm-3"><div class="card">
            <div class="card body"><h3 class="card-title">${team[i].getName()}</h3>
            <h5 class="card-subtitle mb-2 text-muted">👓 ${team[i].getRole()}</h5>
            </div></div>
            <div>
                <ul>
                    <li>ID: ${team[i].getId()}</li>
                    <li>Email:<a href=mailto:${team[i].getEmail()}>${team[i].getEmail()}</a></li> 
                    <li>Github Username: <a target="_blank" href="https://github.com/${team[i].getgitHubUN()}">${team[i].getgitHubUN()}</a></li>
                </ul>
            </div>
            </div>
            `
        }
    }
    const generateManager = manager => {
        
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
            <p class="lead">Contact information for team members<p>
        </div>
    </div>
    </head>
    <body>
        <div class="row">
        ${html}
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </html>`
}

module.exports = generateTeam;