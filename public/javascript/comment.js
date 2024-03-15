const USERID = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
  }
  
  const userComment = document.querySelector(".usercomment");
  const replyComment = document.querySelector(".replyComment");
  const publishBtn = document.querySelector("#publish");
  const publishReply = document.querySelector("#publishReply");
  const comments = document.querySelector(".comments");
  const userName = document.querySelector(".user");
  const userNameReply = document.querySelector(".userReply");
  const notify = document.querySelector(".notifyinput");
  
      userComment.addEventListener("input", e => {
          if(!userComment.value) {
              publishBtn.setAttribute("disabled", "disabled");
              publishBtn.classList.remove("abled")
          }else {
              publishBtn.removeAttribute("disabled");
              publishBtn.classList.add("abled")
          }
      })
  
      function addPost() {
          if(!userComment.value) return;
          USERID.name = userName.value;
          if(!USERID.name) return; 
            else {
              USERID.identity = true;
          }
  
          USERID.message = userComment.value;
          USERID.date = new Date().toLocaleString();
          let published = 
          `<div id="parents">
              <img src="${USERID.image}">
              <div id="comment1">
                  <h1>${USERID.name}</h1>
                  <p>${USERID.message}</p>
                  <button onclick="toggle()">reply</button>
                  <br>
                  <button onclick="deleteDiv1()">Delete</button>
                  <br>
                  <span class="date">${USERID.date}</span>
              </div>    
          </div>`
  
          comments.innerHTML += published;
          userComment.value = "";
          publishBtn.classList.remove("abled")
  
          let commentsNum = document.querySelectorAll(".date").length;
          document.getElementById("comment").textContent = commentsNum;

  
      }

      function subtractComments() {
        // Subtract one from the current count
        let commentsDeleter = querySelectorAll(".date").commentsNum--;
    
        // Update the text content of the element with the ID "comment" to reflect the new count
        document.getElementById("comment").textContent = commentsDeleter;
    }
      //when publish button is clicked comment is posted
      publishBtn.addEventListener("click", addPost);

      //deletes original comment
      function deleteDiv1() {
        var element = document.getElementById("parents");
        var commentsNum = document.querySelectorAll(".date").length;
        element.remove();        
    
    // If the element exists, remove it and update the comment counter
        if (element) {
        element.remove();
        commentsNum--; // Decrease the comment count
        document.getElementById("comment").textContent = commentsNum;
        }
    };
      function toggle() {
        
        var div = document.getElementById("commentreply")
        
        if (div.style.display === "none") {
            div.style.display = "block"; // Show the div
        } else {
            div.style.display = "none"; // Hide the div
        }
        };
      //end of first comment
      //start of reply
      replyComment.addEventListener("input", e => {
        if(!replyComment.value) {
            publishReply.setAttribute("disabled", "disabled");
            publishReply.classList.remove("abled")
        }else {
            publishReply.removeAttribute("disabled");
            publishReply.classList.add("abled")
        }
    })

      function addPostReply() {
        if(!replyComment.value) return;
        USERID.name = userNameReply.value;
        if(!USERID.name) return; 
          else {
            USERID.identity = true;
        }
        //dynamically creates a div for a reply
        USERID.message = replyComment.value;
        USERID.date = new Date().toLocaleString();
        let published = 
        `<div id="parents1">
            <img src="${USERID.image}">
            <div id="comment1">
                <h1>${USERID.name}</h1>
                <p>${USERID.message}</p>
                <button onclick="toggle2()">reply</button>
                <br>
                <button onclick="deleteDiv2()">Delete</button>
                <br>
                <span class="date">${USERID.date}</span>
            </div>    
        </div>`

          comments.innerHTML += published;
          replyComment.value = "";
          userNameReply.value ="";
          publishReply.classList.remove("abled")
  
          let commentsNum = document.querySelectorAll(".date").length;
          document.getElementById("comment").textContent = commentsNum;

          hideReply();
        }

        //function to remove comment when delete button is clicked
        function deleteDiv2() {
        var element = document.getElementById("parents1");
        var commentsNum = document.querySelectorAll(".date").length;
        element.remove();        
    
    // If the element exists, remove it and update the comment counter
        if (element) {
        element.remove();
        commentsNum--; // Decrease the comment count
        document.getElementById("comment").textContent = commentsNum;
        };

        var counterElement = document.getElementById("commentsCounter");
        var currentCount = parseInt(counterElement.textContent);
        if (!isNaN(currentCount) && currentCount > 0) {
            counterElement.textContent = currentCount - 1;
        }
        }

        //when publish button is clicked textbox disapears
        function hideReply() {
        var divToHide = document.getElementById("commentreply");
        divToHide.style.display = "none";
        }

        //when publish button is clicked reply is posted 
        publishReply.addEventListener("click", addPostReply)


        function toggle2() {
          var div = document.getElementById("commentreply");
    
          if (div.style.display === "none") {
            div.style.display = "block"; // Show the div
          } else {
            div.style.display = "none"; // Hide the div
          }

        };

     console.log('working');