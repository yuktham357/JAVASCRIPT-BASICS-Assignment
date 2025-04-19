// Start the counter at 0
let count = 0;

// Get the display and buttons
const display = document.getElementById("display");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// When "Increment" is clicked
incrementBtn.addEventListener("click", function() {
  count++; // Add 1
  display.textContent = count; // Show new number
});

// When "Decrement" is clicked
decrementBtn.addEventListener("click", function() {
  if (count > 0) {
    count--; // Subtract 1
    display.textContent = count; // Show new number
  }
});
