/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let sum = 0;
    let left = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        sum += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
        if (sum > maxCost) {
            sum -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
    }

    return length - left;
};
