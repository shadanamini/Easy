function removeElement(nums, val) {

    // Iterate over the array in reverse order.
    for (let i = nums.length - 1; i >= 0; i--) {

        // Check if the current element is equal to the target value.
        if (nums[i] === val) {
            // If the element matches the target value, remove it from the array.
            nums.splice(i, 1);
        }

    }

    // Return the length of the modified array.
    return nums.length;
}
