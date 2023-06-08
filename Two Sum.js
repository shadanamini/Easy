var twoSum = function (numbers, target) {
    const indices = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (indices.has(complement)) {
            return [indices.get(complement), i];
        }

        indices.set(numbers[i], i);
    }

    return [];
};