window.addEventListener("DOMContentLoaded", function() {
    // Your code here will run when the entire page, including the Handlebars template, is fully loaded
    let phaseName = getCurrentPhase();
    let phaseDisplay = document.getElementById('phase-display');
    phaseDisplay.innerHTML = phaseName;
});

/* Checks the current date to determine the phase of site activity */
function getCurrentPhase() {
    const currentDate = new Date(); // Use the current date
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
    return "No current phase"; // Return this if no phase matches the current date
}  