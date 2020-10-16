// Assignment Code
let generateBtn = document.querySelector("#generate");

// character type object
// works WAY better than hard coding a bunch of comparison operators
let charTypes = [{

  'type': 'upperCase',
  'values': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'displayName': 'Uppercase Characters',
  'shouldInclude': null

},{

  'type': 'lowerCase',
  'values': 'abcdefghijklmnopqrstuvwxyz',
  'displayName': 'Lowercase Characters',
  'shouldInclude': null

},{

  'type': 'specialChars',
  'values':  ' \!\'\"\#\$\%\&\(\)\*\+\,\-\.\/\\\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~',
  'displayName': 'Special Characters',
  'shouldInclude': null

},{

  'type': 'numericalChars',
  'values': "0123456789",
  'displayName': 'Numbers',
  'shouldInclude': null

}];

// random number gen function (easier use in code)
// got idea to make randomnumber function from w3 schools
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Generate password
function generatePassword() {

  // rough password array (will return as a string)
  let passwordArray = [];
  // must define outside of while loop so I can use outside of while loop
  let passLength;

  // makes sure your password is of adequet length
  while(true) {
    // get passwords length
    passLength = prompt('Choose a password length from 8 - 128 characters:');
    // get included characters (require at least 1)
    if(passLength >= 8 && passLength <= 128) {
      break;
    } else {
      alert('Password needs to be between 8 - 128 characters!');
    }
  }
  
  // loop to assign which character types to use in generation by assigning shouldInclude true or false
  for(type in charTypes) {
    //assign true if should use, false if should NOT use
    charTypes[type].shouldInclude = confirm(`Click 'OK' to include: ${charTypes[type].displayName}`);
  }
  
  // actual password generation
  while(passwordArray.length < passLength) {

    // randomly select a type which shouldInclude = true
    let tempType = charTypes[randomNumber(charTypes.length - 1)];

    // make sure that type was in the requested types, if not try again
    if(tempType.shouldInclude === true) {
      // choose a VALUE of this type from random index
      let tempValue = tempType.values[randomNumber(tempType.values.length)];
      // push it to rough password
      passwordArray.push(tempValue);
    }

  }
  // returned joined array of chars as a string
  return passwordArray.join('');

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
