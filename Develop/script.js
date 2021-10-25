// Assignment Code
document.getElementById("generate").addEventListener("click", questionsFunction);
function questionsFunction () {
var generateBtn = document.querySelector("#generate");
var promptnumberofcharacter = window.prompt("How many characters do you want in your password? (Between 8 and 128");
var promptupptercase = window.confirm("Do you want uppercase characters in your password?");
var promptlowercase = window.confirm("Do you want lowercase characters in your password?");
var promptsymbols = window.confirm("Do you want special characters in your password?");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
