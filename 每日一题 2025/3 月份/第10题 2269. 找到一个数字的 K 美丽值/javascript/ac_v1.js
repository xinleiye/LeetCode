/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    const numStr = num.toString();
    const length = numStr.length;
    let res = 0;

    for (let i = k; i <= length; i++) {
        const subNum = Number(numStr.substring(i - k, i));

        if (subNum && (num % subNum === 0)) {
            res++;
        }
    }

    return res;
};
