// June 3rd 2021
//  Same as last night --> get ahold of document from HTML.
// Can use document.getElementById or document.querySelector

const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-z]{6-12}$/;

// add event listner
// e.preventDefault stops the pagre from refreshing
// adding a .value property allows us to see the text in the input field
// form.username.value does the same thing in the console as the browser knows the id is attached to form

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Regular expressions (regEx)
// RegEx 101 online tool
// Answered my question from yesterday ==> validate an input which is greater than 4 characters
// /^[a-z][A-Z][0-9]{4,10}$ Input shuld now be between 4- 10 characters and can contain both lower and upper case letters and can have numbers.
//  If we use a period (.) in front of the amount of characters it includes ALL characters.

// testing the RegEx
// much like strings are in between apostophes RegEx are sandwiched between two slashes.
// adding the ^ and $ makes sure the username must meet the conditions

// Testing RegEx
// const username = "macabc2222222222222";
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);
// // console.log(result);

// // if (result) {
// //   console.log("RegEx Test Passed");
// // } else {
// //   console.log("RegEx Failed");
// // }

// let result = username.search(pattern);
// console.log(result);

//  this is the opposite od the pattern.test and using the .search method on the username. It returns 0 or -1 as JS is interger based.

// Basic Form Validations
// Added a new div + class=feedback in html

// ---- input new valid username on form and get negative feedback message?? Why Mash Why??

const username = form.username.value;

if (usernamePattern.test(username)) {
  // feedback good info
  feedback.textContent = " this username is valid";
  // feedback bad info
} else {
  feedback.textContent =
    "username must contain only letters and between 6-12 characters";
}

// Keyboard Events

form.username.addEventListner("keyup", (e) => {
  //   console.log(e.target.value, form.username.value);

  if (usernamePattern.test(e.target.value)) {
    console.log("passed");
  } else {
    console.log("failed");
  }
});
