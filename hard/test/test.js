const lengthOfLongestSubstring = require('../solutionTemplate');

test('Finds the longest substring length', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('Handles string with all unique characters', () => {
  expect(lengthOfLongestSubstring('abcdef')).toBe(6);
});
