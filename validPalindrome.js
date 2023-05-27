function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  s = s.toLowerCase();

  for (let [i, j] = [0, s.length - 1]; i < j; i++, j--) {

    if (s[i] != s[j]) {
      return false;
    }
    
  }

  return true;
}
