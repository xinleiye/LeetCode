/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let unMatch = 0;

    for (const ch of s) {
        if (ch === "[") {
            unMatch++;
        } else {
            if (unMatch > 0) {
                unMatch--;
            } else {
                unMatch++;
            }
        }
    }

    return unMatch / 2;
};
