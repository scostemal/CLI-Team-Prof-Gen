const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern"); 

const generateHTML = (team) => {
    let html = `<!DOCTYPE html>
    <html>
    <head>
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 10px;
          width: 400px;
          height: 200px;
          margin: 20px;
          float: left;
        }
      </style>
    </head>
    <body>
      <h1>My Team</h1>`;
  
    for (const member of team) {
      html += `
        <div class="card">
          <h2>${member.name}</h2>
          <p><strong>ID:</strong> ${member.id}</p>
          <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
          <p><strong>Role:</strong> ${member.getRole()}</p>`;
  
      if (member instanceof Manager) {
        html += `
          <p><strong>Office Number:</strong> ${member.officeNumber}</p>`;
      } else if (member instanceof Engineer) {
        html += `
          <p><strong>GitHub:</strong> <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></p>`;
      } else if (member instanceof Intern) {
        html += `
          <p><strong>School:</strong> ${member.school}</p>`;
      }
  
      html += `
        </div>`;
    }
  
    html += `
    </body>
    </html>`;
  
    return html;
  };
  
  module.exports = generateHTML;