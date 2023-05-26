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

/* Time Complexity

The above code has a time complexity of O(n) because it iterates over the array of numbers once in a single loop.

The time complexity is directly proportional to the size of the input array (n),
as it performs a constant number of operations for each element in the array.

In the code, the loop iterates through each number in the nums array, performs a constant number of operations within each iteration,
and then moves on to the next number.

As the size of the array increases, the number of iterations also increases linearly.

*/

/* Space Complexity

Regarding space complexity, the code also has a space complexity of O(n) because it utilizes a Map called
indices to store the indices of numbers encountered so far.

In the worst case scenario, where all numbers are unique and no two numbers sum up to the target, the map will store n key-value pairs.

The space required by the map scales with the input size. As the input array grows,
the map will also grow to accommodate the increasing number of elements.

Thus, the space complexity is linearly proportional to the size of the input array (n), resulting in O(n) space complexity.

*/
