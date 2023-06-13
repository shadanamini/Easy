const lengthOfLastWord = (string) => {
    let words = string.trim().split(' ');
    return words[words.length - 1].length;
};