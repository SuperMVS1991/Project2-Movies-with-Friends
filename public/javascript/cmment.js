console.log("button needs work");

const userComment = document.querySelector(".userComment");
const publishBtn = document.querySelector("#publish");

function addPost() {
  if(!userComment.value) return;
  userId.name = userName.value;
  userId.message = userComment.value;
}

comments.innerHTML += publish;
userComment.value = "";