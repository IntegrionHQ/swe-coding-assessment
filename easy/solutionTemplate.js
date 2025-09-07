/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    // TODO: Implement your solution here
    // Variable to store the reversed string
    let reversedString = '';  
    
    // Iterate over the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
      // Append each character to the reversed string
        reversedString += str[i];  
    }
    
    // Return statement
    return reversedString;  

  }
  
  module.exports = reverseString;
  