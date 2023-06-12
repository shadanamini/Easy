const reverseString = (string) => {
    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        const temp = string[start];
        string[start] = string[end];
        string[end] = temp;

        start++;
        end--;
    }

    return string;
};