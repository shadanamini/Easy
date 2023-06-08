var categorizeBox = function (length, width, height, mass) {
    const volume = length * width * height;
    const bulky = length >= Math.pow(10, 4) || width >= Math.pow(10, 4) || height >= Math.pow(10, 4) || volume >= Math.pow(10, 9);
    const heavy = mass >= 100;

    if (bulky && heavy) {
        return 'Both';
    } else if (!bulky && !heavy) {
        return 'Neither';
    } else {
        return bulky ? 'Bulky' : 'Heavy';
    }
};