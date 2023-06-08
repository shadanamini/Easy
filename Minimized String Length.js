const minimizedStringLength = function (string) {
    const set = new Set(string);
    return set.size;
};