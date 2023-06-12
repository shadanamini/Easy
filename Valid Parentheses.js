const isValid = (string) => {
    const map = {'(' : ')', '{' : '}', '[' : ']'};
    const stack = [];

    for (let character of string) {
        if (map[character]) {
            stack.push(map[character]);
        } else if (stack.length > 0 && stack[stack.length - 1] === character) {
            stack.pop();
        } else {
            return false;
        }
    }

    return !stack.length;
};