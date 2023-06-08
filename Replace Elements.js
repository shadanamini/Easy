const replaceElements = function (array) {
    let maximum = array[array.length - 1];

    array[array.length - 1] = -1;

    for (let i = array.length - 2; i >= 0; i--) {
        let current = array[i];
        
        array[i] = maximum;

        if (current > maximum) {
            maximum = current;
        }
    }

    return array;
};