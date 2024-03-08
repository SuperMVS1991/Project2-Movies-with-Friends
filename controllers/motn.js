const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/genres',
  headers: {
    'X-RapidAPI-Key': 'e6c23ce8a9mshf3da26607ad49bap1186f7jsn882568b6ee1c',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}