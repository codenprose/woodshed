function mergeLists(arr) {
  // for each item in the arr input
  //  - merge the item into the output array
  const output = arr.reduce((acc, currentValue) => {
    return acc.concat(currentValue);
  }, []);
  // sort and return the output
  return output.sort();
}

const input = [[1,4,5],[1,3,4],[2,6]]

console.log(mergeLists(input)) // [1, 2, 2, 3, 4, 4, 5, 6]