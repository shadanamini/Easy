const longestCommonPrefix = (strings) => {
    let prefix = strings[0];
    for (const string of strings) {
        for (let i = prefix.length - 1; i >= 0; i--) {
            if (prefix[i] !== string[i]) {
                prefix = prefix.slice(0, i);
            }
        }
    }
    return prefix;
};