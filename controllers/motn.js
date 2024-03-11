const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/genres',
  headers: {
    'X-RapidAPI-Key': 'e6c23ce8a9mshf3da26607ad49bap1186f7jsn882568b6ee1c',
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

    function randomMovies(data) {
      for (i = 0; i < 2; i++) {
          var randomMovies = Math.floor(Math.random() * 50);
  
          console.log(data.results[randomMovies].title);
      }
  }