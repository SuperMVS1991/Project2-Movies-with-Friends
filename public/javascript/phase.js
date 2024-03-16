const currentDate = new Date(); // Use the current date

window.addEventListener("DOMContentLoaded", function() {
    // Your code here will run when the entire page, including the Handlebars template, is fully loaded
    let phaseName = getCurrentPhase();
    let phaseDisplay = document.getElementById('phase-display');
    phaseDisplay.innerHTML = phaseName;

    let monthName = getCurrentMonth();
    let monthDisplay = document.getElementById('current-month-display');
    monthDisplay.innerHTML = monthName;
});

/* Checks the current date to determine the phase of site activity */
function getCurrentPhase() {
    const phases = [
        { name: "Nominating", start: 1, end: 5 },
        { name: "Voting", start: 6, end: 7 },
        { name: "Discussing", start: 8, end: 31 }
    ];
    const currentDay = currentDate.getDate();
  
    for (let phase of phases) {
        if (currentDay >= phase.start && currentDay <= phase.end) {
            return phase.name;
        }
    }
    return "No current phase"; // Return this if no phase matches the current date
}  

/* Returns the current month */
function getCurrentMonth() {
    const currentMonth = currentDate.getMonth();
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    const monthName = months[currentMonth];
    return monthName;
}

/* Returns the month's movie genre */
function getMonthGenre() {
    const currentMonth = currentDate.getMonth();
    const genres = [
        "Drama", "Romance", "Comedy", "Action", "Horror", "Documentary",
        "Science Fiction", "Fantasy", "Mystery", "Thriller", "Adventure", "Animation"
    ];
    const genre = genres[currentMonth];
    return genre;
}