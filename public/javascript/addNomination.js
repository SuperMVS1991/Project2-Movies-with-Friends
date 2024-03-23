var nominateButtons = document.querySelectorAll('.nominate');


console.log("FILE LINKED")


function postNom() {
   console.log('postNom');
   var movieID = this.getAttribute('data-movie-id');
   console.log(movieID);
   var month = dayjs().format('MMMM');
   console.log(month);
   var nomination = {
       movieId: movieID,
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






nominateButtons.forEach(function(button) {
   button.addEventListener('click', postNom); // Don't invoke the function here, just pass the reference
});