//User input variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Special characters:
characters = [
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "@",
  ".",
  ";",
  "-",
  "_",
  "=",
  "+",
];

//Number characters:
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Letters:
alpha = [
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

// Upper case conversion:
space = [];

//Converts letters to uppercase:
var toUpper = function (x) {
  return x.toUpperCase();
};

//Create a variable for uppercase conversion:
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
