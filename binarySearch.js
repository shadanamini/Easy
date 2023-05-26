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

/* Time Complexity

The binary search algorithm divides the search range in half at each step. As a result, the number of elements to search decreases exponentially. 

In the worst case, the algorithm can find the target or determine its absence after approximately log n iterations, where n is the size of the array. 

Hence, the time complexity is O(log n).

*/

/* Space Complexity

The binarySearch function uses a constant amount of extra space. It only requires a few variables to store the left and right pointers, the middle index, and the potential match value. 

Regardless of the size of the input array, the amount of additional space used remains the same. Therefore, the space complexity is O(1).

*/
