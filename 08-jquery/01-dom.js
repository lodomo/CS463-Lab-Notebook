// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

// Option #1
// Fetch JavaScript objects representing specific elements in the DOM
const userInput1 = $("#userInput1");
const copy = $("#copy");
const output1 = $("#output1");

copy.on("click", function() {
  output1.text(userInput1.val());
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area

// Fetch JavaScript objects representing specific elements in the DOM
let userInput2 = $("#userInput2");
let output2 = $("#output2");

userInput2.on("input", function() {
  output2.text(userInput2.val());
});
