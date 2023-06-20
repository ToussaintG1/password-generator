// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //ask user for length of pw and confirm that it is a number between 8-126
  let passLength = prompt('How many characters would you like your new Password?');
  //ask user whether or not to include lowercase
  const lowerCase = confirm('Do You Want Lowercase Letters in Your New Password?');
  //ask user whether or not to includer uppercase letters
  const upperCase = confirm('Do You Want Uppercase Letters in Your New Password?');
  //ask user whether or not to includer numeric characters
  const numChar = confirm('Do You want Numeric Characters In Your New Password?');
  //ask user whether or not to include special characters
  const specChar = confirm("Do You want Special Characteres?");




  //Display the generated password
  if (passLength < 8 || passLength > 128) {
    alert('Please enter a valid character range')
    return null;
  }
  if (upperCase === true) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVW";
  } 
  if (lowerCase === true) {
    charSet += "abcdefghijkllmnopqrstuvwxyz"
  }
  if (numChar == true) {
    charSet += "0123456789"
  } 
  if (specChar == true) {
    charSet += "<><>{}[]()!"
  } 
  if (specChar == false && numChar == false && lowerCase === false && upperCase === false) {
    return null;
  }
  console.log(charSet)
  let finalPass = "";
  while (finalPass.length < parseInt(passLength)) {
    let randNum = Math.floor(Math.random() * charSet.length);
    finalPass += charSet[randNum];
  };
  return finalPass;
}

//function finalPass() {




// function lowerCase() {
//   var randomLower = Math.floor(Math.random() * charSet.length + 1);
//   return charSet[randomLower].toLowerCase();
// };

// function upperCase() {
//   var randomUpper = Math.floor(Math.random() * charSet.length + 1);
//   return charSet[randomUpper].toUpperCase();
// };

// function numChar() {
//   var randomNum = Math.floor(Math.random() * charSet.length + 1);
//   return charSet[randomNum];
// };

// function specChar() {
//   var randomSpec = Math.floor(Math.random() * charSet.length + 1);
//   return charSet[randomSpec];
// };

// //function charSet() {
// var set = [];
// while (set.length < 4) {
//   var randChar = this.lowerC();
//   if (!(randChar === 'l' || randChar == 'I')) {
//     set.push(randChar);
//   }
//   var randChar = this.upperC();
//   if (!(randChar === 'L' || randChar === 'i'))
//     set.push(randChar);
//   var randChar = this.numChar();
//   if (!(randChar === '0' || randChar === 'O'))
//     set.push(randChar);
//   var randChar = this.specChar();
//   if (!(randChar === '!' || randChar == '@'))
//     set.push(randChar);
// }
// return set;
// //}