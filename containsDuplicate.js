function containsDuplicate(numbers) {
  // Creating a new Set to store elements.
  const numberSet = new Set();

  // Iterating through each number in the array.
  for (const number of numbers) {
    // If the number is already in the Set, there is a duplicate.
    if (numberSet.has(number)) {
      return true; // Found a duplicate, return true.
    }

    // If the number is not in the Set, add it to the Set.
    numberSet.add(number);
  }

  // If there are no duplicates present, return false.
  return false;
}

/* 

The time complexity of the containsDuplicate function is O(n), where n is the length of the numbers array. 

This is because the function iterates through each element in the array once, performing constant-time operations (such as set membership checks and set additions) for each element.

The space complexity of the function is O(n) as well. This is because the function creates a numberSet set to store the unique elements. 

The maximum number of elements that can be stored in the set is equal to the number of elements in the numbers array. 

Therefore, the space required is proportional to the size of the input array.

*/
