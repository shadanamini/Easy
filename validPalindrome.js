function isPalindrome(s) {
  // Remove non-alphanumeric characters from the string.
  s = s.replace(/[^a-zA-Z0-9]/g, "");

  // Convert the string to lowercase.
  s = s.toLowerCase();

  // Use two pointers to compare characters from both ends.
  for (let [i, j] = [0, s.length - 1]; i < j; ) {
    // Check if characters at the pointers do not match.
    if (s[i] != s[j]) {
      // If characters do not match, it is not a palindrome.
      return false;
    }
    // Move the pointers towards the middle.
    i++;
    j--;
  }
  // If the loop completes without returning false, it is a palindrome.
  return true;
}
