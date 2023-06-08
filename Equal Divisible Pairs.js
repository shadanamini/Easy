var countPairs = function (numbers, k) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j] && ((i * j) % k === 0)) {
                count = count + 1;
            }
        }
    }
    return count;
};