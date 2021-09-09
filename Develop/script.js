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

//Start function to generate password:
function generatePassword() {
  //Ask for the user input:
  enter = parseInt(
    prompt(
      "How many characters would you like in your password? Choose between 8 and 128 characters"
    )
  );

  //First IF statement for user validation:
  if (!enter) {
    alert("This needs a value!");
  } else if (enter < 8 || enter > 128) {
    //Validates user's input
    //Start user input prompts:
    enter = parseInt(prompt("You must choose between 8 and 128 characters!"));
  } else {
    //Continues once user input is validated:
    confirmNumber = confirm("Will this contain NUMBERS?");
    confirmCharacter = confirm("Will these contain SPECIAL CHARACTERS?");
    confirmUppercase = confirm("Will this contain UPPERCASE LETTERS?");
    confirmLowercase = confirm("Will this contain LOWERCASE LETTERS");
  }

  //Else if for negative options:
  if (
    !confirmCharacter &&
    !confirmNumber &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    choices = alert("You must choose your options!");
  }

  //First if statement that uses user inputs and prompts to make choices.
  //Else if for positive options:
  else if (
    confirmCharacter &&
    confirmNumber &&
    confirmUppercase &&
    confirmLowercase
  ) {
    choices = characters.concat(number, alpha, alpha2);
  }

  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // Else if for 2 positive options
  else if (confirmNumber && confirmCharacter) {
    choices = character.concat(number);
  } else if (confirmLowercase && confirmCharacter) {
    choices = character.concat(alpha);
  } else if (confirmUppercase && confirmCharacter) {
    choices = character.concat(alpha2);
  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } else if (confirmUppercase && confirmLowercase) {
    choices = alpha.concat(alpha2);
  } else if (confirmUppercase && confirmNumber) {
    choices = number.concat(alpha2);
  }

  //Else if for 1 positive input.
  else if (confirmLowercase) {
    choices = alpha;
  } else if (confirmCharacter) {
    choices = character;
  } else if (confirmNumber) {
    choices = number;
  }

  //Uppercase conversion variable to fill uppercase:
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  }
}
