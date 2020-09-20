function fibonacci(num = 4) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function flattenArray(arr = [[1, [2, [3, [4, [5]]]]]]) {
  return arr.reduce((acc, item) => {
    // if item is an array, make a recursive call to the flatten function
    if (Array.isArray(item)) {
      // here, we keep updating the acc value until there are no more arrays
      // whenever you concat one array into another, you're spreading those values
      // into a new array
      // eg. const x = [].concat([1, 2], [3, 4]) = [1, 2, 3, 5]
      acc = acc.concat(flattenArray(item));
      // otherwise, push the number into the accumulator array
    } else {
      acc.push(item);
    }
    // finally, we need to return the acccumulator
    return acc
  }, []);
}