/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
  // TODO: Implement your solution here
  //store the reversed string in an empty string
  reversedString = '';

  //Get the lenght of the string
  strLength = str.length;

  //get the last index of the string
  i = strLength - 1;

  //use a for loop to iterate through the string in reverse
  for (i; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

module.exports = reverseString;
