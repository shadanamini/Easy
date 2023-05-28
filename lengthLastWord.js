function lengthOfLastWord(s) {
    // Remove leading/trailing spaces and split the string into an array of words.
    const words = s.trim().split(' ');

    // Return 0 if there are no words.
    if (words.length === 0) {
        return 0;
    }

    // Return the length of the last word.
    return words[words.length - 1].length;
}