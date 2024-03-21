
const { Movie } = require("../models");

const movieData = [
  {
    title: "The Shawshank Redemption",
    releaseYear: 1994,
    director: "Frank Darabont",
    poster: "https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/",
  },
  {
    title: "The Godfather",
    releaseYear: 1972,
    director: "Francis Ford Coppola",
    poster: "https://www.imdb.com/title/tt0068646/mediaviewer/rm10105600/",
  },
  {
    title: "The Dark Knight",
    releaseYear: 2008,
    director: "Christopher Nolan",
    poster: "https://www.imdb.com/title/tt0468569/mediaviewer/rm10105600/",
  },
  { title: "12", releaseYear: 2019, director: "Yasir Al Yasiri" },
  {
    title: "The Godfather: Part II",
    releaseYear: 1974,
    director: "Francis Ford Coppola",
    poster: "https://www.imdb.com/title/tt0071562/mediaviewer/rm10105600/",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    releaseYear: 2003,
    director: "Peter Jackson",
    poster: "https://www.imdb.com/title/tt0167260/mediaviewer/rm10105600/",
  },
  { title: "Pulp Fiction", releaseYear: 1994, director: "Quentin Tarantino" },
  {
    title: "Schindler's List",
    releaseYear: 1993,
    director: "Steven Spielberg",
    poster: "https://www.imdb.com/title/tt0108052/mediaviewer/rm10105600/",
  },
  {
    title: "Inception",
    releaseYear: 2010,
    director: "Christopher Nolan",
    poster: "https://www.imdb.com/title/tt1375666/mediaviewer/rm10105600/",
  },
  {
    title: "Fight Club",
    releaseYear: 1999,
    director: "David Fincher",
    poster: "https://www.imdb.com/title/tt0137523/mediaviewer/rm10105600/",
  },
  {
    title: "Forrest Gump",
    releaseYear: 1994,
    director: "Robert Zemeckis",
    poster: "https://www.imdb.com/title/tt0109830/mediaviewer/rm10105600/",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    director: "Peter Jackson",
    poster: "https://www.imdb.com/title/tt0120737/mediaviewer/rm10105600/",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    releaseYear: 2002,
    director: "Peter Jackson",
    poster: "https://www.imdb.com/title/tt0167261/mediaviewer/rm10105600/",
  },
  {
    title: "The Matrix",
    releaseYear: 1999,
    director: "Lana Wachowski",
    poster: "https://www.imdb.com/title/tt0133093/mediaviewer/rm10105600/",
  },
  {
    title: "Goodfellas",
    releaseYear: 1990,
    director: "Martin Scorsese",
    poster: "https://www.imdb.com/title/tt0099685/mediaviewer/rm10105600/",
  },
  {
    title: "Se7en",
    releaseYear: 1995,
    director: "David Fincher",
    poster: "https://www.imdb.com/title/tt0114369/mediaviewer/rm10105600/",
  },
  {
    title: "The Silence of the Lambs",
    releaseYear: 1991,
    director: "Jonathan Demme",
    poster: "https://www.imdb.com/title/tt0102926/mediaviewer/rm10105600/",
  },
  {
    title: "City of God",
    releaseYear: 2002,
    director: "Fernando Meirelles",
    poster: "https://www.imdb.com/title/tt0317248/mediaviewer/rm10105600/",
  },
  {
    title: "The Usual Suspects",
    releaseYear: 1995,
    director: "Bryan Singer",
    poster: "https://www.imdb.com/title/tt0114814/mediaviewer/rm10105600/",
  },
  {
    title: "Léon: The Professional",
    releaseYear: 1994,
    director: "Luc Besson",
    poster: "https://www.imdb.com/title/tt0110413/mediaviewer/rm10105600/",
  },
  {
    title: "Life Is Beautiful",
    releaseYear: 1997,
    director: "Roberto Benigni",
    poster: "https://www.imdb.com/title/tt0118799/mediaviewer/rm10105600/",
  },
  {
    title: "American History X",
    releaseYear: 1998,
    director: "Tony Kaye",
    poster: "https://www.imdb.com/title/tt0120586/mediaviewer/rm10105600/",
  },
  {
    title: "The Green Mile",
    releaseYear: 1999,
    director: "Frank Darabont",
    poster: "https://www.imdb.com/title/tt0120689/mediaviewer/rm10105600/",
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
