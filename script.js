// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays for the different types of characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
// Undefined variables for the prompt confirmations
var len;
var useLowercase;
var useUppercase;
var useNumeric;
var useSpecialChar;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate password given user inputs
function generatePassword() {
  // Ask user for desired length of password
  var len = prompt("How long would you like your password to be (between 8 to 128 characters)?");
  // Ask user to confirm if they want these certain criteria
  var useLowercase = confirm("Confirm if you want lowercase characters in your password.");
  var useUppercase = confirm("Confirm if you want uppercase characters in your password.");
  var useNumeric = confirm("Confirm if you want numeric characters in your password.");
  var useSpecialChar = confirm("Confirm if you want special characters in your password.");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
