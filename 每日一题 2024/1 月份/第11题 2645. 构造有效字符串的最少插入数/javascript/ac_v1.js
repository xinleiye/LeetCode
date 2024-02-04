/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    const total = word.length;
    let count = 1;

    for (let i = 1; i < total; i++) {
        if (word[i] <= word[i - 1]) {
            count++;
        }
    }

    return count * 3 - total;
};
