/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const length = n.length;
    const num = parseInt(n, 10);

    if (num < 10 || num === 10 ** (length - 1)) {
        return String(num - 1);
    }
    if (num + 1 === 10 ** length) {
        return String(num + 2);
    }
    if (num - 1 === 10 ** (length - 1)) {
        return String(num - 2);
    }

    const pre = parseInt(n.slice(0, Math.floor((length + 1) / 2)), 10);
    let minDiff = Number.MAX_SAFE_INTEGER;
    let res = "";
    for (let i = -1; i <= 1; i++) {
        const aPre = String((pre | 0) + i);
        const aNumStr = aPre + (length & 1 ? aPre.slice(0, -1) : aPre).split("").reverse().join("");
        const diff = Math.abs(num - parseInt(aNumStr, 10));
        if (diff && diff < minDiff) {
            minDiff = diff;
            res = aNumStr;
        }
    }

    return res;
};
