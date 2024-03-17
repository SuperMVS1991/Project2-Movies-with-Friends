const currentDate = new Date(); // Use the current date

window.addEventListener("DOMContentLoaded", function() {
    // Your code here will run when the entire page, including the Handlebars template, is fully loaded
    let phaseName = getCurrentPhase();
    let phaseDisplay = document.getElementById('phase-display');
    phaseDisplay.innerHTML = phaseName;

    let monthName = getCurrentMonth();
    let monthDisplay = document.getElementById('current-month-display');
    monthDisplay.innerHTML = monthName;

    let genreName = getMonthGenre();
    let genreDisplay = document.getElementById('genre-display');
   genreDisplay.innerHTML = genreName;

    let buttonText = getButtonText();
    let buttonDisplay = document.getElementById('action-text');
    buttonDisplay.innerHTML = buttonText;

    let winningMovie = getWinningMovie();
    let winningMovieDisplay = document.getElementById('winning-movie-display');
    winningMovieDisplay.innerHTML = winningMovie;
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
        "Action", "Documentary", "Comedy", "Sci-fi & Fantasy", "Thrillers", "Anime", "Classics", "Horror", "Romance", "Mystery", "Indie Films", "Family Movies"
    ];
    const genre = genres[currentMonth];
    return genre;
}

/* Selects the appropriate button text based on the current phase */
function getButtonText() {
    const phase = getCurrentPhase();
    if (phase === "Nominating") {
        return "Nominate a Movie";
    } else if (phase === "Voting") {
        return "Vote for a Movie";
    } else if (phase === "Discussing") {
        return "Join the Discussion";
    } else {
        return "No current phase";
    }
}

function getWinningMovie() {
    const phase = getCurrentPhase();
    if (phase === "Nominating" || phase === "Voting") {
        return "To be announced!";
    } else {
        /* not sure how to reference the winning movie from the database */
        return "{{Movie}}";
    }
}