const longestCommonPrefix = function (strings) {
    const prefix = strings[0];

    for (const string of strings) {
        for (let i = prefix.length - 1; i >= 0; i--) {
            if (prefix[i] !== string[i]) {
                const updatedPrefix = prefix.slice(0, i);
                prefix = updatedPrefix;
            }
        }
    }

    return prefix;
};