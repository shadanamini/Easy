function containsDuplicate(numbers) {

    const numberSet = new Set();

    for (const number of numbers) {
        
        if (numberSet.has(number)) {
            
            return true;

        }

        numberSet.add(number);

    }

    return false;

}

/* Time Complexity

The time complexity of the containsDuplicate function is O(n), where n is the length of the numbers array. 

This is because the function iterates through each element in the array once, performing constant-time operations (such as set membership checks and set additions) for each element.

*/

/* Space Complexity

The space complexity of the function is O(n) as well. This is because the function creates a numberSet set to store the unique elements. 

The maximum number of elements that can be stored in the set is equal to the number of elements in the numbers array. 

Therefore, the space required is proportional to the size of the input array.

*/