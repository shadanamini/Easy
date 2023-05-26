function isAnagram(s, t) {

    if (s.length !== t.length) {
        
        return false;

    }

    const map = {};

    for (let i = 0; i < s.length; i++) {

        if (!map[s[i]]) {

            map[s[i]] = 0;

        }

        map[s[i]]++;

    }

    for (let j = 0; j < t.length; j++) {

        if (!map[t[j]]) {

            return false;

        }

        map[t[j]]--;

    }

    return true;

}


/* Time Complexity

The time complexity of the isAnagram function is O(n), where n is the length of the input strings s and t. 

This is because the function iterates over both strings once, performing constant-time operations (such as object property access and updates) for each character.

*/

/* Space Complexity

The space complexity of the function is O(1) or O(k), where k is the number of unique characters in the input strings. The function uses an 
object (map) to store the frequencies of characters in string s. 

The maximum number of entries in the map object is determined by the number of unique characters in s. 

However, since the number of unique characters is typically limited (e.g., the number of lowercase alphabets), it can be considered constant. 

Therefore, the space required by the function can be considered O(1) or O(k) depending on the context.

*/