function longestCommonPrefix(strings) {
    // Handle the edge case where the input array is empty.
    if (strings.length === 0) {
        return '';
    }

    // Iterate through the characters of the first string in the array.
    for (let i = 0; i < strings[0].length; i++) {

        // Check if the current character is present in all strings.
        if (!strings.every((string) => string[i] === strings[0][i])) {
            // If not present, return the prefix found so far.
            return strings[0].slice(0, i);
        }

    }

    // If all characters are the same, return the first string as the common prefix.
    return strings[0];
}
