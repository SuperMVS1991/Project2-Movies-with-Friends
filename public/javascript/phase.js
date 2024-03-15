window.addEventListener("DOMContentLoaded", function() {
    // Your code here will run when the entire page, including the Handlebars template, is fully loaded
    getCurrentPhase();
});


/* Checks the current date to determine the phase of site activity */
function getCurrentPhase(currentDate) {
    const currentDate = new Date(); // Use the current date
    const currentPhase = getCurrentPhase(currentDate);
    const phases = [
        { name: "Nomination", start: 1, end: 5 },
        { name: "Voting", start: 6, end: 7 },
        { name: "Discussion", start: 8, end: 31 }
    ];
    const currentDay = currentDate.getDate();
  
    for (let phase of phases) {
        if (currentDay >= phase.start && currentDay <= phase.end) {
            return phase.name;
        }
    }
  
  console.log(getCurrentPhase());

  let phaseDisplay = document.getElementById('phase-display');
  phaseDisplay.textContent = phase.name;

}  