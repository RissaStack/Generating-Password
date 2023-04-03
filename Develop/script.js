// Assignment Code
var generateBtn = document.querySelector("#generate");
// // appropriate characters for a password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = " ~`-_=+!@#$%^&*()";


// Write password to the #password input
function writePassword () {
  var password = generatePassword();


  while (password === null) {
    password = generatePassword();
  };


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword () {
  var selected = "";
  var password = "";


  var lowerCaseChoice = confirm("Do you want to include lowercase letters?");
  var upperCaseChoice = confirm("Do you want to include uppercase letters?");
  var numChoice = confirm("Do you want to include numbers?");
  var specialChoice = confirm("Do you want to include special characters?");


  if (
      !lowerCaseChoice &&
      !upperCaseChoice &&
      !numChoice &&
      !specialChoice
    ) {
      alert("Please select at least one character type.");
      return null;
  }


  var lengthChoice = Number(prompt("How long would you like your password to be - must be between 8 - 128 characters."));


  while (
    !lengthChoice ||
    !(lengthChoice >= 8) ||
    !(lengthChoice <= 128)
  ) {
    alert("Make your password between 8 and 128 Characters.");
    lengthChoice = Number(prompt("How long would you like your password to be - must be between 8 - 128 characters."));
  }


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


  for (let i = 0; i < lengthChoice; i++) {
    var index = Math.floor(Math.random() * selected.length);
    password += selected[index];
  };


  return password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

