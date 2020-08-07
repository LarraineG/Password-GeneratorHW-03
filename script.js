// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numeric = "0123456789"
var special = "!@#$%^&*()"
let options = [];

// Length Requiements

function generatePassword() {
  console.log("Generate the password")

  let pwdLength = prompt("How many characters would you like in your password?")
  console.log(pwdLength);

  if (pwdLength > 8 && pwdLength < 128) {
    console.log(pwdLength);
  }
  else if (pwdLength < 8 || pwdLength > 128)
    if (pwdLength >128) {
      alert("Password may not exceed 128 characters");
      generatePassword();
    }
    else if (pwdLength < 8) {
      alert("Password must be at least 8 characters long")
      generatePassword()
      return;
    }
    // Lowercase preference
  let lowerPass = confirm("Would you like any lowercase letters in your password?")  

  if (lowerPass == true) {
    console.log("Add lowercase " + lowerPass);
    options.push(lower);
  }
  else {
    console.log("Do not add lowercase " + lowerPass)
  }
    // Uppercase preferences
  let upperPass = confirm("Would you like any uppercase letters in your password?")  

  if (upperPass == true) {
    console.log("Add uppercase " + upperPass);
    options.push(upper);
  }
  else {
    console.log("Do not add uppercase " + upperPass)
  }
  // Number preference
  let numberPass = confirm("Would you like any numbers in your password?")  

  if (numberPass == true) {
    console.log("Add numbers " + numberPass);
    options.push(numeric);
  }
  else {
    console.log("Do not add numbers " + numberPass)
  }
  // Special character preference
  let specialPass = confirm("Would you like any special characters in your password?")  

  if (specialPass == true) {
    console.log("Add special characters " + specialPass);
    options.push(special);
  }
  else {
    console.log("Do not add special characters " + specialPass)
  }

  for (let i = 0; i < pwdLength; i++) {
    let optionsArray = options[Math.floor(Math.random() * options.length)];
    console.log(optionsArray.charAt(Math.floor(Math.random() * optionsArray.length)));
  }

  document.getElementById("generate").innterHTML = options;
}


