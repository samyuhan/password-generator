# password-generator
For this homework assignment, we had to create a random password generator. The user
is asked to input the desired length of the password (from 8 to 128). Then, the user is asked to confirm whether they want to include 4 different criteria: lowercase letters, uppercase letters, numbers, and special characters. The password is then generated from the selected criteria with the desired length.

## Technologies Used
Javascript was used to build this generator in Visual Studio, using Terminal to access the Github repo with git. The HTML/CSS was provided for us.

## Essential Code
To get the user's input, the prompt() function was used. A do while loop was utilized to ensure the user chose a number between 8 and 128, or it will trigger an alert to pop up.
```html
do {
    var len = parseInt(prompt("How long would you like your password to be (between 8 and 128 characters)?"));
    
    if(len < 8 || len > 128) {
      alert("Please input a number between 8 and 128.")
    }
  } while (len < 8 || len > 128);
```

The confirm() function was used so that the user can select which criteria they wished to include in their generated password.
```html
var useLowercase = confirm("Confirm if you want lowercase characters in your password.");
var useUppercase = confirm("Confirm if you want uppercase characters in your password.");  
var useNumeric = confirm("Confirm if you want numeric characters in your password.");
var useSpecialChar = confirm("Confirm if you want special characters in your password.");
```

A for loop was included to randomly generate the password of the desired length, using Math.floor() and Math.random().
```html
for(var i = 0; i < len; i++) {
    generatedPassword += passwordCombos[Math.floor(Math.random() * passwordCombos.length)];
  }
```

## Application Functioning
![demo walkthrough](demo.gif)

The final website can be found here: [Password Generator](https://samyuhan.github.io/password-generator/)