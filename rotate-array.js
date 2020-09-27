/**
 * rotateArray
 * @param {Array} nums
 * @param {number} k
 * @returns {Array}
 */
function rotateArray(nums, k) {
  while (k > 0) {
    const [val] = nums.splice(nums.length-1, 1);
    nums.unshift(val)
    k--;
  }
  return nums
}

console.log(rotateArray([1,2,3,4,5,6,7], 3)) // [ 5, 6, 7, 1, 2, 3, 4 ] 