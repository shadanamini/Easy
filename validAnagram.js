var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = {};

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 0;
        }
        map[s[i]] += 1;
    }

    for (let j = 0; j < t.length; j++) {
        if (!map[t[j]]) {
            return false;
        }
        map[t[j]] -= 1;
    }

    return true;
};