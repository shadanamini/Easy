function categorizeBox(length, width, height, mass) {
    // Calculate the volume of the box.
    const volume = length * width * height;

    // Check if the box is bulky based on the given conditions.
    const bulky = length >= 10 ** 4 || width >= 10 ** 4 || height >= 10 ** 4 || volume >= 10 ** 9;

    // Check if the box is heavy based on the given condition.
    const heavy = mass >= 100;

    // Check the category of the box based on the combination of bulky and heavy conditions.
    if (bulky && heavy) {
        // If the box is both bulky and heavy, return 'Both'.
        return 'Both';
    } else if (bulky && !heavy) {
        // If the box is bulky but not heavy, return 'Bulky'.
        return 'Bulky';
    } else if (!bulky && heavy) {
        // If the box is heavy but not bulky, return 'Heavy'.
        return 'Heavy';
    } else {
        // If the box is neither bulky nor heavy, return 'Neither'.
        return 'Neither';
    }
    
}
