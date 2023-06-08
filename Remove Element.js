const removeElement = function(numbers, value) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] === value) {
            numbers.splice(i, 1);
        }
    }
    return numbers.length;
};