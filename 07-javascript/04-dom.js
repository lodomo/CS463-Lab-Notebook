// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// Listen for on click on copy
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event

const copyButton = document.getElementById("copy");
const userInput1 = document.getElementById("userInput1");
const output = document.getElementById("output1");

copyButton.addEventListener("click", function() {
  output.textContent = userInput1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event

const userInput2 = document.getElementById("userInput2");
const output2 = document.getElementById("output2");

userInput2.addEventListener("input", function() {
  output2.textContent = userInput2.value;
});
