function isAnagram(s, t) {
  // Check if the lengths of the two strings are different.
  if (s.length !== t.length) {
    return false;
  }

  // Create an empty object to store the character frequency for string 's'.
  const map = {};

  // Iterate through string 's' and populate the character frequency map.
  for (let i = 0; i < s.length; i++) {

    // If the character is not present in the map, initialize the frequency to 0.
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }

    // Increment the frequency of the character in the map.
    map[s[i]]++;
  }

  // Iterate through string 't'.
  for (let j = 0; j < t.length; j++) {

    // If the character is not present in the map or the frequency is 0, the strings are not anagrams.
    if (!map[t[j]]) {
      return false;
    }

    // Decrement the frequency of the character in the map.
    map[t[j]]--;
  }

  // If both loops complete without finding any inconsistencies, the strings are anagrams.
  return true;
}
