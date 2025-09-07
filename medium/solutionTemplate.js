/**
 * Splits an array into chunks of the specified size.
 * @param {Array} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - An array containing chunks.
 */
function chunkArray(array, size) {
    // TODO: Implement your solution here
    // Result array to store chunks
    const Result = [];

    // Start iteration to create chunks
    for (let x = 0; x < array.length; x += size) {
      // Push it to the result by slicing a chunk of the specified size
      Result.push(array.slice(x, x + size));
    }
    return Result;
  }
  
  module.exports = chunkArray;
  