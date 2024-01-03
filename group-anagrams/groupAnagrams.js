/**
 * @description
 * Given an array of `stars`, group the anagrams together. 
 * You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  const anagramGroups = {}; // Create an empty object to store anagram groups

  for (let str of strs) {
      // Convert the string to a stored array of characters, then join it back to a string
      const sortedStr = str.split('').sort().join('');

      // If the sorted string is not in the anagramGroups object, create a new array for it
      if (!anagramGroups[sortedStr]) {
          anagramGroups[sortedStr] = []
      }

      // Push the original string to the corresponding anagram group
      anagramGroups[sortedStr].push(str);
  }

  // Convert the values of the anagramGroups object (arrays of anagrams) to an array
  return Object.values(anagramGroups);
};