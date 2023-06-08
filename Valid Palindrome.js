var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '');
    s = s.toLowerCase();

    for (let [i, j] = [0, s.length - 1]; i < j; i++, j--) {   
        if (s[i] !== s[j]) {
            return false;
        }
    }

    return true;
};
