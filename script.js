// Assignment code here
var generateBtn = document.querySelector("#generate");
//spell out the arrays
  var lcarr = "abcdefghijklmnopqurtuvwxyz";
  var lcarr2 = lcarr.split(' ');
  var ucarr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ucarr2 = ucarr.split(' ');
  console.log(ucarr2);
  var nums = "1234567890";
  var nums2 = nums.split(' ');
  var spcchar1 = "!@#$%^&*()";
  var spcchar2 = spcchar1.split(' ');


function generatePassword() {
  var passwordText = document.querySelector("#password");
  var pwlength = window.prompt("Choose Password length, at least 8 characters and no more than 128 characters")
  if(pwlength < 8 || pwlength > 128) {
    alert("too little or too much, try agin")
    generatePassword();
  };
  //more testing
//test 
var arraytouse = ""

 var lowercase = confirm("you want lowercase letters?");
 if (lowercase == true) {
  arraytouse = lcarr;
  console.log("array to use is " + arraytouse);
 }
 var uppercase = confirm("What about UPPERCASE?");
 if (uppercase == true) {
   arraytouse = arraytouse.concat(ucarr);
   console.log("array to use is " + arraytouse);
 }
 var numeric = confirm("you want numbers?");
 if (numeric == true){
   arraytouse = arraytouse.concat(nums);
   console.log("array to use is " + arraytouse);
 }
 var spcchar = confirm("what about special characters? (?!@#$%^&*)");
 if (spcchar == true) {
  arraytouse = arraytouse.concat(spcchar1);
  console.log("array to use is " + arraytouse);
 }
 if (!lowercase && !uppercase && !numeric && !spcchar) {
   alert("you must pick some criteria");
   generatePassword();
 };


 /*/test ground
var arraytouse = "";

if (lowercase == true && uppercase == true && numeric == true && spcchar ==true) {
  arraytouse = lcarr2.concat(ucarr2).concat(nums2).concat(spcchar2);
  console.log("array to use is " + arraytouse);
}


 //end test ground */


  var length = pwlength,
     // charset1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
     // charset2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
     // charset3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",

      retVal = "";
      console.log(retVal);
  for (var i = 0, n = arraytouse.length; i < length; ++i) {
      retVal += arraytouse.charAt((Math.random() * n));
  }
  console.log(retVal);
  passwordText.value = retVal;
  //return retVal;
  
}

generateBtn.addEventListener("click", generatePassword);

// below is all the failures.... boooooooooo anyway.

/* Get references to the #generate element
//5/6 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var pwlength = window.prompt("Choose Password lenght, at least 8 characters and no more than 128 characters")
  if (pwlength < 8 || pwlength > 128) {
    alert("too little or too much, try agin")


  };
  //spell out the vars
  //var lowercase = confirm("you want lowercase letters?");
 // var uppercase = confirm("What about UPPERCASE?");
  //var numeric = confirm("you want numbers?");
  //var spcchar = confirm("what about special characters? (?!@#$%^&*)");
*spell out the arrays
  var lcarr = "a b c d e f g h i j k l m n o p q u r t u v w x y z";
  var lcarr2 = lcarr.split(' ');
  var ucarr = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  var ucarr2 = ucarr.split(' ');
  console.log(ucarr2);
  var nums = "1 2 3 4 5 6 7 8 9 0";
  var nums2 = nums.split(' ');
  var spcchar1 = "! @ # $ % ^ & * ( )";
  var spcchar2 = spcchar1.split(' ');
  var combination = function() {
    console.log(lowercase);
  if (lowercase == true && uppercase == true && numeric == true && spcchar1 == true) {
    var combolen = lcarr2.str.length + ucarr2.length + nums2.length + spcchar2.length;
    console.log(combolen);

  }
  combination();
}

  function generatepw() {
    var lenght = pwlength;
    
  }

  function generatePassword() {
    var length = pwlength,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
    passwordText.value = retVal;
    return retVal;
    
}

generatePassword();
  //writePassword();


  

  start arrays
  var lcarr = "a b c d e f g h i j k l m n o p q u r t u v w x y z";
  var lcarr2 = lcarr.split(' ');
  var ucarr = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  var ucarr2 = ucarr.split(' ');
  var nums = "1 2 3 4 5 6 7 8 9 0";
  var nums2 = nums.split(' ');
  var spcchar = "! @ # $ % ^ & * ( )";
  var spcchar2 = spcchar.split(' '); */




// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
