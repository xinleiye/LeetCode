/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let sVal = "";

    for (let i = 0, len = s.length; i < len; i++) {
        sVal += s.charCodeAt(i) - 96;
    }

    for (let i = 1; i <= k; i++) {
        let sum = 0;

        for (let j = 0, len = sVal.length; j < len; j++) {
            sum += parseInt(sVal[j], 10);
        }
        sVal = String(sum);
    }

    return parseInt(sVal, 10);
};
