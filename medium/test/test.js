const chunkArray = require('../solutionTemplate');

test('Splits array into chunks of size 2', () => {
  expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('Handles single chunk', () => {
  expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
});
