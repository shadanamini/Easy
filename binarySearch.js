function binarySearch(nums, target) {
  // Initialize the left and right pointers to the start and end indices of the array, respectively.
  let left = 0;
  let right = nums.length - 1;

  // Continue the loop as long as the left pointer is less than or equal to the right pointer.
  while (left <= right) {
    // Calculate the middle index as the average of the left and right indices.
    const middle = Math.floor((left + right) / 2);

    // Get the potential match value at the middle index.
    const potentialMatch = nums[middle];

    // Check if the potential match is equal to the target.
    if (target === potentialMatch) {
      return middle; // Target found, return the index.
    } else if (target < potentialMatch) {
      // If the target is less than the potential match, update the right pointer to search the left half.
      right = middle - 1;
    } else {
      // If the target is greater than the potential match, update the left pointer to search the right half.
      left = middle + 1;
    }
  }

  // Target not found, return -1.
  return -1;
}
