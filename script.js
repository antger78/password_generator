// Assignment Code
document.getElementById("generate").addEventListener("click", questionsFunction);
function questionsFunction () {
var generateBtn = document.querySelector("#generate");
var promptnumberofcharacter = window.prompt("How many characters do you want in your password? (Between 8 and 128");
var promptupptercase = window.confirm("I want uppercase characters in my password (Click cancel if not)");
var promptlowercase = window.confirm("I want lowercase characters in my password (Click cancel if not)");
var promptnumbers = window.confirm("I want numeric characters in my password (Click cancel if not)");
var promptsymbols = window.confirm("I want special characters in my password (Click cancel if not)");
};

var upperarray = [
  "A",
  "B"
];

var lowerarray = [
  "a",
  "b"
];

var numericarray = [
  "1",
  "2"
];

var symbolsarray = [
  "!",
  "@"
];

if ( promptupptercase == true)
{

}
else{}

if ( promptlowercase == true)
{
  
}
else{}

if ( promptnumbers == true)
{
  
}
else{}

if ( promptsymbols == true)
{
  
}
else{}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






var randomUpper = upperarray[Math.floor(Math.random()*upperarray.length)];

