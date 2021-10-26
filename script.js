// Assignment Code
var generateBtn = document.querySelector("#generate");

var promptnumberofcharacter;
var promptupptercase;
var promptlowercase;
var promptnumbers;
var promptsymbols;
var upperarray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowerarray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var numericarray = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

var symbolsarray = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

let passwordcharacterset = [];
// document.getElementById("generate").addEventListener("click", questionsFunction);
function questionsFunction () {
promptnumberofcharacter = parseInt (window.prompt("How many characters do you want in your password? (Between 8 and 128"));
if (Number.isNaN(promptnumberofcharacter)){
  window.alert ("Enter an integer value between 8 and 128");
  return "";
}
if (promptnumberofcharacter < 8){
  window.alert ("Enter an integer value between 8 and 128");
  return "";
}
if (promptnumberofcharacter > 128){
  window.alert ("Enter an integer value between 8 and 128");
  return "";
}
console.log(promptnumberofcharacter);
promptuppercase = window.confirm("I want uppercase characters in my password (Click cancel if not)");
if (promptuppercase){
  passwordcharacterset.concat(upperarray);
  console.log (passwordcharacterset);
};
promptlowercase = window.confirm("I want lowercase characters in my password (Click cancel if not)");
promptnumbers = window.confirm("I want numeric characters in my password (Click cancel if not)");
promptsymbols = window.confirm("I want special characters in my password (Click cancel if not)");
};

function generatePassword(){
  questionsFunction();
};

for (let i = 1; i > promptnumberofcharacter; randomlyPickFromSelected){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var randomUpper = upperarray[Math.floor(Math.random()*upperarray.length)];
// // if ( promptlowercase == true)
// {
  
// }
// else{};

// if ( promptnumbers == true)
// {
  
// }
// else{};

// if ( promptsymbols == true)
// {
  
// }
// else{};


// if ( promptupptercase == false && promptlowercase == false && promptnumbers == false && promptsymbols == false)
// {

// }
// else{};

// if ( promptupptercase == true && promptlowercase == true && promptnumbers == true && promptsymbols == true)
// {

// }
// else{};

// if ( promptupptercase == true && promptlowercase == false && promptnumbers == true && promptsymbols == true)
// {

// }
// else{};

// if ( promptupptercase == true && promptlowercase == false && promptnumbers == false && promptsymbols == true)
// {

// }
// else{};

// if ( promptupptercase == true && promptlowercase == false && promptnumbers == false && promptsymbols == false)
// {

// }
// else{};

// if ( promptupptercase == false && promptlowercase == true && promptnumbers == true && promptsymbols == true)
// {

// }
// else{};

// if ( promptupptercase == false && promptlowercase == true && promptnumbers == false && promptsymbols == true)
// {

// }
// else{};

// if ( promptupptercase == false && promptlowercase == true && promptnumbers == false && promptsymbols == false)
// {

// }
// else{};

// if ( promptupptercase == false && promptlowercase == false && promptnumbers == true && promptsymbols == true)
// {

// }
// else{};

// if ( promptupptercase == false && promptlowercase == false && promptnumbers == true && promptsymbols == false)
// {

// }
// else{};

// if ( promptupptercase == false && promptlowercase == false && promptnumbers == false && promptsymbols == true)
// {

// }
// else{};

