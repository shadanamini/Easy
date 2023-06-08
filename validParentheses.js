function isValid(string) {
    // Create a mapping of opening brackets to their corresponding closing brackets.
    const map = {'(' : ')', '{' : '}', '[' : ']'};
    
    // Create an empty stack to store opening brackets.
    const stack = [];

    // Iterate through each character in the input string.
    for (let character of string) {

        // If the character is an opening bracket, push its corresponding closing bracket onto the stack.
        if (map[character]) {
            stack.push(map[character]);
        }

        // If character is a closing bracket and matches the top of the stack, pop the top element from the stack.
        else if (stack.length > 0 && stack[stack.length - 1] === character) {
            stack.pop();
        }

        // If character is a closing bracket but doesn't match the top of the stack or if not a bracket at all, return false.
        else {
            return false;
        }

    }

    // If the stack is empty, return true.
    return !stack.length;
}
