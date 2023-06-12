const lengthOfLastWord = (string) => {
    const words = string.trim().split(' ');
    if (words.length === 0) {
        return 0;
    }
    return words[words.length - 1].length;
};