// Assignment Code
var generateBtn = document.querySelector("#generate");
// // recognized characters for a password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = " ~`-_=+!@#$%^&*()";


// This function is to write the password using the desired characters.
function writePassword () {
  var password = generatePassword();

//This loop is used to continue to give the prompt to select at least one char set if a user does not select a char set.
  while (password === null) {
    password = generatePassword();
  };


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword () {
  var selected = ""; //This var shows what character sets were selected.
  var password = ""; //This var is the password using those character sets.

//These vars are what is shown in the prompt. 
  var lowerCaseChoice = confirm("Do you want to include lowercase letters?");
  var upperCaseChoice = confirm("Do you want to include uppercase letters?");
  var numChoice = confirm("Do you want to include numbers?");
  var specialChoice = confirm("Do you want to include special characters?");

//These conditional statements show that an alert will be put on the screen to select one char type if the user does not select any.
  if (
      !lowerCaseChoice &&
      !upperCaseChoice &&
      !numChoice &&
      !specialChoice
    ) {
      alert("Please select at least one character type.");
      return null;
  }

//This var gives the user a prompt to ask how many characters they will like in their password.   
  var lengthChoice = Number(prompt("How long would you like your password to be - must be between 8 - 128 characters."));

//This loop is used to check that the length the user chooses is between 8 and 128. If it isn't, it will give the following alert. 
  while (
    !lengthChoice ||
    !(lengthChoice >= 8) ||
    !(lengthChoice <= 128)
  ) {
    alert("Make your password between 8 and 128 Characters.");
    lengthChoice = Number(prompt("How long would you like your password to be - must be between 8 - 128 characters."));
  }

//This conditional statement figures out what charcters the user wants and puts them into the var selected. 
  if (lowerCaseChoice) {
    selected += lowerCase
  };
  if (upperCaseChoice) {
    selected += upperCase
  };
  if (numChoice) {
    selected += number
  };
  if (specialChoice) {
    selected += special
  };

// This loop is working with the var selected to add one character at a time to the password until it reaches the legthChoice that the user selected. The Math.floor and Math.raondom randomly select the number and round down to select the character. 
  for (let i = 0; i < lengthChoice; i++) {
    var index = Math.floor(Math.random() * selected.length);
    password += selected[index];
  };

//This is where we get our password returned to the user. 
  return password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

