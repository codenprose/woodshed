function selectionSort(arr = [2, 8, 5, 3, 9, 4, 1]) {
  // for each item in the array
  for (let i = 0; i < arr.length; i++) {
    // store the smallest value in the array to a min variable
    // we start each iteration assuming that our min value is i
    let min = i;
    // for each iteration:
    //   - find the smallest value and swap it with arr[i]
    for (let x = i + 1; x < arr.length; x++) {
      // if you find a smaller element than arr[min]
      if (arr[x] < arr[min]) {
        // update the index of min
        min = x;
      }
    }
    // NOTE: wrapping the swap code below in an if statement is an optimization
    // we don't need to swap if current i index is the same as the min index
    // e.g. given the array of [1, 3, 2, 5]
    // in the first iteration, i will be index 0 and min will also be index 0
    // we don't need to swap 1 with itself, in this case we can skip the swap
    if (min !== i) {
      // swap the element at arr[i] with the element at arr[min]
      const a = arr[min];
      const b = arr[i];
      arr[i] = a;
      arr[min] = b;
    }
  }

  return arr;
}
