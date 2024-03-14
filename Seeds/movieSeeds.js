const {
    Movie
} = require('../models');

const movieData = [{
        title: "The Shawshank Redemption",
        releaseYear: 1994,
        director: "Frank Darabont"
    },
    {
        title: "The Godfather",
        releaseYear: 1972,
        director: "Francis Ford Coppola"
    },
    {
        title: "The Dark Knight",
        releaseYear: 2008,
        director: "Christopher Nolan"
    },
    { title: "12", releaseYear: 2019, director: "Yasir Al Yasiri" },
    { title: "The Godfather: Part II", releaseYear: 1974, director: "Francis Ford Coppola" },
    { title: "The Lord of the Rings: The Return of the King", releaseYear: 2003, director: "Peter Jackson" },
    { title: "Pulp Fiction", releaseYear: 1994, director: "Quentin Tarantino" },
    { title: "Schindler's List", releaseYear: 1993, director: "Steven Spielberg" },
    { title: "Inception", releaseYear: 2010, director: "Christopher Nolan" },
    { title: "Fight Club", releaseYear: 1999, director: "David Fincher" },
    { title: "Forrest Gump", releaseYear: 1994, director: "Robert Zemeckis" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", releaseYear: 2001, director: "Peter Jackson" },
    { title: "The Lord of the Rings: The Two Towers", releaseYear: 2002, director: "Peter Jackson" },
    { title: "The Matrix", releaseYear: 1999, director: "Lana Wachowski" },
    { title: "Goodfellas", releaseYear: 1990, director: "Martin Scorsese" },
    { title: "Se7en", releaseYear: 1995, director: "David Fincher" },
    { title: "The Silence of the Lambs", releaseYear: 1991, director: "Jonathan Demme" },
    { title: "City of God", releaseYear: 2002, director: "Fernando Meirelles" },
    { title: "The Usual Suspects", releaseYear: 1995, director: "Bryan Singer" },
    { title: "Léon: The Professional", releaseYear: 1994, director: "Luc Besson" },
    { title: "Life Is Beautiful", releaseYear: 1997, director: "Roberto Benigni" },
    { title: "American History X", releaseYear: 1998, director: "Tony Kaye" },
    { title: "The Green Mile", releaseYear: 1999, director: "Frank Darabont" },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;