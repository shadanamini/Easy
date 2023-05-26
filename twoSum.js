function twoSum(nums, target) {
  const indices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (indices.has(complement)) {
      return [indices.get(complement), i];
    }

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
