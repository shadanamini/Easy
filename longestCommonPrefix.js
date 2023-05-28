function longestCommonPrefix(strings) {
    let first = strings[0]; 

    // Iterate through each string in the array.
    for (let string of strings) { 

        // Iterate through each character in the current string, starting from the last character.
        for (let i = first.length - 1; i >= 0; i--) { 

            // If the character at index (i) is not equal in the current string, update the common prefix.
            if (first[i] !== string[i]) { 
                // Remove characters from index (i) onwards from the common prefix.
                first = first.slice(0, i); 
            }
        }
    }

    // Return the final common prefix.
    return first; 
}
