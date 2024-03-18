const USERID = {
  message: null,
  date: null
}

const userComment = document.querySelector(".usercomment");
const replyComment = document.querySelector(".replyComment");
const publishBtn = document.querySelector("#publish");
const publishReply = document.querySelector("#publishReply");
const local = document.querySelector(".local");
const userName = document.querySelector(".user");
const userNameReply = document.querySelector(".userReply");
const notify = document.querySelector(".notifyinput");

document.addEventListener('DOMContentLoaded', function() {
  // Get the button and div elements by their IDs
  var toggleButton = document.getElementById('addBtn');
  var myDiv = document.getElementById('discussionInput');

  // Add an event listener to the button for click events
  toggleButton.addEventListener('click', function() {
      // Check if the div has the 'hidden' class
      if (myDiv.classList.contains('hidden')) {
          // If it has the class, remove it to show the div
          myDiv.classList.remove('hidden');
      } else {
          // If it doesn't have the class, add it to hide the div
          myDiv.classList.add('hidden');
      }
  });
});

    userComment.addEventListener("input", e => {
        if(!userComment.value) {
            publishBtn.setAttribute("disabled", "disabled");
            publishBtn.classList.remove("abled")
        }else {
            publishBtn.removeAttribute("disabled");
            publishBtn.classList.add("abled")
        }
    })

    function addDiscussion() {
        if(!userComment.value) return;

        USERID.message = userComment.value;
        USERID.date = new Date().toLocaleString();
        let published = 
        `<div id="parents">
            <div id="comment1">
                <a href="discussion">
                <p id="discussionName">${USERID.message}</p>
                </a>
                <button onclick="deleteDiv1()">Delete</button>
                <br>
                <span class="date">${USERID.date}</span>
            </div>    
        </div>`

        local.innerHTML += published;
        userComment.value = "";
        publishBtn.classList.remove("abled")

        let commentsNum = document.querySelectorAll(".date").length;
        document.getElementById("discussion").textContent = commentsNum;


    }

    function deleteDiv1() {
      var element = document.getElementById("parents");
      var commentsNum = document.querySelectorAll(".date").length;
      element.remove();        
      // Update the text content of the element with the ID "discussion" to reflect the new count
      if (element) {
        element.remove();
        commentsNum--; // Decrease the discussion count
        document.getElementById("discussion").textContent = commentsNum;
        }
    };
    //when publish button is clicked discussion is posted
    publishBtn.addEventListener("click", addDiscussion);

    document.getElementById('action-button').addEventListener('click', function() {
      // Redirect to the desired view
      window.location.href = 'discussion'; // Change 'view.html' to the URL of your desired view/page
    });
    