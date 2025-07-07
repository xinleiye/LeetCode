/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    let add = 0;

    for (let i = operations.length - 1; i >= 0; i--) {
        const pow2 = Math.pow(2, i);

        if (k > pow2) {
            add += operations[i];
            k -= pow2;
        }
    }

    return String.fromCharCode(97 + (add % 26));
};
