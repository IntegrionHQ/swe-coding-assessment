/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring.
 */
function lengthOfLongestSubstring(s) {
    // TODO: Implement your solution here


  // Initialize an object to store characters and their latest indices
  const charMap = {};

  // Initialize the left pointer of the sliding window
  let left = 0;

  // Initialize the maximum length found
  let maxLength = 0;

  // Iterate over the string with the right pointer
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If the character is found in the map and its index is within the current window
    if (charMap[currentChar] >= left) {
      // Move the left pointer to the right of the same character last found
      left = charMap[currentChar] + 1;
    }

    // Update the character's latest index
    charMap[currentChar] = right;

    // Update the maximum length if necessary
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // Return the maximum length found
  return maxLength;
  }
  
  module.exports = lengthOfLongestSubstring;
  