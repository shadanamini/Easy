const getConcatenation = function (numbers) {
    let result = [];

    for (let i = 0; i < numbers.length * 2; i++) {
        result.push(numbers[i % numbers.length]);
    }
    
    return result;
};