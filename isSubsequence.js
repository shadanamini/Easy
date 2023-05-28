function isSubsequence(s, t) {
    // Create pointers for string 's' and string 't'.
    let sPointer = 0; 
    let tPointer = 0; 
  
    while (sPointer < s.length && tPointer < t.length) {
      // Continue until we reach the end of either 's' or 't'.
  
      if (s[sPointer] === t[tPointer]) {

        // If the current characters match, move to the next character in 's'.
        sPointer++; 
      }
  
      // If the characters do not match, move to the next character in 't'.
      tPointer++; 
    }
  
    // Return true if we reached the end of 's', false otherwise.
    return sPointer === s.length; 
}
  