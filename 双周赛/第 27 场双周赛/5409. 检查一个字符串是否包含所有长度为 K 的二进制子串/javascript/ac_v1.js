/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let mod = 1 << (k - 1);
    let left = 0;
    let right = 0;
    let numMap = new Map();
    let currentVal = 0;

    while (right < k) {
        currentVal = (currentVal << 1) + parseInt(s[right], 10);
        right++;
    }
    while (right < s.length) {
        
    }
    console.log(currentVal);
};
