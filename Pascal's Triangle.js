var generate = function (rows) {
    const triangle = [];

    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        
        triangle[i][0] = 1;

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle[i][i] = 1;
    }

    return triangle;
};