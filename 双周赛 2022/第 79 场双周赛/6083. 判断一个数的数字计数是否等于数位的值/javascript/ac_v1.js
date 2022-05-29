/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const numArr = new Array(10).fill(0);

    for (const n of num) {
        numArr[n.charCodeAt() - 48]++;
    }
    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) !== numArr[i]) {
            return false;
        }
    }

    return true;
};
