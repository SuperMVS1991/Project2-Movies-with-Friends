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

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });

function fetchAndDisplayGenres() {
  const url = 'https://streaming-availability.p.rapidapi.com/genres';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0fd7191d3msh744fc8740a01ac7p1081e7jsn8cd0c4f9b596',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch genres');
      }
      return response.json();
    })
    .then(data => {
      displayGenres(data); // Call function to display genres
    })
    .catch(error => {
      console.error('Error fetching genres:', error);
      const genresDisplay = document.getElementById('genres-display');
      genresDisplay.innerHTML = "Error fetching genres. Please try again later.";
    });
}

/* Function to display genres on the HTML page */
function displayGenres(data) {
  console.log('Data received:', data);
  console.log('Data type:', typeof data);

  const genresDisplay = document.getElementById('genres-display');
  if (data && typeof data === 'object' && data.result) {
    // Extract genre names from the nested object
    const genreNames = Object.values(data.result);
    console.log('Genre names:', genreNames);

    genresDisplay.innerHTML = genreNames.join(', '); // Join array elements with a comma separator
  } else {
    genresDisplay.innerHTML = "No genres found"; // Display a message if no genres are available
    console.error("Genres data not available or in unexpected format:", data);
  }
}
window.addEventListener("DOMContentLoaded", function() {
  // Call the function to fetch and display genres
  fetchAndDisplayGenres();
});