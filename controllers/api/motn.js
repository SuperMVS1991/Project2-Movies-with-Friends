console.log('hello world');

//button that once clicked will give a list of genres 
function generateGenresList() {
    var  x = document.getElementById("genresList")
  
    if(x.style.display !== "none"){
      x.style.display = "block";
    }
      else { 
        x.style.display == "none";
    }
  };
  
const url = 'https://moviesminidatabase.p.rapidapi.com/genres/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0fd7191d3msh744fc8740a01ac7p1081e7jsn8cd0c4f9b596',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};
//grabs all countries and streaming services from database
fetch(url, options)
.then(function (response) {
    return response.json();
})
.then(function (data) {
  console.log(data)    
}); 

function randomMovies(data) {
    for (i = 0; i < 2; i++) {
        var randomMovies = Math.floor(Math.random() * 50);

        console.log(data.results[randomMovies].title);
    }};

const urlGenres = 'https://streaming-availability.p.rapidapi.com/genres';
const optionsGenres = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0fd7191d3msh744fc8740a01ac7p1081e7jsn8cd0c4f9b596',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

//grabs all genres from database
fetch(urlGenres, optionsGenres)
.then(function (response) {
    return response.json();
})
.then(function (data) {
  console.log(data)    
}); 