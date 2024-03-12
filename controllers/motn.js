
function getMovies(data) {
  var url = 'https://streaming-availability.p.rapidapi.com/genres' + data + '/';
  randomMoviesEl.innerHTML = '';

 
  const url = 'https://streaming-availability.p.rapidapi.com/countries';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0fd7191d3msh744fc8740a01ac7p1081e7jsn8cd0c4f9b596',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};


  fetch(url, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log(data) 
        //call random movies function
        randomMovies(data);      
    });

  }

    function randomMovies(data) {
      for (i = 0; i < 2; i++) {
          var randomMovies = Math.floor(Math.random() * 50);
  
          console.log(data.results[randomMovies].title);
      }
  }

  printMovies(data, oldData, i);


  function printMovies(data, oldData, i) {
    console.log(i);
    var movieTitleId = "movieTitle" + i;
    var movie = oldData + ': ';
    document.getElementById(movieTitleId).innerHTML = movie;
    //this opens up the modal to make it visible
    var instance = M.Modal.getInstance(document.getElementById('movieModal'));
    instance.open();
}