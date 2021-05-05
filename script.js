// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var pwlength = window.prompt("Choose Password lenght, at least 8 characters and no more than 128 characters")
  if (pwlength < 8 || pwlength > 128) {
    alert("too little or too much, try agin")
    writePassword();
  };
  var lowercase = confirm("you want lowercase letters?");
  var uppercase = confirm("What about UPPERCASE?");
  var numeric = confirm("you want numbers?");
  var spcchar = confirm("what about special characters? (?!@#$%^&*)");

  passwordText.value = password;

  //

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
