// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// create a while loop to ensure that user picks a lenght between 8 and 128
function passwordLength() {
  var lengthOfPassword;
  do {
    lengthOfPassword = prompt(
      "How long would your password be? (Must be between 8 and 128 characters)"
    );
    lengthOfPassword = parseInt(lengthOfPassword, 10);
  } while (lengthOfPassword < 8 || lengthOfPassword > 128);
  return lengthOfPassword;
}
// Conditional statement to ensure that user picks at least one criteria and ensuring that prompts start when generate button is clicked

function generatePasswordCriteria() {
  var includesNumericCharacters = confirm(
    "Would you include a number in your password?"
  );
  var includesUpperCasedCharacters = confirm(
    "Would you include an upper case character in your password?"
  );
  var includesLowerCasedCharacters = confirm(
    "Would you include a lower case character in your password?"
  );
  var includesSpecialCharacters = confirm(
    "Would you include a special character in your password?"
  );

  if (
    !includesNumericCharacters &&
    !includesUpperCasedCharacters &&
    !includesLowerCasedCharacters &&
    !includesSpecialCharacters
  ) {
    alert("Must choose at least one character type");
    return;
  }

  var lengthOfPassword = passwordLength();

  // Conditional statement to isolate in a new array the criteria selected by the user

  var selectedCharacters = [];
  var generatedPassword = [];

  if (includesNumericCharacters) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }

  if (includesUpperCasedCharacters) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  }

  if (includesLowerCasedCharacters) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  }

  if (includesSpecialCharacters) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  console.log(selectedCharacters);

  // generating the password using random caharcters from selected characyers array

  for (var i = 0; i < lengthOfPassword; i++) {
    var random = Math.floor(Math.random() * selectedCharacters.length);
    generatedPassword.push(selectedCharacters[random]);
  }

  document.getElementById("password").innerText = generatedPassword.join("");
}
