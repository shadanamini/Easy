function isAnagram(s, t) {
  // Check if the lengths of the input strings are different.
  if (s.length !== t.length) {
    return false;
  }

  // Create an empty object to store character frequencies.
  const map = {};

  // Iterate over the characters in the first string 's'.
  for (let i = 0; i < s.length; i++) {
    // If the character is not already in the 'map' object, initialize its frequency to 0.
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }

    // Increment the frequency of the character.
    map[s[i]]++;
  }

  // Iterate over the characters in the second string 't'.
  for (let j = 0; j < t.length; j++) {
    // If the character does not exist in the 'map' object, it means it's not an anagram.
    if (!map[t[j]]) {
      return false;
    }

    // Decrement the frequency of the character.
    map[t[j]]--;
  }

  // If all characters in both strings have the same frequencies, they are anagrams.
  return true;
}
