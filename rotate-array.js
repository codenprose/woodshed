/**
 * rotateArray
 * @param {Array} nums
 * @param {number} k
 * @returns {Array}
 */
function rotateArray(nums, k) {
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums
}

console.log(rotateArray([1,2,3,4,5,6,7], 3)) // [ 5, 6, 7, 1, 2, 3, 4 ] 