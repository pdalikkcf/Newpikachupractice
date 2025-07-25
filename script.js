
// Variables to modify
let username = "Pikachu";
let followers = 1500;
let likes = 42;
let isLiked = true;

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
