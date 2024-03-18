console.log('hello world');

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

function randomMovies(data) {
    for (i = 0; i < 2; i++) {
        var randomMovies = Math.floor(Math.random() * 50);

        console.log(data.results[randomMovies].title);
    }};