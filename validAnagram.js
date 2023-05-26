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

/* Time Complexity

The time complexity of the isAnagram function is O(n), where n is the length of the input strings s and t. 

This is because the function iterates over both strings once, performing constant-time operations (such as object property access and updates) for each character.

*/

/* Space Complexity

The space complexity of the function is O(1) or O(k), where k is the number of unique characters in the input strings. The function uses an 
object (map) to store the frequencies of characters in string s. 

The maximum number of entries in the map object is determined by the number of unique characters in s. 

However, since the number of unique characters is typically limited (e.g., the number of lowercase alphabets), it can be considered constant. 

Therefore, the space required by the function can be considered O(1) or O(k) depending on the context.

*/
