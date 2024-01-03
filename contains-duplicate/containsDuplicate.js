/**
 * Contains Duplicate
 * Level: Easy
 * Directions:
 * - Given an integer array `nums` return `true`
 * - if any value appears at least twice in the array, 
 * - and return `false` if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  const map = {}

  for (const num of nums) {
    if (map[num])
      return true

    map[num] = true
  }

  return false
}