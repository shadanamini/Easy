const minimizedStringLength = (string) => {
    const set = new Set(string);
    return set.size;
};