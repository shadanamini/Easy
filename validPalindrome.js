function isPalindrome(s) {
  // Remove non-alphanumeric characters from the string.
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  
  // Convert the string to lowercase.
  s = s.toLowerCase();

  // Initialize two pointers, pointing to the beginning and end of the string.
  for (let [i, j] = [0, s.length - 1]; i < j; i++, j--) {

    // If the characters are not equal, it is not a palindrome.
    if (s[i] != s[j]) {
      return false;
    }

  }

  // If the loop completes without finding any non-matching characters, it is a palindrome.
  return true;
}
