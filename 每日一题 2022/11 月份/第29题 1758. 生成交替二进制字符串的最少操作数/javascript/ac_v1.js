/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let cur0 = 0;
    let cur1 = 0;
    let pre0 = 0;
    let pre1 = 0;

    for (const ch of s) {
        pre0 = cur0;
        pre1 = cur1;
        if (ch === "1") {
            cur0 = pre1 + 1;
            cur1 = pre0;
        } else {
            cur0 = pre1;
            cur1 = pre0 + 1;
        }
    }

    return Math.min(cur0, cur1);
};
