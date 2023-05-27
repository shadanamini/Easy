function replaceElements(arr) {
  // Initialize the variable 'max' to hold the maximum value, and set it equal to the last element.
  let max = arr[arr.length - 1];

  // Replace the last element of the array with -1.
  arr[arr.length - 1] = -1;

  // Traverse the array from the second-to-last element to the first element.
  for (let i = arr.length - 2; i >= 0; i--) {

    // Store the current element in 'curr' variable.
    let curr = arr[i];

    // Replace the current element with the maximum element found so far.
    arr[i] = max;

    // Check if the current element is greater than the maximum element.
    if (curr > max) {
      max = curr;
    }

  }

  // Return the modified array.
  return arr;
}
