function getMovies() {
const urlGenres = 'https://streaming-availability.p.rapidapi.com/genres';
const url = 'https://streaming-availability.p.rapidapi.com/countries';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0fd7191d3msh744fc8740a01ac7p1081e7jsn8cd0c4f9b596',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

fetch(url, urlGenres, options)
.then(function (response) {
    return response.json();
})
.then(function (data) {

    randomMovies(data);      
}); 
};


function randomMovies(data) {
    for (i = 0; i < 5; i++) {
        var randomMovies = Math.floor(Math.random() * 50);

    }};

