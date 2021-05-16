// created the variables and arrays for the app
var generateBtn = document.querySelector("#generate");
var pwdLowerChar = ["z","x","c","v","b","n","m","l","k","j","h","g","f","d","s","a","q","w","e","r","t","y","u","i","o","p"];
var pwdUpperChar =["Q","W","E","R","T","Y","U","I","O","P","L","K","J","H","G","F","D","S","A","Z","X","C","V","B","N","M"];
var pwdSpecialChar =
["~","!","@","#","$","%","^","&","*","(",")","_","+","=","-","`",
"{","}","|",":",",","<",">","?",";"];
var pwdNumberChar = ["0","1","2","3","4","5","6","7","8","9"]
//concat array of user choices
var pwdChoice = []
//concat output of password generated from pwdChoice array
var userPassword = []
var pwdLength = 0

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var pwdLength = parseInt (prompt("How long will your Password be? 8-24"));
  if (pwdLength < 8){alert("your password must be longer than 7 characters")};
  if (pwdLength < 8){XMLHttpRequestUpload()}
  if (pwdLength > 24){alert("your password must be less tham 24 characters")};
  if (pwdLength > 24){XMLHttpRequestUpload()}
//having issues with this part, when user does not select a length
  // if (pwdLength === !null){alert("your password must have at least 8 characters")};
  // if (pwdLength === !null){XMLHttpRequestUpload()}
  var pwdCapt = confirm("Will it use UPPERCASE letters? OK=yes Cancel=no");
  var pwdSpecial = confirm("Will it use $pecial ch@racters?  OK=yes Cancel=no");
  var pwdNumbers = confirm("Will it have numbers 0-9? OK=yes Cancel=no");
  var pwdLower = confirm("Will it have lower case Characters? OK=yes Cancel=NO");
  if (pwdCapt){pwdChoice= pwdChoice.concat(pwdUpperChar)};
  if (pwdSpecial){pwdChoice= pwdChoice.concat(pwdSpecialChar)};
  if (pwdNumbers){pwdChoice= pwdChoice.concat(pwdNumberChar)};
  if (pwdLower){pwdChoice= pwdChoice.concat(pwdLowerChar)};
  if (pwdChoice.length === 0){alert("Your Password must contain at least one type of Character")};
  
  console.log(pwdChoice)

  for (var i = 0; i < pwdLength; i++){
 
    var randomIndex = Math.floor(Math.random() * pwdChoice.length);

    console.log(randomIndex)

    var randomChoice = pwdChoice[randomIndex];

    console.log(randomChoice)
    userPassword.push(randomChoice);

  } 
  
  return userPassword.join("")
}


//zocrates in the house
//homework week 3 JScript
