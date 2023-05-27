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

The time complexity of the binary search algorithm implemented in the provided code is O(log n), where n is the number of elements in the input array nums.

This is because the algorithm repeatedly divides the search space in half, reducing the number of remaining elements to search by half in each iteration.

As a result, the search space is effectively halved at each step, leading to a logarithmic time complexity.

*/

/* Space Complexity

The space complexity of the code is O(1), which means it requires constant space regardless of the size of the input array.

The only additional space used in the code is for the variables left, right, middle, and potentialMatch, which are all simple integer variables and do not depend on the size of the input array.

The algorithm does not use any additional data structures or recursion, resulting in a constant space complexity.

*/
