function generate(rows) {
    // Create an empty array to store Pascal's triangle.
    const triangle = [];

    for (let i = 0; i < rows; i++) {
        // Create a new array for each row.
        triangle[i] = [];

        // Set the first element of each row to 1.
        triangle[i][0] = 1;

        // Calculate the values between the first and last element of each row.
        for (let j = 1; j < i; j++) {
            // Each value is the sum of the corresponding elements from the previous row.
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Set the last element of each row to 1.
        triangle[i][i] = 1;
    }

    // Return the generated Pascal's triangle.
    return triangle;
}
