const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

function toggle() {
  var  x = document.getElementById("popup")

  if(x.style.display !== "none"){
    x.style.display = "block";
  }
    else { 
      x.style.display == "none";
  }
};

document.getElementById("discussionName").value;

// TODO: Create a function to write README file
function writeToFile(fileName, value) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), value);
}
