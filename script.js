/*
=== PIKACHU SOCIAL MEDIA POST - DOM MANIPULATION ACTIVITY ===

In this activity, you'll practice DOM manipulation 
to add interactive comments to the post.

LEARNING OBJECTIVES:
- Use getElementById() to select specific elements
- Use getElementsByClassName() and querySelector() to find elements
- Create new elements with createElement()
- Add text content with createTextNode()
- Attach elements to the DOM with appendChild()
- Set attributes with setAttribute()
- Remove elements with remove()

INSTRUCTIONS:
Complete each TODO section below. Read the comments carefully and follow the steps!
*/

// ========== EXISTING CODE (FROM OUR PREVIOUS ACTIVITY) ==========
// Variables to modify
let username = "Pikachu";
let followers = 1500;
let likes = 100;
let isLiked = false;

// Function to update the display with current variable values
function updateDisplay() {
  document.getElementById("username").textContent = username;
  document.getElementById("followers").textContent = followers + " followers";
  document.getElementById("like-count").textContent = likes;
}

// Function to toggle the like button
function toggleLike() {
  let heart = document.getElementById("heart");
  let likeCount = document.getElementById("like-count");
  if (isLiked) {
    // Unlike the post
    heart.textContent = "♡";
    heart.classList.remove("liked");
    likes = likes - 1;
    isLiked = false;
  } else {
    // Like the post
    heart.textContent = "♥";
    heart.classList.add("liked");
    likes = likes + 1;
    isLiked = true;
  }
  // Update the like count display
  likeCount.textContent = likes;
}

// ========== NEW CODE FOR COMMENTS FUNCTIONALITY ==========

/*
TODO #1: Create a function called 'addComment'
This function should:
1. Get the comment text from the input field with id "comment-text"
2. Get the commenter name from the input field with id "commenter-name"
3. Check if both fields have content (not empty)
4. If valid, create a new comment and add it to the comments container
5. Clear the input fields after adding the comment

HINT: Use getElementById() to get the input elements, then use .value to get their content
*/

function addComment() {
  // Step 1: Get the input elements using getElementById()
  // TODO: Create variables for commentInput and nameInput
  let commentInput = document.getElementById("comment-text");
  let nameInput = document.getElementById("commenter-name");

  // Step 2: Get the text content from the inputs
  // TODO: Create variables for commentText and commenterName using .value
  let commentText = commentInput.value;
  let commenterName = nameInput.value;

  // Step 3: Validate the inputs (check if they're not empty)
  // TODO: Use if statement to check if both commentText and commenterName have content
  // HINT: You can use trim() to remove extra spaces: commentText.trim() !== ""
  if (commentText.trim() !== "" && commenterName.trim() !== "" ){
    // Step 4: Create the comment element
    // TODO: Call the createCommentElement function (we'll write this next!)
    let newComment = createCommentElement(commenterName, commentText);
    // Step 5: Add the comment to the container
    // TODO: Use getElementById() to get "comments-container", then appendChild()
    let commentsContainer = document.getElementById("comments-container");
    commentsContainer.appendChild(newComment);
    // Step 6: Clear the input fields
    // TODO: Set both input.value to empty strings ""
    commentInput.value = "";
    nameInput.value = "";

    // Update the comment count
    countComments();
  } else {
    // If inputs are invalid, show an alert
    // TODO: Add an else statement with alert("Please fill in both fields!")
    alert("Please fill in both fields!");
  }
}

/*
TODO #2: Create a function called 'createCommentElement'
This function should:
1. Take two parameters: author and text
2. Create a new div element for the comment
3. Set up the HTML structure for the comment
4. Add a delete button with functionality
5. Return the completed comment element

HINT: Use createElement(), createTextNode(), appendChild(), and setAttribute()
*/

function createCommentElement(author, text) {
  // Step 1: Create the main comment div
  // TODO: Use createElement() to create a div element
  let commentDiv = document.createElement("div");

  // Step 2: Set the CSS class for styling
  // TODO: Use setAttribute() to set the class to "comment"
  commentDiv.setAttribute("class", "comment");

  // Step 3: Create the author element (strong tag)
  // TODO: Create a strong element and set its textContent to the author
  // HINT: Use createElement("strong") and then set textContent


  // Step 4: Set CSS class for the author
  // TODO: Use setAttribute() to set the class to "comment-author"


  // Step 5: Create the comment text element (span)
  // TODO: Create a span element and set its textContent to the text


  // Step 6: Set CSS class for the comment text
  // TODO: Use setAttribute() to set the class to "comment-text"


  // Step 7: Create the delete button
  // TODO: Create a button element with textContent "Delete"


  // Step 8: Set CSS class and click event for delete button
  // TODO: Set class to "delete-btn" and add onclick event
  // HINT: deleteBtn.onclick = function() { commentDiv.remove(); };


  // Step 9: Assemble the comment by adding all parts to the main div
  // TODO: Use appendChild() to add authorElement, textElement, and deleteBtn to commentDiv




  // Step 10: Return the completed comment element
  // TODO: Return the commentDiv

}

/*
TODO #3: Create a function called 'setupEventListeners'
This function should:
1. Find the "Add Comment" button
2. Add a click event listener to call addComment()
3. Add an event listener to the comment text input for "Enter" key press

HINT: Use getElementById() and addEventListener()
*/

function setupEventListeners() {
  // Step 1: Get the add comment button
  // TODO: Use getElementById() to get the button with id "add-comment-btn"


  // Step 2: Add click event listener
  // TODO: Use addEventListener() to listen for "click" events and call addComment


  // Step 3: Get the comment text input for Enter key functionality
  // TODO: Use getElementById() to get "comment-text"


  // Step 4: Add keypress event listener for Enter key
  // TODO: Add event listener for "keypress" that checks if Enter was pressed
  // HINT: if (event.key === "Enter") { addComment(); }

}

/*
TODO #4: Create a function called 'deleteAllComments'
This function should:
1. Find all elements with class "comment"
2. Remove each comment element
3. Show a confirmation message

HINT: Use getElementsByClassName() or querySelectorAll()
*/

function deleteAllComments() {
  // Step 1: Get all comment elements
  // TODO: Use getElementsByClassName() to get all elements with class "comment"


  // Step 2: Convert to array and remove each comment
  // TODO: Use Array.from() to convert the collection, then forEach() to remove each
  // HINT: Array.from(comments).forEach(comment => comment.remove());


  // Step 3: Show confirmation
  // TODO: Use alert() to show "All comments deleted!"

}

/*
TODO #5: Create a function called 'countComments'
This function should:
1. Find all comment elements
2. Return the number of comments
3. Update the comments section header to show the count

HINT: Use querySelectorAll() and update the h4 element
*/

function countComments() {
  // Step 1: Get all comments using querySelectorAll()
  // TODO: Use querySelectorAll() to select all elements with class "comment"


  // Step 2: Get the count
  // TODO: Create a variable for the length of the comments collection


  // Step 3: Update the header to show count
  // TODO: Use querySelector() to find the h4 in comments-section and update its textContent
  // HINT: Show "Comments (X)" where X is the count


  // Step 4: Return the count
  // TODO: Return the count variable

}

// ========== INITIALIZATION CODE ==========
// This runs when the page loads

// Initialize the display when page loads
updateDisplay();

// Set initial heart state based on isLiked variable
if (isLiked) {
  document.getElementById("heart").textContent = "♥";
  document.getElementById("heart").classList.add("liked");
} else {
  document.getElementById("heart").textContent = "♡";
  document.getElementById("heart").classList.remove("liked");
}

/*
TODO #6: Initialize the comments functionality
When the page loads, we need to:
1. Set up event listeners
2. Update the comments count
3. Add some sample comments for testing

HINT: Call the functions you created above!
*/

// TODO: Call setupEventListeners() to enable the comment functionality


// TODO: Call countComments() to show initial comment count


// TODO: BONUS - Add 2-3 sample comments programmatically using addComment()
// You can simulate user input by setting the input values first, then calling addComment()
// Example:
// document.getElementById("comment-text").value = "Amazing picture!";
// document.getElementById("commenter-name").value = "Misty";
// addComment();


/*
=== BONUS CHALLENGES ===
Once you've completed all the TODOs above, try these additional features:

BONUS #1: Add a character counter for comments (show remaining characters)
BONUS #2: Add timestamps to comments (show when each comment was posted)
BONUS #3: Add emoji reactions to comments (like, love, laugh)
BONUS #4: Add the ability to edit comments (double-click to edit)
BONUS #5: Save comments to localStorage so they persist when page reloads

=== TESTING YOUR CODE ===
After completing each TODO:
1. Open the HTML file in your browser
2. Try adding comments with different names and text
3. Test the delete buttons on individual comments
4. Check that the comment counter updates correctly
5. Make sure the Enter key works for submitting comments

=== DOM METHODS REFERENCE ===
Here are the methods you'll be using:

- getElementById(id) - Gets ONE element by its ID
- getElementsByClassName(className) - Gets ALL elements with a class name
- querySelector(selector) - Gets the FIRST element matching a CSS selector
- querySelectorAll(selector) - Gets ALL elements matching a CSS selector
- createElement(tagName) - Creates a new HTML element
- createTextNode(text) - Creates a text node (alternative to textContent)
- appendChild(childElement) - Adds a child element to a parent
- setAttribute(attribute, value) - Sets an attribute on an element
- remove() - Removes an element from the DOM
- addEventListener(event, function) - Adds an event listener to an element

Good luck and have fun coding! 🎮⚡
*/