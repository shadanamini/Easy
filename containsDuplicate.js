function containsDuplicate(numbers) {
  // Creating a new Set to store elements.
  const set = new Set();

  // Iterating through each number in the array.
  for (const number of numbers) {
    
    // If the number is already in the Set, there is a duplicate.
    if (set.has(number)) {
      return true;
    }

    // If the number is not in the Set, add it to the Set.
    set.add(number);
  }

  // If there are no duplicates present, return false.
  return false;
}
