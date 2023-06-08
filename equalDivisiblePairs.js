function countPairs(numbers, k) {
    // Initialize a variable to keep count of pairs that satisfy the given conditions.
    let pairs = 0;

    // Iterate over each element in the array.
    for (let i = 0; i < numbers.length; i++) {
        // Iterate over the remaining elements in the array.
        for (let j = i + 1; j < numbers.length; j++) {
            // Check if the current pair of numbers are equal and satisfy the conditions.
            if (numbers[i] === numbers[j] && ((i * j) % k) === 0) {
                // Increment the count of pairs.
                pairs++;
            }
        }
    }

    // Return the total count of pairs.
    return pairs;
}
