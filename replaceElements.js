function replaceElements(arr) {
  // Initialize the variable 'max' to hold the maximum value.
  // Initialize it with the last element of the array.
  let max = arr[arr.length - 1];

  // Replace the last element of the array with -1.
  arr[arr.length - 1] = -1;

  // Traverse the array from the second-to-last element to the first element.
  // Starting from the end ensures that we always have the maximum element on the right side.
  for (let i = arr.length - 2; i >= 0; i--) {
    let curr = arr[i]; // Store the current element in 'curr' variable.

    // Replace the current element with the maximum element found so far.
    arr[i] = max;

    // Check if the current element is greater than the maximum element.
    // If so, update the 'max' variable to hold the new maximum.
    if (curr > max) {
      max = curr;
    }
  }

  // Return the modified array.
  return arr;
}
