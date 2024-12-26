/**
 * Splits an array into chunks of the specified size.
 * @param {Array} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - An array containing chunks.
 */
function chunkArray(array, size) {
    // TODO: Implement your solution here

    //Store the chuncks in an empty array
    chunkedArray = [];

    //get the lenght of the array
    arrayLength = array.length;

    //get the number of chunks
    numberOfChunks = Math.ceil(arrayLength / size);

    //use a for loop to iterate through the array
    for (i = 0; i < numberOfChunks; i++) {
      chunkedArray.push(array.slice(i * size, i * size + size));
    }

    return chunkedArray;
    }
  
  module.exports = chunkArray;
  