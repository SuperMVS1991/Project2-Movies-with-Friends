// Define an array to store movie objects
const movies = [];

// Define a function to add a new movie to the array

// Define a function to display all movies in the array
function displayMovies() {
    movies.forEach(movie => {
        console.log(`Title: ${movie.title}`);
        console.log(`Director: ${movie.director}`);
        console.log(`Year: ${movie.year}`);
        console.log('-------------------');
    });
}

displayMovies();