const isEmpty = function (object) {
    for (let key in object) {
        return false;
    }
    return true;
};