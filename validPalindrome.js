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

/* 

The time complexity of this implementation is O(n), where n is the length of the input string 's'. 

This is because the code iterates through the string once in the for loop, comparing characters from both ends until the middle is reached. 

The number of iterations is proportional to the length of the string.

The space complexity of this implementation is O(1), which means it uses constant space. 

Although the code creates a new string s by performing the replacements and lowercase conversion, the space required for the new string is proportional to the length of the input string 's'. 

Since the additional space used does not grow with the size of the input, it can be considered constant space.

*/
