/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const total = num.length;
    const numCount = new Array(10).fill(0);
    const base = "0".charCodeAt();

    for (const n of num) {
        numCount[n.charCodeAt() - base]++;
    }
    for (let i = 0; i < total; i++) {
        if (numCount[i] !== Number(num[i])) {
            return false;
        }
    }

    return true;
};
