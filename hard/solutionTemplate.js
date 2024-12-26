/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring.
 */
function lengthOfLongestSubstring(s) {
    // TODO: Implement your solution here
    let n = s.length;
    // Store the maximum length of the substring found
    let result = 0;

    // Start outer looping from each character in the string
    for (let x = 0; x < n; x++) {
      // Initialize all the characters as not attended
      let attended = new Array(256).fill(false);
      
      // Start the inner loop from the current position of the outer loop(x)
      for (let y = x; y < n; y++) {
        // If the current character is attended
        // Break the loop
        if (attended[s.charCodeAt(y)] === true) {
          break;
        } else {
          // Update the result if this window is larger,
          result = Math.max(result, y - x + 1);
          attended[s.charCodeAt(y)] = true;
        }
      }
    }
    return result;
  }
  
  module.exports = lengthOfLongestSubstring;
  