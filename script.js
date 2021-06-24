// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays for the different types of characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", " ? ", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

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
  // Create empty variables to store the possible password combinations and the resulting randomly generated password string
  var passwordCombos = [];
  var generatedPassword = "";

  // Add a do while loop to make sure user inputs length between 8 and 128
  do {
    // Ask user for desired length of password and convert to integer
    var len = parseInt(prompt("How long would you like your password to be (between 8 and 128 characters)?"));
    
    // Check if len is not within the criteria, otherwise an alert will show
    if(len < 8 || len > 128) {
      alert("Please input a number between 8 and 128.")
    }
  } while (len < 8 || len > 128);
  
  // Add a do while loop to make sure at least one criteria is confirmed at the end
  do {
    // Ask user to confirm if they want these certain criteria
    var useLowercase = confirm("Confirm if you want lowercase characters in your password.");
    var useUppercase = confirm("Confirm if you want uppercase characters in your password.");
    var useNumeric = confirm("Confirm if you want numeric characters in your password.");
    var useSpecialChar = confirm("Confirm if you want special characters in your password.");
    alert("If you didn't choose at least one criteria, you will be prompted to confirm again.")
  } while (!useLowercase && !useUppercase && !useNumeric && !useSpecialChar)
  
  // Checks to see if lowercase was confirmed, then it'll add it to the password combinations list
  if(useLowercase) {
    passwordCombos = passwordCombos.concat(lowercase);
  }
  // Checks to see if uppercase was confirmed, then it'll add it to the password combinations list
  if(useUppercase) {
    passwordCombos = passwordCombos.concat(uppercase);
  }
  // Checks to see if numeric was confirmed, then it'll add it to the password combinations list
  if(useNumeric) {
    passwordCombos = passwordCombos.concat(numeric);
  }
  // Checks to see if special character was confirmed, then it'll add it to the password combinations list
  if(useSpecialChar) {
    passwordCombos = passwordCombos.concat(specialChar);
  }

  // Loop for the length of the desired password length to randomly generate from the passwordCombos list
  for(var i = 0; i < len; i++) {
    generatedPassword += passwordCombos[Math.floor(Math.random() * passwordCombos.length)];
  }

  // Create an alert for the generated password
  alert("Generated Password: " + generatedPassword);

  // Returns the randomly generated password that was created
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
