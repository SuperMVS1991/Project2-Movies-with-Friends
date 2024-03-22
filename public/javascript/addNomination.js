var nominate = document.getElementById('nominate'); 

console.log("FILE LINKED")

 function postNom() { 
    console.log('postNom');
    var movieId = nominate.getAttribute('data-movie-id'); 
    console.log(movieId);
    var month = dayjs().format('MMMM'); 
    console.log(month);
    var nomination = {
        movieID: movieId,
        month: month,
    };
    fetch('/api/nomination', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nomination),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}










nominate.addEventListener('click', postNom());