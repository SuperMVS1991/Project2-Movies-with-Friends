const { Movie } = require("../models");


const movieData = [
 {
   title: "The Shawshank Redemption",
   releaseYear: 1994,
   director: "Frank Darabont",
   poster: "https://parentguiding.com/wp-content/uploads/2023/07/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI-._V1_SX300.jpg",
 },
 {
   title: "The Godfather",
   releaseYear: 1972,
   director: "Francis Ford Coppola",
   poster: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/07/padrino-3096022.jpg?tf=2048x",
 },
 {
   title: "The Dark Knight",
   releaseYear: 2008,
   director: "Christopher Nolan",
   poster: "https://img.posterstore.com/zoom/wb0037-8batman-thedarkknightrises50x70.jpg",
 },
 {
   title: "The Godfather: Part II",
   releaseYear: 1974,
   director: "Francis Ford Coppola",
   poster: "https://wallsdesk.com/wp-content/uploads/2016/11/talia-shire-Background-.jpg",
 },
 {
   title: "The Lord of the Rings: The Return of the King",
   releaseYear: 2003,
   director: "Peter Jackson",
   poster: "https://www.desktopbackground.org/p/2013/08/11/621161_liv-tyler-as-arwen-wallpaper_1600x900_h.jpg",
 },
  {
   title: "Schindler's List",
   releaseYear: 1993,
   director: "Steven Spielberg",
   poster: "https://th-thumbnailer.cdn-si-edu.com/XWVNLkyMx1btkxNgRd4ldh_lv-8=/1000x750/filters:no_upscale():focal(700x527:701x528)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ce/60/ce606b0a-bd71-43b3-84d6-08811e7828c7/schindlers.jpg",
 },
 {
   title: "Inception",
   releaseYear: 2010,
   director: "Christopher Nolan",
   poster: "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
 },
 {
   title: "Fight Club",
   releaseYear: 1999,
   director: "David Fincher",
   poster: "https://m.media-amazon.com/images/I/81Luju2cHuL._AC_UF894,1000_QL80_.jpg",
 },
 {
   title: "Forrest Gump",
   releaseYear: 1994,
   director: "Robert Zemeckis",
   poster: "https://m.media-amazon.com/images/I/41Al9falobL._AC_UF894,1000_QL80_.jpg",
 },
 {
   title: "The Matrix",
   releaseYear: 1999,
   director: "Lana Wachowski",
   poster: "https://cdn.europosters.eu/image/1300/art-photo/matrix-choose-your-path-i153524.jpg",
 },




];


const seedMovies = () => Movie.bulkCreate(movieData);


module.exports = seedMovies;