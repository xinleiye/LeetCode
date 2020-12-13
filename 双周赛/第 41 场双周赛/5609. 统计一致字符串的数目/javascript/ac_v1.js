/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res = 0;
    let allowedSet = new Set();
    let isValid = (set, str) => {
        for (let i = 0; i < str.length; i++) {
            if (!set.has(str[i])) {
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < allowed.length; i++) {
        allowedSet.add(allowed[i]);
    }
    words.forEach(word => {
        if (isValid(allowedSet, word)) {
            res++;
        }
    });

    return res;
};
