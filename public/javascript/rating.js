const addRating = document.getElementById("addRating");

addRating.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("clicked");
  const rating = document.getElementById("rating").value;
  const title = document.getElementById("title").value;
  const review = document.getElementById("review").value;

  const url = window.location.href;

  // Splitting the URL by the '/' delimiter and accessing the last segment
  const segments = url.split("/");

  const lastSegment = segments[segments.length - 1];

  // Extracting the last number from the last segment
  const lastNumber = parseInt(lastSegment);

  if (rating && title && review) {
    const response = await fetch("/api/movie/", {
      method: "POST",
      body: JSON.stringify({ lastNumber, rating, title, review }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
    } else {
      alert("Failed to add rating");
    }
  }
});
