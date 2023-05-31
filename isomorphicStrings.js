function isIsomorphic(s, t) {
    // Check if the lengths of the input strings are different.
    if (s.length !== t.length) {
        return false;
    }

    // Create two maps to store character mappings.
    const mapOne = new Map();
    const mapTwo = new Map();

    // Iterate through each character of the strings.
    for (let i = 0; i < s.length; i++) {

        // Check if the character is already mapped in mapOne.
        if (mapOne.has(s[i])) {
            // Check if the mapped character in mapOne is different from the current character in 't'.
            return (mapOne.get(s[i]) !== t[i]) ? false : null;
        } else {
            // If the character is not mapped in mapOne, add it with its corresponding character in 't'.
            mapOne.set(s[i], t[i]);
        }

        // Check if the character is already mapped in mapTwo.
        if (mapTwo.has(t[i])) {
            // Check if the mapped character in mapTwo is different from the current character in 's'.
            return (mapTwo.get(t[i]) !== s[i]) ? false : null;
        } else {
            // If the character is not mapped in mapTwo, add it with its corresponding character in 's'.
            mapTwo.set(t[i], s[i]);
        }

    }

    // If all characters are mapped consistently in both directions, return true.
    return true;
}
