/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set();
    for (const ch of allowed) {
        allowedSet.add(ch);
    }

    let res = 0;
    for (const word of words) {
        let valid = true;

        for (const ch of word) {
            if (!allowedSet.has(ch)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            res++;
        }
    }

    return res;
};
