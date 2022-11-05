/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    for (let i = Math.floor(sequence.length / word.length); i >= 0; i--) {
        if (sequence.indexOf(word.repeat(i)) >= 0) {
            return i;
        }
    }

    return 0;
};
