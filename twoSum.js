function twoSum(nums, target) {
  // Create a new Map to store number indices.
  const indices = new Map();

  // Iterate through each element in the nums array.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number.
    const complement = target - nums[i];

    // Check if the complement exists in the indices Map.
    if (indices.has(complement)) {
      // Return the indices of the two numbers that add up to the target.
      return [indices.get(complement), i];
    }

    // Store the current number and its index in the indices Map.
    indices.set(nums[i], i);
  }
}


